import {Purchase} from './Purchase';

export interface Job {
  id: number;
  name: string;
  userId: number;
  purchases?: Purchase[];
}
