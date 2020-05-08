import {User} from './User';

export interface AuthContextData {
  signed: boolean;
  user: User | null;
  error: string;
  signIn(username: string): Promise<void>;
  signOut(): void;
}
