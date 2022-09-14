import React from 'react';
import { Icon, Step } from 'semantic-ui-react';

type OrderStepProps = {
  stepId: 1 | 2 | 3;
};

function OrderStep(props: OrderStepProps): JSX.Element {
  const { stepId } = props;
  const step1ClassName = stepId === 1 ? 'active' : 'disabled';
  const step2ClassName = stepId === 2 ? 'active' : 'disabled';
  const step3ClassName = stepId === 3 ? 'active' : 'disabled';

  return (
    <Step.Group widths={3}>
      <Step className={step1ClassName}>
        <Icon name="info" />
        <Step.Content>
          <Step.Title>Confirm Order</Step.Title>
        </Step.Content>
      </Step>
      <Step className={step2ClassName}>
        <Icon name="credit card" />
        <Step.Content>
          <Step.Title>Billing</Step.Title>
        </Step.Content>
      </Step>
      <Step className={step3ClassName}>
        <Icon name="truck" />
        <Step.Content>
          <Step.Title>Order</Step.Title>
        </Step.Content>
      </Step>
    </Step.Group>
  );
}

export default OrderStep;
