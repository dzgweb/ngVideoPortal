export interface ICource {
  id: number;
  title: string;
  creationDate: number;
  duration: number;
  description: string;
}

export class Cource implements ICource {
  constructor(
    public id: number = null,
    public title: string = '',
    public creationDate: number = 0,
    public duration: number = 0,
    public description: string = ''
  ) { }
}
