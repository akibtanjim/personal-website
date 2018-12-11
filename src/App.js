import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/es/integration/react";
import routes from "./routes";

import configureStore from "./store";
import Layout from "./components/Layout";

let { store, persistor } = configureStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Layout>{routes}</Layout>
            </PersistGate>
          </Provider>
        </BrowserRouter>

        {/* <Grid>
                    <Grid.Row verticalAlign="middle">
                      <Grid.Column width={16} textAlign="center">
                        <Header as="h2">Projects</Header>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row verticalAlign="middle">
                      <Grid.Column
                        width={8}
                        textAlign="center"
                        className="mb-10"
                      >
                        <Card fluid>
                          <Card.Content>
                            <Image
                              src={UserFull}
                              size="medium"
                              style={{ width: "100%", height: "300px" }}
                            />
                          </Card.Content>
                          <Card.Content>
                            <Card.Header>Matthew Harris</Card.Header>
                            <Card.Meta>Co-Worker</Card.Meta>
                            <Card.Description>
                              Matthew is a pianist living in Nashville.
                            </Card.Description>
                          </Card.Content>
                        </Card>
                      </Grid.Column>
                      <Grid.Column
                        width={8}
                        textAlign="center"
                        className="mb-10"
                      >
                        <Card fluid>
                          <Card.Content>
                            <Image
                              src={UserFull}
                              size="medium"
                              style={{ width: "100%", height: "300px" }}
                            />
                          </Card.Content>
                          <Card.Content>
                            <Card.Header>Matthew Harris</Card.Header>
                            <Card.Meta>Co-Worker</Card.Meta>
                            <Card.Description>
                              Matthew is a pianist living in Nashville.
                            </Card.Description>
                          </Card.Content>
                        </Card>
                      </Grid.Column>
                      <Grid.Column
                        width={8}
                        textAlign="center"
                        className="mb-10"
                      >
                        <Card fluid>
                          <Card.Content>
                            <Image
                              src={UserFull}
                              size="medium"
                              style={{ width: "100%", height: "300px" }}
                            />
                          </Card.Content>
                          <Card.Content>
                            <Card.Header>Matthew Harris</Card.Header>
                            <Card.Meta>Co-Worker</Card.Meta>
                            <Card.Description>
                              Matthew is a pianist living in Nashville.
                            </Card.Description>
                          </Card.Content>
                        </Card>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid> */}
      </div>
    );
  }
}

export default App;
