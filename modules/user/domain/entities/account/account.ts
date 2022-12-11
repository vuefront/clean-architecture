import { User } from '@vuefront/core';
import { IAccountData, IAccount } from './account.types';

export class Account extends User implements IAccount {
  constructor(data: IAccountData) {
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
