import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Grid,
  Header,
  Card,
  Divider,
  Dimmer,
  Loader,
  Button
} from "semantic-ui-react";

import ReactHtmlParser from "react-html-parser";
import { getAllPublications } from "./action";
import { getPublications } from "./reducer";
import { imageUrl } from "../../variables";

class Publication extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.dispatch(getAllPublications());
  }
  render() {
    const { publications } = this.props;
    return (
      <React.Fragment>
        {this.props.publications.loading ? (
          <Dimmer style={{ marginLeft: 20, height: "100vh" }} active>
            <Loader />
          </Dimmer>
        ) : (
          <Grid>
            <Grid.Row verticalAlign="middle">
              <Grid.Column width={16} textAlign="center">
                <Divider horizontal>
                  <Header as="h2">PUBLICATIONS</Header>
                </Divider>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row verticalAlign="middle">
              {publications.publications &&
                publications.publications.map((publication, index) => (
                  <Grid.Column key={index} width={16}>
                    <Card fluid style={{ padding: 10, margin: 10 }}>
                      <Card.Header style={{ textAlign: "center" }}>
                        <b>{publication.title}</b>
                      </Card.Header>
                      <Card.Content>
                        <b>Publisher: </b>
                        {publication.publisher}
                      </Card.Content>
                      {publication.conference && (
                        <Card.Content>
                          <b>Conference: </b>
                          {publication.conference}
                        </Card.Content>
                      )}
                      {publication.proceeding && (
                        <Card.Content>
                          <b>Proceeding: </b>
                          {publication.proceeding}
                        </Card.Content>
                      )}
                      <Card.Header style={{ textAlign: "center" }}>
                        <b>Abstract</b>
                      </Card.Header>
                      <Card.Description>
                        {ReactHtmlParser(publication.abstract)}
                      </Card.Description>
                      <Card.Content extra>
                        <div className="ui two buttons">
                          <Button basic color="blue">
                            <a
                              href={publication.link}
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
                          </Button>
                          <Button basic color="blue">
                            <a
                              href={
                                imageUrl + "/publications/" + publication.file
                              }
                              style={{
                                color: "blue",
                                textTransform: "underline"
                              }}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {" "}
                              View
                            </a>
                          </Button>
                        </div>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                ))}
            </Grid.Row>
          </Grid>
        )}
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  return { publications: getPublications(state) };
}
export default connect(mapStateToProps)(withRouter(Publication));
