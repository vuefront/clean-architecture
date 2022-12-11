import { IUserData, IUser } from './user.types';
import { Entity } from '@vuefront/core';

export class User extends Entity<IUserData> implements IUser {
  constructor(data: IUserData) {
    super(data);
    this.validate();
  }
  get id() {
    return this.data.id;
  }

  validate() {
    if (this.id) throw Error('User must have an id');
  }
}
