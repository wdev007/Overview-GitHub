import {User} from './User';

export interface Repository {
  id: number;
  name: string;
  private: boolean;
  owner: User;
  description: string;
  fork: boolean;
  forks: number;
  url: string;
}
