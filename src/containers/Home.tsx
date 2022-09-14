import React from 'react';
import { Grid, Header, Pagination } from 'semantic-ui-react';
import { Analytics } from 'aws-amplify';
import ProductList from './ProductList';
import PageHeader from '../components/PageHeader';

function Home() {
  // TODO (1) Top 画面表示時の Event を追加
  Analytics.record({
    name: 'show_home',
  });

  return (
    <>
      <PageHeader />
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h2" dividing>
              商品一覧:
            </Header>
            <ProductList />
            <Pagination defaultActivePage={1} totalPages={10} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default Home;
