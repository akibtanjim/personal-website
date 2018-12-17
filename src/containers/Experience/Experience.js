import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid, Header, Divider, Dimmer, Loader } from "semantic-ui-react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import moment from "moment";
import ReactHtmlParser from "react-html-parser";
import { getExperiences } from "./action";
import { getWorkExperiences } from "./reducer";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.dispatch(getExperiences());
  }
  render() {
    const { experiences } = this.props;
    return (
      <React.Fragment>
        {this.props.experiences.loading ? (
          <Dimmer style={{ marginLeft: 20, height: "100vh" }} active>
            <Loader />
          </Dimmer>
        ) : (
          <Grid>
            <Grid.Row verticalAlign="middle">
              <Grid.Column width={16} textAlign="center">
                <Divider horizontal>
                  <Header as="h2">EXPERIENCE</Header>
                </Divider>
              </Grid.Column>
              <Grid.Column width={16} textAlign="center">
                <Timeline lineColor={"#ddd"}>
                  {experiences.experiences.map((experience, index) => (
                    <TimelineItem
                      key={index}
                      dateText={`${moment(experience.start_date).format(
                        "MM/YYYY"
                      )} - ${
                        experience.end_date !== null
                          ? moment(experience.end_date).format("MM/YYYY")
                          : "Present"
                      }`}
                      dateInnerStyle={{
                        background: "#61b8ff",
                        color: "#000"
                      }}
                      bodyContainerStyle={{
                        background: "#ddd",
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
                      }}
                    >
                      <h3 style={{ color: "#61b8ff" }}>
                        {experience.designation}, {experience.company}
                      </h3>
                      <h4 style={{ color: "#61b8ff" }}>
                        {ReactHtmlParser(experience.address)}
                      </h4>
                      {ReactHtmlParser(experience.responsibility)}
                    </TimelineItem>
                  ))}
                </Timeline>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )}
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  return { experiences: getWorkExperiences(state) };
}
export default connect(
  mapStateToProps,
  null
)(withRouter(Experience));
