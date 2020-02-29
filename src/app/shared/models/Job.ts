import {Purchase} from './Purchase';

export class Job {
  id?: number;
  purchases?: Purchase[];

  constructor(public name: string, public userId: number) {
  }
}
