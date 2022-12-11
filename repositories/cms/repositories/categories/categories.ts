import { Repository } from '../';

export class CmsCategoriesRepository extends Repository {
  async productList() {
    return await this.request({
      query: `{
                home {
                  meta {
                    title
                    description
                  }
                }
              }`,
    });
  }
}
