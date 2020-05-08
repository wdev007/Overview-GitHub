export interface User {
  login: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  avatar_url: string;
  created_at: Date;
}
