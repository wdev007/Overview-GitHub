import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import api from '../../services/api';

import {Repository} from '../../models';
import AuthContext from '../../contexts/auth';
import ListRepositories from '../Repository/List';

type RootStackParamList = {
  Repository: {
    id: number;
  };
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Repository'>;
};

const Home = ({navigation}: Props) => {
  const {user} = useContext(AuthContext);
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    loadRepositories();
  }, []);

  const loadRepositories = async (page = 1) => {
    const {data} = await api.get<Repository[]>(
      `/users/${user?.login}/repos?page=${page}&per_page=${10}`,
    );

    setRepositories([...repositories, ...data]);
  };

  const handlePress = (id: number) => {
    navigation.navigate('Repository', {id});
  };

  return (
    <View style={styles.container}>
      <ListRepositories
        handlePress={handlePress}
        repositories={repositories}
        loadData={loadRepositories}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8F9',
  },
});

export default Home;
