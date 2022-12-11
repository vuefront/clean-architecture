import { IEntity, IUser, IUserData } from '@vuefront/core';

export interface IAccountData extends IUserData {}

export interface IAccount extends IUser, IEntity<IAccountData> {}
