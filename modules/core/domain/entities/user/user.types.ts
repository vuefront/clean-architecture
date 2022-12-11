import { IEntity } from '@vuefront/core';

export interface IUserData {
  id: string;
}

export interface IUser extends IEntity<IUserData> {}
