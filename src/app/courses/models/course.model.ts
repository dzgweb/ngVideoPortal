import { Author } from './author.model';

export interface ICourse {
  id: number;
  name: string;
  date: string;
  length: number;
  description: string;
  authors?: Author[];
  isTopRated: boolean;
}

export class Course implements ICourse {
  constructor(
    public id: number = 0,
    public name: string = '',
    public date: string = '',
    public length: number = 0,
    public description: string = '',
    public authors?: Author[],
    public isTopRated: boolean = false
  ) {}
}
