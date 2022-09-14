import React from 'react';
import { Item } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { Analytics } from 'aws-amplify';
import Product from '../components/Product';
import useProducts from '../components/hooks/FetchProducts';

function ProductList() {
  const { products } = useProducts();
  const navigate = useNavigate();

  return (
    <Item.Group divided>
      {products.map((product) => {
        // 商品詳細ボタンが押された時の処理
        const click = () => {
          // TODO (2)「商品詳細 >」ボタン押下時の Event を追加
          Analytics.record({
            name: 'click_detail',
          });

          navigate(`/product/${product.id}`);
        };

        return (
          <Product
            key={product.id}
            product={product}
            onClick={click}
            buttonCaption="商品詳細"
          />
        );
      })}
    </Item.Group>
  );
}

export default ProductList;
