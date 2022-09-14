import React from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react';

function Comments(): JSX.Element {
  return (
    <Comment.Group>
      <Header as="h3" dividing>
        商品レビュー:
      </Header>

      <Comment>
        <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
        <Comment.Content>
          <Comment.Author as="a">Tsukada</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>めちゃくちゃ美味しい！</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>

      <Comment>
        <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
        <Comment.Content>
          <Comment.Author as="a">Shiroyama</Comment.Author>
          <Comment.Metadata>
            <div>Yesterday at 12:30AM</div>
          </Comment.Metadata>
          <Comment.Text>
            <p>定期購入しています！大満足！</p>
          </Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
        <Comment.Group>
          <Comment>
            <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
            <Comment.Content>
              <Comment.Author as="a">Kimura</Comment.Author>
              <Comment.Metadata>
                <div>Just now</div>
              </Comment.Metadata>
              <Comment.Text>同じく！</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      </Comment>

      <Comment>
        <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
        <Comment.Content>
          <Comment.Author as="a">Joe Henderson</Comment.Author>
          <Comment.Metadata>
            <div>5 days ago</div>
          </Comment.Metadata>
          <Comment.Text>美味しくそれでいてリーズナブル</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>

      <Form reply>
        <Form.TextArea />
        <Button
          content="コメントを書く"
          labelPosition="left"
          icon="edit"
          primary
        />
      </Form>
    </Comment.Group>
  );
}

export default Comments;
