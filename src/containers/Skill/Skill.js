import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid, Header, Progress, Divider } from "semantic-ui-react";
class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Grid>
          <Grid.Row verticalAlign="middle">
            <Grid.Column width={16} textAlign="center">
              <Divider horizontal>
                <Header as="h2">Skills</Header>
              </Divider>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column width={1}>fsdfsdf</Grid.Column>
            <Grid.Column width={8}>
              <Progress percent={55} progress>
                Label
              </Progress>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default connect()(withRouter(Skill));
