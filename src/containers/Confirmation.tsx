import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, Header, Button, Icon } from 'semantic-ui-react';
import ProductCard from '../components/ProductCard';
import useProductDetail from '../components/hooks/FetchProductDetail';
import OrderStep from '../components/OrderStep';
import PageHeader from '../components/PageHeader';

function ProductDetail() {
  const { id } = useParams();
  const { productDetail } = useProductDetail(id ?? '0');
  const navigate = useNavigate();

  // カード情報入力ボタンが押された時の処理
  const click = () => {
    navigate('/billing');
  };

  return (
    <>
      <PageHeader />
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={16}>
            <OrderStep stepId={1} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column floated="right" width={4}>
            <ProductCard product={productDetail} />
          </Grid.Column>
          <Grid.Column floated="left" width={4}>
            <Header as="h2">この商品を本当に購入しますか？</Header>
            <Header as="h3" dividing>
              購入明細:
            </Header>
            <Header>
              <Grid>
                <Grid.Row>
                  <Grid.Column floated="left" width={4}>
                    商品名:
                  </Grid.Column>
                  <Grid.Column floated="right" width={4}>
                    {productDetail?.name}
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column floated="left" width={4}>
                    個数:
                  </Grid.Column>
                  <Grid.Column floated="right" width={4}>
                    1個
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column floated="left" width={4}>
                    価格:
                  </Grid.Column>
                  <Grid.Column floated="right" width={4}>
                    {productDetail?.price}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Header as="h5" dividing />
              <Grid>
                <Grid.Row>
                  <Grid.Column floated="left" width={4}>
                    合計:
                  </Grid.Column>
                  <Grid.Column floated="right" width={4}>
                    {productDetail?.price}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Header>
            <Button primary floated="right" onClick={click}>
              カード情報を入力
              <Icon name="chevron right" />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default ProductDetail;
