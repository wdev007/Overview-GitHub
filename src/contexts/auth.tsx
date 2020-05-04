import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface User {
  login: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  avatar_url: string;
  created_at: Date;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  error: string;
  signIn(username: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadStoragedData() {
      const storageUser = await AsyncStorage.getItem('@overviewGitHub:user');

      if (storageUser) {
        setUser(JSON.parse(storageUser));
      }
    }
    loadStoragedData();
  }, []);

  async function signIn(username: string): Promise<void> {
    const storageUser = await AsyncStorage.getItem('@overviewGitHub:user');
    console.log(storageUser, 'storage hi');
    const response = await api.get(`/users/${username}`);

    const {data, status} = response;

    if (status !== 200) {
      setError(data.message);
    }
    const {
      login,
      name,
      bio,
      followers,
      following,
      avatar_url,
      created_at,
    } = data;
    setUser({
      login,
      name,
      bio,
      followers,
      following,
      avatar_url,
      created_at,
    });
    await AsyncStorage.setItem('@overviewGitHub:user', JSON.stringify(data));
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, signIn, signOut, error}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
