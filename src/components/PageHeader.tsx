import React from 'react';
import { Input, Grid, Menu, Segment } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

function PageHeader(): JSX.Element {
  const navigate = useNavigate();

  const click = () => {
    navigate('/');
  };

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={16}>
          <Segment inverted>
            <Menu inverted>
              <Menu.Item onClick={click}>
                Amazon Pinpoint Demo用 ECサイト
              </Menu.Item>
              <Menu.Item position="right">
                <Input className="icon" icon="search" placeholder="Search..." />
              </Menu.Item>
            </Menu>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default PageHeader;
