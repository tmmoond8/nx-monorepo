import React from 'react';

/**
 * intersectionObserver를 사용하여 loadMore를 호출할 때 사용
 */
export function useLoadMore(loadMore: () => void) {
  const loadMoreRef = React.useRef<HTMLDivElement>(null);
  const loadMoreFuncRef = React.useRef(loadMore);
  loadMoreFuncRef.current = loadMore;
  React.useEffect(() => {
    if (!loadMore) {
      console.error('no loadMore function!!');
      return;
    }
    const options = {
      threshold: 1,
    };
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMoreFuncRef.current();
      }
    }, options);

    const $target = loadMoreRef.current;
    if ($target) {
      observer.observe($target);
    }

    return () => {
      if (observer && $target) {
        observer.unobserve($target);
      }
    };
  }, [loadMoreRef.current]);

  return {
    loadMoreRef,
  };
}
