import { Service } from 'vuefront/core';
import { IProductFilterOptions } from './interfaces';

export class ProductsService extends Service {
  async getProductsByCategory(
    categoryId: number,
    filterOptions: IProductFilterOptions
  ): Promise<IProductData[] | undefined> {
    try {
      return await this.productsGateway.productList({
        categoryId,
        ...filterOptions,
      });
    } catch (error) {
      console.log(error);
    }
  }

  getProductsByManufacturer() {}

  getProductsByLatest() {}
}
