import axios from 'axios';
import { assert, expect, test } from 'vitest'
import { CmsCategoriesRepository } from './categories';
// Edit an assertion and save to see HMR in action


test('categories', async () => {
    const axiosInstance = axios.create({
        baseURL: 'https://dreamvention.myshopunity.com/303/vuefront_v060/index.php?route=extension/module/d_vuefront/graphql'
    })
  const cms = new CmsCategoriesRepository(axiosInstance)

  const output = await cms.productList();
  expect(output.home).toBeDefined();
  expect(output.home.meta.title).eq('Your Store');
})