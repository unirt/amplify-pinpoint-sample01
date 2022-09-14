import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { ProductType } from '../types';

type ProductCardProps = {
  product?: ProductType;
};

function ProductCard(props: ProductCardProps) {
  const { product } = props;

  return (
    <Card>
      <Image src={product?.url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{product?.name}</Card.Header>
        <Card.Meta>{product?.price}</Card.Meta>
        <Card.Description>{product?.description}</Card.Description>
      </Card.Content>
    </Card>
  );
}

export default ProductCard;
