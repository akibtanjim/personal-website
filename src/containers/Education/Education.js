import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid, Header, Divider, Dimmer, Loader } from "semantic-ui-react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import moment from "moment";
import { getAllEducations } from "./action";
import { getEducations } from "./reducer";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.dispatch(getAllEducations());
  }
  render() {
    const { educations } = this.props;
    return (
      <React.Fragment>
        {this.props.educations.loading ? (
          <Dimmer style={{ marginLeft: 20, height: "100vh" }} active>
            <Loader />
          </Dimmer>
        ) : (
          <Grid>
            <Grid.Row verticalAlign="middle">
              <Grid.Column width={16} textAlign="center">
                <Divider horizontal>
                  <Header as="h2">EDUCATION</Header>
                </Divider>
              </Grid.Column>
              <Grid.Column width={16} textAlign="center">
                <Timeline lineColor={"#ddd"}>
                  {educations.educations.map((education, index) => (
                    <TimelineItem
                      key={index}
                      dateText={`Passing Year: ${moment(
                        education.end_date
                      ).format("YYYY")}`}
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
                        {education.degree}, {education.institution}
                      </h3>
                      <h4 style={{ color: "#333" }}>
                        Department/Group : {education.department}
                      </h4>
                      {education.board !== "n/a" ||
                        (education.board !== "N/A" && (
                          <h4 style={{ color: "#333" }}>
                            Board : {education.board}
                          </h4>
                        ))}
                      <h4 style={{ color: "#333" }}>
                        GPA : {Number(education.gpa).toFixed(2)}
                      </h4>
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
  return { educations: getEducations(state) };
}
export default connect(
  mapStateToProps,
  null
)(withRouter(Education));
