import { CmsRepository } from 'vuefront/repository-cms';
import { IProductData, IProductsGateway } from 'domain';

export class ProductsGateway implements IProductsGateway {
  constructor(private cms: CmsRepository) {}

  async productsList(): Promise<IProductData[] | undefined> {
    const options = {
      page: 1,
      size: 10,
    };
    const result = await this.cms.productList(options);

    if (result.data) {
      return result.data.map((item) => this.productMap.toData(item));
    }
  }
}
