import { UseCase } from '@vuefront/core';
import { IAccountData } from '../';

export class AccountUseCase extends UseCase {
  async getMyAccount(): Promise<IAccountData> {}

  async login(): Promise<IAccountData> {}

  logout() {}
}
