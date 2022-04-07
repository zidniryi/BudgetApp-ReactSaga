import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>

      <Header as='h1'>Budget</Header>

      <Statistic size="small">
        <Statistic.Label>Your Balance</Statistic.Label>
        <Statistic.Value>2,600.0</Statistic.Value>
      </Statistic>

      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{ textAlign: 'center' }}>
                  Income:
                </Statistic.Label>
                <Statistic.Value>
                  1,0990.2
                </Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="tiny" color="red">
                <Statistic.Label style={{ textAlign: 'center' }}>
                  Expeneses:
                </Statistic.Label>
                <Statistic.Value>
                  1,990.2
                </Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid >
      </Segment>

      <Header as="h3">
        History
      </Header>

      <Segment color="red">
        <Grid columns="3" textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign={"left"}>Something</Grid.Column>
            <Grid.Column width={3} textAlign={"right"}>$10</Grid.Column>
            <Grid.Column width={3} textAlign={"right"}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="green">
        <Grid columns="3" textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign={"left"}>Something Else</Grid.Column>
            <Grid.Column width={3} textAlign={"right"}>$100</Grid.Column>
            <Grid.Column width={3} textAlign={"right"}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="red">
        <Grid columns="3" textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign={"left"}>Something</Grid.Column>
            <Grid.Column width={3} textAlign={"right"}>$10</Grid.Column>
            <Grid.Column width={3} textAlign={"right"}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as="h3">
        Add new Transactiion
      </Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input label='Description' placeholder='Description' icon="tags" width="12" />
          <Form.Input label='Value' placeholder='10.000$' icon="dollar" width="4" iconPosition="left" />
        </Form.Group>
        <Button.Group style={{ marginTop: 20 }}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary>Ok</Button>
        </Button.Group>
      </Form>

    </Container>
  );
}

export default App;
