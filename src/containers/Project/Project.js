import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Grid,
  Header,
  Card,
  Image,
  Divider,
  Dimmer,
  Loader
} from "semantic-ui-react";
//import UserFull from "../../user-full.jpg";
import defaultImage from "../../deafult.png";

import StackGrid, { transitions } from "react-stack-grid";
import ReactHtmlParser from "react-html-parser";
import { getAllProjects } from "./action";
import { getProjects } from "./reducer";
import { imageUrl } from "../../variables";
import "./project.css";
const { scaleDown } = transitions;

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.dispatch(getAllProjects());
  }
  render() {
    const { projects } = this.props;
    return (
      <React.Fragment>
        {this.props.projects.loading ? (
          <Dimmer style={{ marginLeft: 20, height: "100vh" }} active>
            <Loader />
          </Dimmer>
        ) : (
          <Grid>
            <Grid.Row verticalAlign="middle">
              <Grid.Column width={16} textAlign="center">
                <Divider horizontal>
                  <Header as="h2">PROJECTS</Header>
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
                  {projects.projects.map((project, index) => (
                    <div key={index}>
                      <Card fluid>
                        <Card.Content>
                          <Image
                            src={
                              project.image
                                ? imageUrl + "/works/" + project.image
                                : defaultImage
                            }
                            size="medium"
                            style={{ width: "100%", height: "300px" }}
                          />
                        </Card.Content>
                        <Card.Content>
                          <Card.Header>{project.title}</Card.Header>
                          <Card.Meta className="meta-class">
                            <b>Platform :</b>
                            {project.platform}
                          </Card.Meta>
                          <Card.Meta className="meta-class">
                            <b>Framework :</b>
                            {project.framework}
                          </Card.Meta>
                          <Card.Meta className="meta-class">
                            <b>Front :</b>
                            {project.front}
                          </Card.Meta>
                          <Card.Meta className="meta-class">
                            <b>Back :</b>
                            {project.back}
                          </Card.Meta>
                          <Card.Meta className="meta-class">
                            <b>Database :</b>
                            {project.db}
                          </Card.Meta>
                          <Card.Meta className="meta-class">
                            <b>Link : </b>
                            <a
                              href={project.link}
                              style={{
                                color: "blue",
                                textTransform: "underline"
                              }}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {" "}
                              Visit Website
                            </a>
                          </Card.Meta>
                          <Card.Description>
                            {ReactHtmlParser(project.description)}
                          </Card.Description>
                        </Card.Content>
                      </Card>
                    </div>
                  ))}
                </StackGrid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )}
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  return { projects: getProjects(state) };
}
export default connect(mapStateToProps)(withRouter(Project));
