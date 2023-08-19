import { ListRequestBody, Product } from '@nx-react-code-sharing/shared-types';
import { http } from '../config';

export const list = ({
  pageSize,
  page,
  query,
  body,
}: {
  pageSize: number;
  page: number;
  query?: string;
  body: ListRequestBody;
}) => {
  const _query = query ? `&query=${query}` : '';
  return http
    .post<Product[]>(
      `/product/list/filter?limit=${pageSize}&start=${page}${_query}`,
      body
    )
    .then(({ data }) => data);
};

export const one = (id: string | number) => {
  return http.get<Product>(`/product/${id}`);
};
