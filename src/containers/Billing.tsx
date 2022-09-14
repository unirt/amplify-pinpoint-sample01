import React from 'react';
import { Grid, Header, Button, Form, Segment } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { Analytics } from 'aws-amplify';
import OrderStep from '../components/OrderStep';
import PageHeader from '../components/PageHeader';

function Billing() {
  const navigate = useNavigate();

  // 支払いボタンが押された時の処理
  const click = () => {
    // TODO (5) 「支払い」ボタン押下時の Event を追加
    Analytics.record({
      name: 'click_payment',
    });

    navigate('/order');
  };

  return (
    <>
      <PageHeader />
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={16}>
            <OrderStep stepId={2} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={6}>
            <Header as="h3" dividing>
              クレジットカード情報:
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={6}>
            <Segment>
              <Form>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="First name"
                    placeholder="First name"
                    value="Takuya"
                  />
                  <Form.Input
                    fluid
                    label="Last name"
                    placeholder="Last name"
                    value="Mizuma"
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Credit Card Number"
                    placeholder="Credit Card Number"
                    value="123456789012"
                  />
                </Form.Group>
                <Form.Checkbox
                  label="I agree to the Terms and Conditions"
                  defaultChecked
                />
                <Button primary type="button" onClick={click}>
                  支払い
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default Billing;
