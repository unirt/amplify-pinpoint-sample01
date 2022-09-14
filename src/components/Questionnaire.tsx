import React, { useState } from 'react';
import { Form, Input, Radio, Button, Label } from 'semantic-ui-react';

function Questionnaire() {
  const [email, setEmail] = useState('');
  const [favorite, setFavorite] = useState('');

  const handleChange = (
    e: React.FormEvent<HTMLInputElement>,
    nv: NameValue
  ) => {
    setFavorite(nv.value);
  };

  // アンケートボタンが押された時の処理
  const click = () => {
    console.log(email, favorite);
    alert('回答が送信されました');
  };

  return (
    <>
      <Form>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            placeholder="Email"
            onChange={(e: React.FormEvent<HTMLInputElement>, nv: NameValue) =>
              setEmail(nv.value)
            }
          />
        </Form.Group>
        <Form.Group inline>
          <Label>好きなカテゴリ</Label>
          <Form.Field
            control={Radio}
            label="和食"
            value="和食"
            checked={favorite === '和食'}
            onChange={handleChange}
          />
          <Form.Field
            control={Radio}
            label="洋食"
            value="洋食"
            checked={favorite === '洋食'}
            onChange={handleChange}
          />
          <Form.Field
            control={Radio}
            label="中華"
            value="中華"
            checked={favorite === '中華'}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
      <Button type="button" onClick={click} primary>
        送信
      </Button>
    </>
  );
}

type NameValue = {
  name: string;
  value: string;
};

export default Questionnaire;
