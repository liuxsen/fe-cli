import { Fetch_sku } from './actionTypes';

export const FetchSku = skuList => ({
  type: Fetch_sku,
  payload: skuList
});