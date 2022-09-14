import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header, Grid } from 'semantic-ui-react';
import { Analytics } from 'aws-amplify';
import useProductDetail from '../components/hooks/FetchProductDetail';
import Product from '../components/Product';
import Comments from '../components/Comments';
import PageHeader from '../components/PageHeader';

function ProductDetail() {
  const { id } = useParams();
  const { productDetail } = useProductDetail(id ?? '0');

  const navigate = useNavigate();

  // 確認画面ボタンが押された時の処理
  const click = () => {
    // TODO (3) 「確認画面 >」ボタン押下時の Event を追加
    Analytics.record({
      name: 'click_confirm',
    });

    navigate(`/confirmation/${productDetail?.id}`);
  };

  return (
    <>
      <PageHeader />
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={8}>
            <div>
              <Header as="h2" dividing>
                商品情報詳細:
              </Header>
              <Product
                product={productDetail}
                buttonCaption="確認画面"
                onClick={click}
              />
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <Comments />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default ProductDetail;
