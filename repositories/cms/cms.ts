import { AxiosInstance } from 'axios';
import { CmsCategoriesRepository } from './repositories';
import { ICmsRepositoryConfig, ICmsRepository } from './cms.types';

export class CmsRepository implements ICmsRepository {
  public cateogires: CmsCategoriesRepository;

  constructor(public config: ICmsRepositoryConfig, public axios: AxiosInstance) {
    if (config.repositories.includes['categories']) {
      this.cateogires = new CmsCategoriesRepository(this.axios);
    }
  }
}
