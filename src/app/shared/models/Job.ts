import {Purchase} from './Purchase';
import {Category} from './Category';

export class Job {
  id?: number;
  purchases?: Purchase[];
  constructor(public name: string, public userId: number, public category: Category) {
  }
}
