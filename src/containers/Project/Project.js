import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid, Header, Card, Image, Divider } from "semantic-ui-react";
import UserFull from "../../user-full.jpg";

import StackGrid, { transitions } from "react-stack-grid";
const { scaleDown } = transitions;

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Grid>
        <Grid.Row verticalAlign="middle">
          <Grid.Column width={16} textAlign="center">
            <Divider horizontal>
              <Header as="h2">Projects</Header>
            </Divider>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row verticalAlign="middle">
          <Grid.Column width={16} textAlign="center" className="mb-10">
            <StackGrid
              appear={scaleDown.appear}
              appeared={scaleDown.appeared}
              enter={scaleDown.enter}
              entered={scaleDown.entered}
              leaved={scaleDown.leaved}
              columnWidth={300}
            >
              <div key="key1">
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
              </div>
              <div key="key2">
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
              </div>
              <div key="key3">
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
              </div>
              <div key="key4">
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
              </div>
              <div key="key5">
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
              </div>
              <div key="key6">
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
              </div>
              <div key="key7">
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
              </div>
              <div key="key8">
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
              </div>
            </StackGrid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connect()(withRouter(Project));
