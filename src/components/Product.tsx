import React from 'react';
import { Button, Icon, Item, Rating } from 'semantic-ui-react';
import { ProductType } from '../types';

type ProductProps = {
  product?: ProductType;
  buttonCaption: string;
  onClick: () => void;
};

function Product(props: ProductProps): JSX.Element {
  const { product, buttonCaption, onClick } = props;
  const click = onClick;

  return (
    <Item.Group divided>
      <Item>
        <Item.Image src={product?.url} />
        <Item.Content>
          <Item.Header as="a">{product?.name}</Item.Header>
          <Item.Meta>
            <span className="cinema">{product?.price}</span>
          </Item.Meta>
          <Item.Description>{product?.description}</Item.Description>
          <Item.Extra>
            <Button primary floated="right" onClick={click}>
              {buttonCaption}
              <Icon name="chevron right" />
            </Button>
            <Rating icon="star" defaultRating={product?.rating} maxRating={5} />
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
}

export default Product;
