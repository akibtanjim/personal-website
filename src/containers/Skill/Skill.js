import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Grid,
  Header,
  Progress,
  Divider,
  Dimmer,
  Loader
} from "semantic-ui-react";
import { getAllSkills } from "./action";
import { getSkills } from "./reducer";

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.dispatch(getAllSkills());
  }
  render() {
    const { skills } = this.props;
    return (
      <React.Fragment>
        {this.props.skills.loading ? (
          <Dimmer style={{ marginLeft: 20, height: "100vh" }} active>
            <Loader />
          </Dimmer>
        ) : (
          <React.Fragment>
            <Grid>
              <Grid.Row verticalAlign="middle">
                <Grid.Column width={16} textAlign="center">
                  <Divider horizontal>
                    <Header as="h2">SKILLS</Header>
                  </Divider>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid divided="vertically">
              <Grid.Row columns={2} style={{ margin: 40 }}>
                {skills.skill.map((skill, index) => (
                  <React.Fragment key={index}>
                    <Grid.Column width={8}>
                      <div style={{ textAlign: "center" }}>
                        <b>{skill.name}</b>
                      </div>
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <Progress percent={skill.percentage} progress />
                    </Grid.Column>
                  </React.Fragment>
                ))}
              </Grid.Row>
            </Grid>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  return { skills: getSkills(state) };
}
export default connect(mapStateToProps)(withRouter(Skill));
