import { IEntity } from './';

export class Entity<T> implements IEntity<T> {
  public readonly data: T;
  constructor(data: T) {
    this.data = data;
  }
}
