import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type AccountAddress = {
  __typename?: 'AccountAddress';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  countryId?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  zone?: Maybe<Zone>;
  zoneId?: Maybe<Scalars['String']>;
};

export type AccountAddressInput = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  countryId?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  zipcode?: InputMaybe<Scalars['String']>;
  zoneId?: InputMaybe<Scalars['String']>;
};

export type AddressField = {
  __typename?: 'AddressField';
  defaultValue?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<FieldValue>>>;
};

export type Cart = {
  __typename?: 'Cart';
  products?: Maybe<Array<Maybe<CartProduct>>>;
  total?: Maybe<Scalars['String']>;
};

export type CartOption = {
  id?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type CartProduct = {
  __typename?: 'CartProduct';
  key?: Maybe<Scalars['String']>;
  option?: Maybe<Array<Maybe<CartProductOption>>>;
  product?: Maybe<Product>;
  quantity?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['String']>;
};

export type CartProductOption = {
  __typename?: 'CartProductOption';
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Category = {
  __typename?: 'Category';
  categories?: Maybe<Array<Maybe<Category>>>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  imageLazy?: Maybe<Scalars['String']>;
  keyword?: Maybe<Scalars['String']>;
  meta?: Maybe<Meta>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type CategoryCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type CategoryUrlArgs = {
  url?: InputMaybe<Scalars['String']>;
};

export type CategoryResult = {
  __typename?: 'CategoryResult';
  content?: Maybe<Array<Maybe<Category>>>;
  first?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Boolean']>;
  number?: Maybe<Scalars['Int']>;
  numberOfElements?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  totalElements?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type CheckoutLinkResult = {
  __typename?: 'CheckoutLinkResult';
  link?: Maybe<Scalars['String']>;
};

export type ConfirmOrderResult = {
  __typename?: 'ConfirmOrderResult';
  callback?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  url?: Maybe<Scalars['String']>;
};

export type Contact = {
  __typename?: 'Contact';
  address?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  geocode?: Maybe<Scalars['String']>;
  locations?: Maybe<Array<Maybe<Location>>>;
  open?: Maybe<Scalars['String']>;
  store?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
};

export type ContactResult = {
  __typename?: 'ContactResult';
  status?: Maybe<Scalars['Boolean']>;
};

export type CountriesResult = {
  __typename?: 'CountriesResult';
  content?: Maybe<Array<Maybe<Country>>>;
  first?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Boolean']>;
  number?: Maybe<Scalars['Int']>;
  numberOfElements?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  totalElements?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type Country = {
  __typename?: 'Country';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type CreateOrderResult = {
  __typename?: 'CreateOrderResult';
  success?: Maybe<Scalars['String']>;
};

export type Currency = {
  __typename?: 'Currency';
  active?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  symbol_left?: Maybe<Scalars['String']>;
  symbol_right?: Maybe<Scalars['String']>;
  /** @deprecated Changed to name! */
  title?: Maybe<Scalars['String']>;
};

export type Customer = {
  __typename?: 'Customer';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type CustomerInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type ExtraField = {
  __typename?: 'ExtraField';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type FieldValue = {
  __typename?: 'FieldValue';
  text?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type FileResult = {
  __typename?: 'FileResult';
  code?: Maybe<Scalars['String']>;
};

export type HomeResult = {
  __typename?: 'HomeResult';
  meta?: Maybe<Meta>;
};

export type InputField = {
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type Language = {
  __typename?: 'Language';
  active?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Location = {
  __typename?: 'Location';
  address?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  geocode?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  imageLazy?: Maybe<Scalars['String']>;
  open?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
};

export type LoggedResult = {
  __typename?: 'LoggedResult';
  customer?: Maybe<Customer>;
  status?: Maybe<Scalars['Boolean']>;
};

export type LoginResult = {
  __typename?: 'LoginResult';
  customer?: Maybe<Customer>;
  token?: Maybe<Scalars['String']>;
};

export type LogoutResult = {
  __typename?: 'LogoutResult';
  status?: Maybe<Scalars['Boolean']>;
};

export type Manufacturer = {
  __typename?: 'Manufacturer';
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  imageBig?: Maybe<Scalars['String']>;
  imageLazy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sort_order?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};


export type ManufacturerUrlArgs = {
  url?: InputMaybe<Scalars['String']>;
};

export type ManufacturerResult = {
  __typename?: 'ManufacturerResult';
  content?: Maybe<Array<Maybe<Manufacturer>>>;
  first?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Boolean']>;
  number?: Maybe<Scalars['Int']>;
  numberOfElements?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  totalElements?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type Meta = {
  __typename?: 'Meta';
  description?: Maybe<Scalars['String']>;
  keyword?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type OptionValue = {
  __typename?: 'OptionValue';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Order = {
  __typename?: 'Order';
  id?: Maybe<Scalars['String']>;
};

export type Page = {
  __typename?: 'Page';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  keyword?: Maybe<Scalars['String']>;
  meta?: Maybe<Meta>;
  name?: Maybe<Scalars['String']>;
  sort_order?: Maybe<Scalars['Int']>;
  /** @deprecated Changed to name! */
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type PageUrlArgs = {
  url?: InputMaybe<Scalars['String']>;
};

export type PageResult = {
  __typename?: 'PageResult';
  content?: Maybe<Array<Maybe<Page>>>;
  first?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Boolean']>;
  number?: Maybe<Scalars['Int']>;
  numberOfElements?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  totalElements?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type PaymentAddressResult = {
  __typename?: 'PaymentAddressResult';
  agree?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<AddressField>>>;
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  codename?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  categories?: Maybe<Array<Maybe<CategoryBlog>>>;
  datePublished?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  imageLazy?: Maybe<Scalars['String']>;
  keyword?: Maybe<Scalars['String']>;
  meta?: Maybe<Meta>;
  name?: Maybe<Scalars['String']>;
  next?: Maybe<Post>;
  prev?: Maybe<Post>;
  rating?: Maybe<Scalars['Float']>;
  reviews?: Maybe<PostReviewResult>;
  shortDescription?: Maybe<Scalars['String']>;
  /** @deprecated Changed to name! */
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type PostUrlArgs = {
  url?: InputMaybe<Scalars['String']>;
};

export type PostResult = {
  __typename?: 'PostResult';
  content?: Maybe<Array<Maybe<Post>>>;
  first?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Boolean']>;
  number?: Maybe<Scalars['Int']>;
  numberOfElements?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  totalElements?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type Product = {
  __typename?: 'Product';
  attributes?: Maybe<Array<Maybe<ProductAttribute>>>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Array<Maybe<ExtraField>>>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  imageBig?: Maybe<Scalars['String']>;
  imageLazy?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<ProductImage>>>;
  keyword?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Manufacturer>;
  manufacturerId?: Maybe<Scalars['String']>;
  meta?: Maybe<Meta>;
  minimum?: Maybe<Scalars['Int']>;
  model?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<ProductOption>>>;
  price?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Maybe<Product>>>;
  rating?: Maybe<Scalars['Float']>;
  reviews?: Maybe<Array<Maybe<ProductReview>>>;
  shortDescription?: Maybe<Scalars['String']>;
  special?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['Boolean']>;
  tax?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type ProductImagesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type ProductProductsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type ProductUrlArgs = {
  url?: InputMaybe<Scalars['String']>;
};

export type ProductOption = {
  __typename?: 'ProductOption';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<OptionValue>>>;
};

export type ProductResult = {
  __typename?: 'ProductResult';
  content?: Maybe<Array<Maybe<Product>>>;
  first?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Boolean']>;
  number?: Maybe<Scalars['Int']>;
  numberOfElements?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  totalElements?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type ProductReview = {
  __typename?: 'ProductReview';
  author?: Maybe<Scalars['String']>;
  author_email?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
};

export type RootMutationType = {
  __typename?: 'RootMutationType';
  accountAddAddress?: Maybe<AccountAddress>;
  accountEdit?: Maybe<Customer>;
  accountEditAddress?: Maybe<AccountAddress>;
  accountEditPassword?: Maybe<Customer>;
  accountLogin?: Maybe<LoginResult>;
  accountLogout?: Maybe<LogoutResult>;
  accountRegister?: Maybe<Customer>;
  accountRemoveAddress?: Maybe<Array<Maybe<AccountAddress>>>;
  addBlogPostReview?: Maybe<Post>;
  addReview?: Maybe<Product>;
  addToCart?: Maybe<Cart>;
  addToCompare?: Maybe<Array<Maybe<Product>>>;
  addToWishlist?: Maybe<Array<Maybe<Product>>>;
  clearCart?: Maybe<Cart>;
  confirmOrder?: Maybe<ConfirmOrderResult>;
  contactSend?: Maybe<ContactResult>;
  createOrder?: Maybe<CreateOrderResult>;
  editCurrency?: Maybe<Array<Maybe<Currency>>>;
  editLanguage?: Maybe<Array<Maybe<Language>>>;
  removeCart?: Maybe<Cart>;
  removeCompare?: Maybe<Array<Maybe<Product>>>;
  removeWishlist?: Maybe<Array<Maybe<Product>>>;
  updateCart?: Maybe<Cart>;
  updateOrder?: Maybe<UpdateOrderResult>;
  uploadFile?: Maybe<FileResult>;
};


export type RootMutationTypeAccountAddAddressArgs = {
  address?: InputMaybe<AccountAddressInput>;
};


export type RootMutationTypeAccountEditArgs = {
  customer?: InputMaybe<CustomerInput>;
};


export type RootMutationTypeAccountEditAddressArgs = {
  address?: InputMaybe<AccountAddressInput>;
  id?: InputMaybe<Scalars['String']>;
};


export type RootMutationTypeAccountEditPasswordArgs = {
  password?: InputMaybe<Scalars['String']>;
};


export type RootMutationTypeAccountLoginArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type RootMutationTypeAccountRegisterArgs = {
  customer?: InputMaybe<CustomerInput>;
};


export type RootMutationTypeAccountRemoveAddressArgs = {
  id?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type RootMutationTypeAddBlogPostReviewArgs = {
  author?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Float']>;
};


export type RootMutationTypeAddReviewArgs = {
  author?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Float']>;
};


export type RootMutationTypeAddToCartArgs = {
  id?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<Array<InputMaybe<CartOption>>>;
  quantity?: InputMaybe<Scalars['Int']>;
};


export type RootMutationTypeAddToCompareArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type RootMutationTypeAddToWishlistArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type RootMutationTypeConfirmOrderArgs = {
  withPayment?: InputMaybe<Scalars['Boolean']>;
};


export type RootMutationTypeContactSendArgs = {
  email?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};


export type RootMutationTypeEditCurrencyArgs = {
  code?: InputMaybe<Scalars['String']>;
};


export type RootMutationTypeEditLanguageArgs = {
  code?: InputMaybe<Scalars['String']>;
};


export type RootMutationTypeRemoveCartArgs = {
  key?: InputMaybe<Scalars['String']>;
};


export type RootMutationTypeRemoveCompareArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type RootMutationTypeRemoveWishlistArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type RootMutationTypeUpdateCartArgs = {
  key?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
};


export type RootMutationTypeUpdateOrderArgs = {
  paymentAddress?: InputMaybe<Array<InputMaybe<InputField>>>;
  paymentAddressId?: InputMaybe<Scalars['String']>;
  paymentMethod?: InputMaybe<Scalars['String']>;
  shippingAddress?: InputMaybe<Array<InputMaybe<InputField>>>;
  shippingAddressId?: InputMaybe<Scalars['String']>;
  shippingMethod?: InputMaybe<Scalars['String']>;
};


export type RootMutationTypeUploadFileArgs = {
  file?: InputMaybe<Scalars['Upload']>;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  accountAddress?: Maybe<AccountAddress>;
  accountAddressList?: Maybe<Array<Maybe<AccountAddress>>>;
  accountCheckLogged?: Maybe<LoggedResult>;
  authProxy?: Maybe<Scalars['String']>;
  cart?: Maybe<Cart>;
  categoriesBlogList?: Maybe<CategoryBlogResult>;
  categoriesList?: Maybe<CategoryResult>;
  category?: Maybe<Category>;
  categoryBlog?: Maybe<CategoryBlog>;
  checkoutLink?: Maybe<CheckoutLinkResult>;
  compare?: Maybe<Array<Maybe<Product>>>;
  contact?: Maybe<Contact>;
  countriesList?: Maybe<CountriesResult>;
  country?: Maybe<Country>;
  currency?: Maybe<Array<Maybe<Currency>>>;
  home?: Maybe<HomeResult>;
  language?: Maybe<Array<Maybe<Language>>>;
  manufacturer?: Maybe<Manufacturer>;
  manufacturerList?: Maybe<ManufacturerResult>;
  page?: Maybe<Page>;
  pagesList?: Maybe<PageResult>;
  paymentAddress?: Maybe<PaymentAddressResult>;
  paymentMethods?: Maybe<Array<Maybe<PaymentMethod>>>;
  post?: Maybe<Post>;
  postsList?: Maybe<PostResult>;
  product?: Maybe<Product>;
  productsList?: Maybe<ProductResult>;
  searchUrl?: Maybe<SearchUrlResult>;
  shippingAddress?: Maybe<Array<Maybe<AddressField>>>;
  shippingMethods?: Maybe<Array<Maybe<ShippingMethod>>>;
  totals?: Maybe<Array<Maybe<Total>>>;
  version?: Maybe<Scalars['String']>;
  wishlist?: Maybe<Array<Maybe<Product>>>;
  zone?: Maybe<Zone>;
  zonesList?: Maybe<ZonesResult>;
};


export type RootQueryTypeAccountAddressArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type RootQueryTypeAuthProxyArgs = {
  app?: InputMaybe<Scalars['String']>;
};


export type RootQueryTypeCategoriesBlogListArgs = {
  filter?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  parent?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type RootQueryTypeCategoriesListArgs = {
  filter?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  parent?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  top?: InputMaybe<Scalars['Boolean']>;
};


export type RootQueryTypeCategoryArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type RootQueryTypeCategoryBlogArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type RootQueryTypeCountriesListArgs = {
  order?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type RootQueryTypeCountryArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type RootQueryTypeManufacturerArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type RootQueryTypeManufacturerListArgs = {
  order?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type RootQueryTypePageArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type RootQueryTypePagesListArgs = {
  order?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type RootQueryTypePostArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type RootQueryTypePostsListArgs = {
  category_id?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type RootQueryTypeProductArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type RootQueryTypeProductsListArgs = {
  category_id?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  manufacturer_id?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  special?: InputMaybe<Scalars['Boolean']>;
};


export type RootQueryTypeSearchUrlArgs = {
  url?: InputMaybe<Scalars['String']>;
};


export type RootQueryTypeZoneArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type RootQueryTypeZonesListArgs = {
  country_id?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type SearchUrlResult = {
  __typename?: 'SearchUrlResult';
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ShippingMethod = {
  __typename?: 'ShippingMethod';
  codename?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Total = {
  __typename?: 'Total';
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateOrderResult = {
  __typename?: 'UpdateOrderResult';
  paymentMethods?: Maybe<Array<Maybe<PaymentMethod>>>;
  shippingMethods?: Maybe<Array<Maybe<ShippingMethod>>>;
  totals?: Maybe<Array<Maybe<Total>>>;
};

export type Zone = {
  __typename?: 'Zone';
  countryId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type ZonesResult = {
  __typename?: 'ZonesResult';
  content?: Maybe<Array<Maybe<Zone>>>;
  first?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Boolean']>;
  number?: Maybe<Scalars['Int']>;
  numberOfElements?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  totalElements?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type CategoryBlog = {
  __typename?: 'categoryBlog';
  categories?: Maybe<Array<Maybe<CategoryBlog>>>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  imageLazy?: Maybe<Scalars['String']>;
  keyword?: Maybe<Scalars['String']>;
  meta?: Maybe<Meta>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type CategoryBlogCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type CategoryBlogUrlArgs = {
  url?: InputMaybe<Scalars['String']>;
};

export type CategoryBlogResult = {
  __typename?: 'categoryBlogResult';
  content?: Maybe<Array<Maybe<CategoryBlog>>>;
  first?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Boolean']>;
  number?: Maybe<Scalars['Int']>;
  numberOfElements?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  totalElements?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type PostReview = {
  __typename?: 'postReview';
  author?: Maybe<Scalars['String']>;
  author_email?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
};

export type PostReviewResult = {
  __typename?: 'postReviewResult';
  content?: Maybe<Array<Maybe<PostReview>>>;
  totalElements?: Maybe<Scalars['Int']>;
};

export type ProductAttribute = {
  __typename?: 'productAttribute';
  name?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ProductImage = {
  __typename?: 'productImage';
  image?: Maybe<Scalars['String']>;
  imageBig?: Maybe<Scalars['String']>;
  imageLazy?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AccountAddress: ResolverTypeWrapper<AccountAddress>;
  AccountAddressInput: AccountAddressInput;
  AddressField: ResolverTypeWrapper<AddressField>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Cart: ResolverTypeWrapper<Cart>;
  CartOption: CartOption;
  CartProduct: ResolverTypeWrapper<CartProduct>;
  CartProductOption: ResolverTypeWrapper<CartProductOption>;
  Category: ResolverTypeWrapper<Category>;
  CategoryResult: ResolverTypeWrapper<CategoryResult>;
  CheckoutLinkResult: ResolverTypeWrapper<CheckoutLinkResult>;
  ConfirmOrderResult: ResolverTypeWrapper<ConfirmOrderResult>;
  Contact: ResolverTypeWrapper<Contact>;
  ContactResult: ResolverTypeWrapper<ContactResult>;
  CountriesResult: ResolverTypeWrapper<CountriesResult>;
  Country: ResolverTypeWrapper<Country>;
  CreateOrderResult: ResolverTypeWrapper<CreateOrderResult>;
  Currency: ResolverTypeWrapper<Currency>;
  Customer: ResolverTypeWrapper<Customer>;
  CustomerInput: CustomerInput;
  ExtraField: ResolverTypeWrapper<ExtraField>;
  FieldValue: ResolverTypeWrapper<FieldValue>;
  FileResult: ResolverTypeWrapper<FileResult>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  HomeResult: ResolverTypeWrapper<HomeResult>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  InputField: InputField;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Language: ResolverTypeWrapper<Language>;
  Location: ResolverTypeWrapper<Location>;
  LoggedResult: ResolverTypeWrapper<LoggedResult>;
  LoginResult: ResolverTypeWrapper<LoginResult>;
  LogoutResult: ResolverTypeWrapper<LogoutResult>;
  Manufacturer: ResolverTypeWrapper<Manufacturer>;
  ManufacturerResult: ResolverTypeWrapper<ManufacturerResult>;
  Meta: ResolverTypeWrapper<Meta>;
  OptionValue: ResolverTypeWrapper<OptionValue>;
  Order: ResolverTypeWrapper<Order>;
  Page: ResolverTypeWrapper<Page>;
  PageResult: ResolverTypeWrapper<PageResult>;
  PaymentAddressResult: ResolverTypeWrapper<PaymentAddressResult>;
  PaymentMethod: ResolverTypeWrapper<PaymentMethod>;
  Post: ResolverTypeWrapper<Post>;
  PostResult: ResolverTypeWrapper<PostResult>;
  Product: ResolverTypeWrapper<Product>;
  ProductOption: ResolverTypeWrapper<ProductOption>;
  ProductResult: ResolverTypeWrapper<ProductResult>;
  ProductReview: ResolverTypeWrapper<ProductReview>;
  RootMutationType: ResolverTypeWrapper<{}>;
  RootQueryType: ResolverTypeWrapper<{}>;
  SearchUrlResult: ResolverTypeWrapper<SearchUrlResult>;
  ShippingMethod: ResolverTypeWrapper<ShippingMethod>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Total: ResolverTypeWrapper<Total>;
  UpdateOrderResult: ResolverTypeWrapper<UpdateOrderResult>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  Zone: ResolverTypeWrapper<Zone>;
  ZonesResult: ResolverTypeWrapper<ZonesResult>;
  categoryBlog: ResolverTypeWrapper<CategoryBlog>;
  categoryBlogResult: ResolverTypeWrapper<CategoryBlogResult>;
  postReview: ResolverTypeWrapper<PostReview>;
  postReviewResult: ResolverTypeWrapper<PostReviewResult>;
  productAttribute: ResolverTypeWrapper<ProductAttribute>;
  productImage: ResolverTypeWrapper<ProductImage>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AccountAddress: AccountAddress;
  AccountAddressInput: AccountAddressInput;
  AddressField: AddressField;
  Boolean: Scalars['Boolean'];
  Cart: Cart;
  CartOption: CartOption;
  CartProduct: CartProduct;
  CartProductOption: CartProductOption;
  Category: Category;
  CategoryResult: CategoryResult;
  CheckoutLinkResult: CheckoutLinkResult;
  ConfirmOrderResult: ConfirmOrderResult;
  Contact: Contact;
  ContactResult: ContactResult;
  CountriesResult: CountriesResult;
  Country: Country;
  CreateOrderResult: CreateOrderResult;
  Currency: Currency;
  Customer: Customer;
  CustomerInput: CustomerInput;
  ExtraField: ExtraField;
  FieldValue: FieldValue;
  FileResult: FileResult;
  Float: Scalars['Float'];
  HomeResult: HomeResult;
  ID: Scalars['ID'];
  InputField: InputField;
  Int: Scalars['Int'];
  Language: Language;
  Location: Location;
  LoggedResult: LoggedResult;
  LoginResult: LoginResult;
  LogoutResult: LogoutResult;
  Manufacturer: Manufacturer;
  ManufacturerResult: ManufacturerResult;
  Meta: Meta;
  OptionValue: OptionValue;
  Order: Order;
  Page: Page;
  PageResult: PageResult;
  PaymentAddressResult: PaymentAddressResult;
  PaymentMethod: PaymentMethod;
  Post: Post;
  PostResult: PostResult;
  Product: Product;
  ProductOption: ProductOption;
  ProductResult: ProductResult;
  ProductReview: ProductReview;
  RootMutationType: {};
  RootQueryType: {};
  SearchUrlResult: SearchUrlResult;
  ShippingMethod: ShippingMethod;
  String: Scalars['String'];
  Total: Total;
  UpdateOrderResult: UpdateOrderResult;
  Upload: Scalars['Upload'];
  Zone: Zone;
  ZonesResult: ZonesResult;
  categoryBlog: CategoryBlog;
  categoryBlogResult: CategoryBlogResult;
  postReview: PostReview;
  postReviewResult: PostReviewResult;
  productAttribute: ProductAttribute;
  productImage: ProductImage;
};

export type AccountAddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountAddress'] = ResolversParentTypes['AccountAddress']> = {
  address1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  countryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zipcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zone?: Resolver<Maybe<ResolversTypes['Zone']>, ParentType, ContextType>;
  zoneId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddressFieldResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddressField'] = ResolversParentTypes['AddressField']> = {
  defaultValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['FieldValue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cart'] = ResolversParentTypes['Cart']> = {
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartProduct']>>>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartProduct'] = ResolversParentTypes['CartProduct']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  option?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartProductOption']>>>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartProductOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartProductOption'] = ResolversParentTypes['CartProductOption']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType, RequireFields<CategoryCategoriesArgs, 'limit'>>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageLazy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<CategoryUrlArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryResult'] = ResolversParentTypes['CategoryResult']> = {
  content?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
  first?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  last?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numberOfElements?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalElements?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalPages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutLinkResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutLinkResult'] = ResolversParentTypes['CheckoutLinkResult']> = {
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfirmOrderResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConfirmOrderResult'] = ResolversParentTypes['ConfirmOrderResult']> = {
  callback?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContactResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contact'] = ResolversParentTypes['Contact']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  geocode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Location']>>>, ParentType, ContextType>;
  open?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  store?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  telephone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContactResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactResult'] = ResolversParentTypes['ContactResult']> = {
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountriesResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CountriesResult'] = ResolversParentTypes['CountriesResult']> = {
  content?: Resolver<Maybe<Array<Maybe<ResolversTypes['Country']>>>, ParentType, ContextType>;
  first?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  last?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numberOfElements?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalElements?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalPages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateOrderResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateOrderResult'] = ResolversParentTypes['CreateOrderResult']> = {
  success?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Currency'] = ResolversParentTypes['Currency']> = {
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  symbol_left?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  symbol_right?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExtraFieldResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtraField'] = ResolversParentTypes['ExtraField']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FieldValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['FieldValue'] = ResolversParentTypes['FieldValue']> = {
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileResult'] = ResolversParentTypes['FileResult']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['HomeResult'] = ResolversParentTypes['HomeResult']> = {
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Language'] = ResolversParentTypes['Language']> = {
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  geocode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageLazy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  open?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  telephone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoggedResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoggedResult'] = ResolversParentTypes['LoggedResult']> = {
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginResult'] = ResolversParentTypes['LoginResult']> = {
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LogoutResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['LogoutResult'] = ResolversParentTypes['LogoutResult']> = {
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ManufacturerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Manufacturer'] = ResolversParentTypes['Manufacturer']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageBig?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageLazy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ManufacturerUrlArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ManufacturerResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ManufacturerResult'] = ResolversParentTypes['ManufacturerResult']> = {
  content?: Resolver<Maybe<Array<Maybe<ResolversTypes['Manufacturer']>>>, ParentType, ContextType>;
  first?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  last?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numberOfElements?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalElements?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalPages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Meta'] = ResolversParentTypes['Meta']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OptionValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['OptionValue'] = ResolversParentTypes['OptionValue']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Page'] = ResolversParentTypes['Page']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageUrlArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageResult'] = ResolversParentTypes['PageResult']> = {
  content?: Resolver<Maybe<Array<Maybe<ResolversTypes['Page']>>>, ParentType, ContextType>;
  first?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  last?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numberOfElements?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalElements?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalPages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentAddressResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentAddressResult'] = ResolversParentTypes['PaymentAddressResult']> = {
  agree?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fields?: Resolver<Maybe<Array<Maybe<ResolversTypes['AddressField']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentMethodResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentMethod'] = ResolversParentTypes['PaymentMethod']> = {
  codename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['categoryBlog']>>>, ParentType, ContextType>;
  datePublished?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageLazy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  prev?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  reviews?: Resolver<Maybe<ResolversTypes['postReviewResult']>, ParentType, ContextType>;
  shortDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PostUrlArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostResult'] = ResolversParentTypes['PostResult']> = {
  content?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType>;
  first?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  last?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numberOfElements?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalElements?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalPages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['productAttribute']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<Array<Maybe<ResolversTypes['ExtraField']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageBig?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageLazy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['productImage']>>>, ParentType, ContextType, RequireFields<ProductImagesArgs, 'limit'>>;
  keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['Manufacturer']>, ParentType, ContextType>;
  manufacturerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  minimum?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductOption']>>>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType, RequireFields<ProductProductsArgs, 'limit'>>;
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductReview']>>>, ParentType, ContextType>;
  shortDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  special?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stock?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  tax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ProductUrlArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOption'] = ResolversParentTypes['ProductOption']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['OptionValue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductResult'] = ResolversParentTypes['ProductResult']> = {
  content?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  first?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  last?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numberOfElements?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalElements?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalPages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductReview'] = ResolversParentTypes['ProductReview']> = {
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author_email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RootMutationTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RootMutationType'] = ResolversParentTypes['RootMutationType']> = {
  accountAddAddress?: Resolver<Maybe<ResolversTypes['AccountAddress']>, ParentType, ContextType, Partial<RootMutationTypeAccountAddAddressArgs>>;
  accountEdit?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, Partial<RootMutationTypeAccountEditArgs>>;
  accountEditAddress?: Resolver<Maybe<ResolversTypes['AccountAddress']>, ParentType, ContextType, Partial<RootMutationTypeAccountEditAddressArgs>>;
  accountEditPassword?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, Partial<RootMutationTypeAccountEditPasswordArgs>>;
  accountLogin?: Resolver<Maybe<ResolversTypes['LoginResult']>, ParentType, ContextType, Partial<RootMutationTypeAccountLoginArgs>>;
  accountLogout?: Resolver<Maybe<ResolversTypes['LogoutResult']>, ParentType, ContextType>;
  accountRegister?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, Partial<RootMutationTypeAccountRegisterArgs>>;
  accountRemoveAddress?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccountAddress']>>>, ParentType, ContextType, RequireFields<RootMutationTypeAccountRemoveAddressArgs, 'page' | 'size'>>;
  addBlogPostReview?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, Partial<RootMutationTypeAddBlogPostReviewArgs>>;
  addReview?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, Partial<RootMutationTypeAddReviewArgs>>;
  addToCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<RootMutationTypeAddToCartArgs, 'options' | 'quantity'>>;
  addToCompare?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType, Partial<RootMutationTypeAddToCompareArgs>>;
  addToWishlist?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType, Partial<RootMutationTypeAddToWishlistArgs>>;
  clearCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType>;
  confirmOrder?: Resolver<Maybe<ResolversTypes['ConfirmOrderResult']>, ParentType, ContextType, RequireFields<RootMutationTypeConfirmOrderArgs, 'withPayment'>>;
  contactSend?: Resolver<Maybe<ResolversTypes['ContactResult']>, ParentType, ContextType, Partial<RootMutationTypeContactSendArgs>>;
  createOrder?: Resolver<Maybe<ResolversTypes['CreateOrderResult']>, ParentType, ContextType>;
  editCurrency?: Resolver<Maybe<Array<Maybe<ResolversTypes['Currency']>>>, ParentType, ContextType, Partial<RootMutationTypeEditCurrencyArgs>>;
  editLanguage?: Resolver<Maybe<Array<Maybe<ResolversTypes['Language']>>>, ParentType, ContextType, Partial<RootMutationTypeEditLanguageArgs>>;
  removeCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, Partial<RootMutationTypeRemoveCartArgs>>;
  removeCompare?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType, Partial<RootMutationTypeRemoveCompareArgs>>;
  removeWishlist?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType, Partial<RootMutationTypeRemoveWishlistArgs>>;
  updateCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateCartArgs, 'quantity'>>;
  updateOrder?: Resolver<Maybe<ResolversTypes['UpdateOrderResult']>, ParentType, ContextType, Partial<RootMutationTypeUpdateOrderArgs>>;
  uploadFile?: Resolver<Maybe<ResolversTypes['FileResult']>, ParentType, ContextType, Partial<RootMutationTypeUploadFileArgs>>;
};

export type RootQueryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RootQueryType'] = ResolversParentTypes['RootQueryType']> = {
  accountAddress?: Resolver<Maybe<ResolversTypes['AccountAddress']>, ParentType, ContextType, Partial<RootQueryTypeAccountAddressArgs>>;
  accountAddressList?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccountAddress']>>>, ParentType, ContextType>;
  accountCheckLogged?: Resolver<Maybe<ResolversTypes['LoggedResult']>, ParentType, ContextType>;
  authProxy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<RootQueryTypeAuthProxyArgs>>;
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType>;
  categoriesBlogList?: Resolver<Maybe<ResolversTypes['categoryBlogResult']>, ParentType, ContextType, RequireFields<RootQueryTypeCategoriesBlogListArgs, 'order' | 'page' | 'parent' | 'size' | 'sort'>>;
  categoriesList?: Resolver<Maybe<ResolversTypes['CategoryResult']>, ParentType, ContextType, RequireFields<RootQueryTypeCategoriesListArgs, 'order' | 'page' | 'parent' | 'size' | 'sort' | 'top'>>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, Partial<RootQueryTypeCategoryArgs>>;
  categoryBlog?: Resolver<Maybe<ResolversTypes['categoryBlog']>, ParentType, ContextType, Partial<RootQueryTypeCategoryBlogArgs>>;
  checkoutLink?: Resolver<Maybe<ResolversTypes['CheckoutLinkResult']>, ParentType, ContextType>;
  compare?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['Contact']>, ParentType, ContextType>;
  countriesList?: Resolver<Maybe<ResolversTypes['CountriesResult']>, ParentType, ContextType, RequireFields<RootQueryTypeCountriesListArgs, 'order' | 'page' | 'size' | 'sort'>>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType, Partial<RootQueryTypeCountryArgs>>;
  currency?: Resolver<Maybe<Array<Maybe<ResolversTypes['Currency']>>>, ParentType, ContextType>;
  home?: Resolver<Maybe<ResolversTypes['HomeResult']>, ParentType, ContextType>;
  language?: Resolver<Maybe<Array<Maybe<ResolversTypes['Language']>>>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['Manufacturer']>, ParentType, ContextType, Partial<RootQueryTypeManufacturerArgs>>;
  manufacturerList?: Resolver<Maybe<ResolversTypes['ManufacturerResult']>, ParentType, ContextType, RequireFields<RootQueryTypeManufacturerListArgs, 'order' | 'page' | 'search' | 'size' | 'sort'>>;
  page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, Partial<RootQueryTypePageArgs>>;
  pagesList?: Resolver<Maybe<ResolversTypes['PageResult']>, ParentType, ContextType, RequireFields<RootQueryTypePagesListArgs, 'order' | 'page' | 'search' | 'size' | 'sort'>>;
  paymentAddress?: Resolver<Maybe<ResolversTypes['PaymentAddressResult']>, ParentType, ContextType>;
  paymentMethods?: Resolver<Maybe<Array<Maybe<ResolversTypes['PaymentMethod']>>>, ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, Partial<RootQueryTypePostArgs>>;
  postsList?: Resolver<Maybe<ResolversTypes['PostResult']>, ParentType, ContextType, RequireFields<RootQueryTypePostsListArgs, 'category_id' | 'order' | 'page' | 'size' | 'sort'>>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, Partial<RootQueryTypeProductArgs>>;
  productsList?: Resolver<Maybe<ResolversTypes['ProductResult']>, ParentType, ContextType, RequireFields<RootQueryTypeProductsListArgs, 'category_id' | 'filter' | 'ids' | 'manufacturer_id' | 'order' | 'page' | 'search' | 'size' | 'sort' | 'special'>>;
  searchUrl?: Resolver<Maybe<ResolversTypes['SearchUrlResult']>, ParentType, ContextType, Partial<RootQueryTypeSearchUrlArgs>>;
  shippingAddress?: Resolver<Maybe<Array<Maybe<ResolversTypes['AddressField']>>>, ParentType, ContextType>;
  shippingMethods?: Resolver<Maybe<Array<Maybe<ResolversTypes['ShippingMethod']>>>, ParentType, ContextType>;
  totals?: Resolver<Maybe<Array<Maybe<ResolversTypes['Total']>>>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wishlist?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  zone?: Resolver<Maybe<ResolversTypes['Zone']>, ParentType, ContextType, Partial<RootQueryTypeZoneArgs>>;
  zonesList?: Resolver<Maybe<ResolversTypes['ZonesResult']>, ParentType, ContextType, RequireFields<RootQueryTypeZonesListArgs, 'order' | 'page' | 'size' | 'sort'>>;
};

export type SearchUrlResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchUrlResult'] = ResolversParentTypes['SearchUrlResult']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShippingMethodResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShippingMethod'] = ResolversParentTypes['ShippingMethod']> = {
  codename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TotalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Total'] = ResolversParentTypes['Total']> = {
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateOrderResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateOrderResult'] = ResolversParentTypes['UpdateOrderResult']> = {
  paymentMethods?: Resolver<Maybe<Array<Maybe<ResolversTypes['PaymentMethod']>>>, ParentType, ContextType>;
  shippingMethods?: Resolver<Maybe<Array<Maybe<ResolversTypes['ShippingMethod']>>>, ParentType, ContextType>;
  totals?: Resolver<Maybe<Array<Maybe<ResolversTypes['Total']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type ZoneResolvers<ContextType = any, ParentType extends ResolversParentTypes['Zone'] = ResolversParentTypes['Zone']> = {
  countryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ZonesResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ZonesResult'] = ResolversParentTypes['ZonesResult']> = {
  content?: Resolver<Maybe<Array<Maybe<ResolversTypes['Zone']>>>, ParentType, ContextType>;
  first?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  last?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numberOfElements?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalElements?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalPages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryBlogResolvers<ContextType = any, ParentType extends ResolversParentTypes['categoryBlog'] = ResolversParentTypes['categoryBlog']> = {
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['categoryBlog']>>>, ParentType, ContextType, RequireFields<CategoryBlogCategoriesArgs, 'limit'>>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageLazy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keyword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<CategoryBlogUrlArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryBlogResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['categoryBlogResult'] = ResolversParentTypes['categoryBlogResult']> = {
  content?: Resolver<Maybe<Array<Maybe<ResolversTypes['categoryBlog']>>>, ParentType, ContextType>;
  first?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  last?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numberOfElements?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalElements?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalPages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['postReview'] = ResolversParentTypes['postReview']> = {
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author_email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostReviewResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['postReviewResult'] = ResolversParentTypes['postReviewResult']> = {
  content?: Resolver<Maybe<Array<Maybe<ResolversTypes['postReview']>>>, ParentType, ContextType>;
  totalElements?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductAttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['productAttribute'] = ResolversParentTypes['productAttribute']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['productImage'] = ResolversParentTypes['productImage']> = {
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageBig?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageLazy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AccountAddress?: AccountAddressResolvers<ContextType>;
  AddressField?: AddressFieldResolvers<ContextType>;
  Cart?: CartResolvers<ContextType>;
  CartProduct?: CartProductResolvers<ContextType>;
  CartProductOption?: CartProductOptionResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CategoryResult?: CategoryResultResolvers<ContextType>;
  CheckoutLinkResult?: CheckoutLinkResultResolvers<ContextType>;
  ConfirmOrderResult?: ConfirmOrderResultResolvers<ContextType>;
  Contact?: ContactResolvers<ContextType>;
  ContactResult?: ContactResultResolvers<ContextType>;
  CountriesResult?: CountriesResultResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  CreateOrderResult?: CreateOrderResultResolvers<ContextType>;
  Currency?: CurrencyResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  ExtraField?: ExtraFieldResolvers<ContextType>;
  FieldValue?: FieldValueResolvers<ContextType>;
  FileResult?: FileResultResolvers<ContextType>;
  HomeResult?: HomeResultResolvers<ContextType>;
  Language?: LanguageResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  LoggedResult?: LoggedResultResolvers<ContextType>;
  LoginResult?: LoginResultResolvers<ContextType>;
  LogoutResult?: LogoutResultResolvers<ContextType>;
  Manufacturer?: ManufacturerResolvers<ContextType>;
  ManufacturerResult?: ManufacturerResultResolvers<ContextType>;
  Meta?: MetaResolvers<ContextType>;
  OptionValue?: OptionValueResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  Page?: PageResolvers<ContextType>;
  PageResult?: PageResultResolvers<ContextType>;
  PaymentAddressResult?: PaymentAddressResultResolvers<ContextType>;
  PaymentMethod?: PaymentMethodResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostResult?: PostResultResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductOption?: ProductOptionResolvers<ContextType>;
  ProductResult?: ProductResultResolvers<ContextType>;
  ProductReview?: ProductReviewResolvers<ContextType>;
  RootMutationType?: RootMutationTypeResolvers<ContextType>;
  RootQueryType?: RootQueryTypeResolvers<ContextType>;
  SearchUrlResult?: SearchUrlResultResolvers<ContextType>;
  ShippingMethod?: ShippingMethodResolvers<ContextType>;
  Total?: TotalResolvers<ContextType>;
  UpdateOrderResult?: UpdateOrderResultResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  Zone?: ZoneResolvers<ContextType>;
  ZonesResult?: ZonesResultResolvers<ContextType>;
  categoryBlog?: CategoryBlogResolvers<ContextType>;
  categoryBlogResult?: CategoryBlogResultResolvers<ContextType>;
  postReview?: PostReviewResolvers<ContextType>;
  postReviewResult?: PostReviewResultResolvers<ContextType>;
  productAttribute?: ProductAttributeResolvers<ContextType>;
  productImage?: ProductImageResolvers<ContextType>;
};

