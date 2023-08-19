import React from 'react';
import apis from '@nx-react-code-sharing/shared-apis';
import { Product } from '@nx-react-code-sharing/shared-types';
import { s3Image } from '@nx-react-code-sharing/images';
import { useLoadMore } from '@nx-react-code-sharing/shared-hooks';

export default function ListPage() {
  const { data, loadMore } = apis.bid.useBidList();
  const loadMoreTriggerRef = React.useRef(loadMore);
  loadMoreTriggerRef.current = loadMore;
  const { loadMoreRef } = useLoadMore(loadMore);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        padding: '24px',
        gap: '8px',
      }}
    >
      {data?.map((product) => (
        <Card key={product.id} {...product} />
      ))}
      <div
        ref={loadMoreRef}
        style={{ transform: 'translateY(-600px)', visibility: 'hidden' }}
      >
        load more ref
      </div>
    </div>
  );
}

function Card({ name, price, imageName }: Product) {
  return (
    <article
      style={{
        padding: '8px',
        aspectRatio: '177/300',
        background: '#efefef',
        borderRadius: '12px',
      }}
    >
      <img
        src={s3Image(imageName, {
          width: 370,
        })}
        alt=""
        style={{
          width: '100%',
          aspectRatio: '1',
        }}
      />
      <h3 style={{ fontSize: 14 }}>{name}</h3>
      <p>₩{price.toLocaleString()}</p>
    </article>
  );
}
