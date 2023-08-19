import { useMemo, useRef } from 'react';
import { list } from '../lib/bid';
import { Product } from '@nx-react-code-sharing/shared-types';
import { useInfiniteQuery } from '@tanstack/react-query';
import unionBy from 'lodash-es/unionBy';
import throttle from 'lodash-es/throttle';

export const useBidList = () => {
  const isLast = useRef(false);

  const fetch = async ({ pageParam = 0 }) => {
    const PAGE_SIZE = 12;
    const data = await list({
      page: pageParam,
      pageSize: PAGE_SIZE,
      body: {},
    });
    return {
      result: data,
      nextPage: pageParam + 1,
      isLast: data.length < PAGE_SIZE,
    };
  };

  const { isLoading, data, error, fetchNextPage, refetch, isFetching } =
    useInfiniteQuery(['bid'], fetch, {
      retry: 3,
      cacheTime: 30 * 60 * 1000,
      getNextPageParam: (lastPage, pages) => {
        isLast.current = lastPage.isLast;
        return lastPage.nextPage;
      },
    });

  const processedData: Product[] = useMemo(() => {
    if (!data || isLoading) {
      return [];
    }
    const flattenData = data.pages.reduce((acc: Product[], { result }) => {
      return acc.concat(result);
    }, []);
    return unionBy(flattenData, ({ id }) => id);
  }, [isFetching]);

  const handleLoadMore = useMemo(() => {
    return throttle(() => {
      if (isLast.current || isLoading) {
        return;
      }
      fetchNextPage();
    }, 100);
  }, [isLast.current, isLoading]);

  return {
    isLoading: isLoading || isFetching,
    data: processedData,
    isLast: isLast.current,
    isEmpty: !isLoading && processedData.length === 0,
    loadMore: handleLoadMore,
  };
};
