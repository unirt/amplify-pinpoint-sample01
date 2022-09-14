import React, { useState } from 'react';
import { Grid, Header, Button, Image } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import OrderStep from '../components/OrderStep';
import PageHeader from '../components/PageHeader';
import Questionnaire from '../components/Questionnaire';

function Order() {
  const navigate = useNavigate();
  const [isShow, setShow] = useState(false);
  const click = () => {
    navigate('/');
  };

  const showQuestionnaire = () => {
    setShow(true);
  };

  return (
    <>
      <PageHeader />
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={16}>
            <OrderStep stepId={3} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={6}>
            <Header as="h1" textAlign="center">
              Thank you!
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={6}>
            <Image
              src="https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png"
              fluid
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={6} textAlign="center">
            <Button onClick={click} basic>
              トップに戻る
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={6} textAlign="center">
            <Button onClick={showQuestionnaire} basic>
              アンケートに答える
            </Button>
          </Grid.Column>
        </Grid.Row>
        {isShow ? (
          <Grid.Row>
            <Grid.Column hide="true" width={6} textAlign="center">
              <Questionnaire />
            </Grid.Column>
          </Grid.Row>
        ) : (
          ''
        )}
      </Grid>
    </>
  );
}

export default Order;
