import React, { useEffect } from 'react';
import { Grid, Header, Pagination } from 'semantic-ui-react';
import ProductList from './ProductList';
import PageHeader from '../components/PageHeader';

function Home() {
  // トップページが表示された時の処理
  //   useEffect(() => {}, []);

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
