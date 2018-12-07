import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { bounce, fadeIn, fadeInRight } from "react-animations";
import Radium, { StyleRoot } from "radium";
import {
  Icon,
  Grid,
  Sidebar,
  Menu,
  Image,
  Segment,
  Header,
  Card,
  Progress
  //Divider
} from "semantic-ui-react";
//import FontAwesome from "react-fontawesome";
import avatar from "./user.jpeg";
import UserFull from "./user-full.jpg";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import { SocialIcon } from "react-social-icons";
// <Progress percent={55} progress>Label</Progress>

const styles = {
  bounce: {
    animation: "x 1s",
    animationName: Radium.keyframes(bounce, "bounce")
  },
  fadeIn: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn")
  },
  fadeInRight: {
    animation: "x 2s",
    animationName: Radium.keyframes(fadeInRight, "fadeInRight")
  }
};
const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon="labeled"
    inverted
    vertical
    visible={visible}
    width="thin"
    className="bg-img"
  >
    <Menu.Item>
      <Image src={avatar} size="small" circular />
      <div className="user-name">Akib Tanjim</div>
    </Menu.Item>
    <Menu.Item as="a" className="second-menu-item">
      <Icon name="home" />
      Home
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="gamepad" />
      Games
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="camera" />
      Channels
    </Menu.Item>
  </Sidebar>
);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarToggle: false
    };
  }
  render() {
    return (
      <div className="App">
        <Grid>
          <Grid.Row columns={1} only="mobile">
            <Grid.Column>
              <span>Hello</span>
            </Grid.Column>
          </Grid.Row>
          <Grid.Column width={2} only="tablet computer" className="app-sidebar">
            <VerticalSidebar direction={"left"} visible={true} />
          </Grid.Column>
          <Grid.Column width={14}>
            <div className="container">
              <StyleRoot>
                <div className="home-page-container" style={styles.fadeInRight}>
                  {/* <Segment placeholder raised>
                    <Grid columns={2} stackable textAlign="left">
                      <Grid.Row verticalAlign="middle">
                        <Grid.Column width={10} textAlign="center">
                          <Header as="h2">MD. TANJIM -AL- AKIB</Header>
                          <Header as="h3">Software Engineer</Header>
                          <Header sub>Phone: +8801673582219</Header>
                          <Header sub>
                            Email:{" "}
                            <span className="email">akibtanjim@gmail.com</span>
                          </Header>
                          <Header sub>
                            <SocialIcon
                              url="http://linkedin.com/in/jaketrent"
                              style={{ height: 35, width: 35 }}
                            />
                            <SocialIcon
                              network="twitter"
                              color="#ff5a01"
                              style={{ marginLeft: 5, height: 35, width: 35 }}
                            />
                            <SocialIcon
                              network="facebook"
                              style={{ marginLeft: 5, height: 35, width: 35 }}
                            />
                            <SocialIcon
                              network="github"
                              style={{ marginLeft: 5, height: 35, width: 35 }}
                            />
                          </Header>
                        </Grid.Column>
                        <Grid.Column width={6}>
                          <Image src={UserFull} size="big" />
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Segment> */}

                  {/* <Grid>
                    <Grid.Row verticalAlign="middle">
                      <Grid.Column width={16} textAlign="center">
                        <Header as="h2">Experience</Header>
                      </Grid.Column>
                      <Grid.Column width={16} textAlign="center">
                        <Timeline lineColor={"#ddd"}>
                          <TimelineItem
                            key="001"
                            dateText="11/2010 – Present"
                            style={{ color: "#e86971" }}
                          >
                            <h3>Title, Company</h3>
                            <h4>Subtitle</h4>
                            <p>
                              Est incididunt sint eu minim dolore mollit velit
                              velit commodo ex nulla exercitation. Veniam velit
                              adipisicing anim excepteur nostrud magna nostrud
                              aliqua dolor. Sunt aute est duis ut nulla officia
                              irure reprehenderit laborum fugiat dolore in elit.
                              Adipisicing do qui duis Lorem est.
                            </p>
                            <p>
                              Est incididunt sint eu minim dolore mollit velit
                              velit commodo ex nulla exercitation. Veniam velit
                              adipisicing anim excepteur nostrud magna nostrud
                              aliqua dolor. Sunt aute est duis ut nulla officia
                              irure reprehenderit laborum fugiat dolore in elit.
                              Adipisicing do qui duis Lorem est.
                            </p>
                            <p>
                              Est incididunt sint eu minim dolore mollit velit
                              velit commodo ex nulla exercitation. Veniam velit
                              adipisicing anim excepteur nostrud magna nostrud
                              aliqua dolor. Sunt aute est duis ut nulla officia
                              irure reprehenderit laborum fugiat dolore in elit.
                              Adipisicing do qui duis Lorem est.
                            </p>
                          </TimelineItem>
                          <TimelineItem
                            key="002"
                            dateText="04/2009 – 11/2010"
                            dateInnerStyle={{
                              background: "#61b8ff",
                              color: "#000"
                            }}
                            bodyContainerStyle={{
                              background: "#ddd",
                              padding: "20px",
                              borderRadius: "8px",
                              boxShadow:
                                "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
                            }}
                          >
                            <h3 style={{ color: "#61b8ff" }}>Title, Company</h3>
                            <h4 style={{ color: "#61b8ff" }}>Subtitle</h4>
                            <p>
                              Est incididunt sint eu minim dolore mollit velit
                              velit commodo ex nulla exercitation. Veniam velit
                              adipisicing anim excepteur nostrud magna nostrud
                              aliqua dolor. Sunt aute est duis ut nulla officia
                              irure reprehenderit laborum fugiat dolore in elit.
                              Adipisicing do qui duis Lorem est.
                            </p>
                            <p>
                              Est incididunt sint eu minim dolore mollit velit
                              velit commodo ex nulla exercitation. Veniam velit
                              adipisicing anim excepteur nostrud magna nostrud
                              aliqua dolor. Sunt aute est duis ut nulla officia
                              irure reprehenderit laborum fugiat dolore in elit.
                              Adipisicing do qui duis Lorem est.
                            </p>
                          </TimelineItem>
                          <TimelineItem
                            key="003"
                            dateComponent={
                              <div
                                style={{
                                  display: "block",
                                  float: "left",
                                  padding: "10px",
                                  background: "rgb(150, 150, 150)",
                                  color: "#fff"
                                }}
                              >
                                11/2008 – 04/2009
                              </div>
                            }
                          >
                            <h3>Title, Company</h3>
                            <h4>Subtitle</h4>
                            <p>
                              Est incididunt sint eu minim dolore mollit velit
                              velit commodo ex nulla exercitation. Veniam velit
                              adipisicing anim excepteur nostrud magna nostrud
                              aliqua dolor. Sunt aute est duis ut nulla officia
                              irure reprehenderit laborum fugiat dolore in elit.
                              Adipisicing do qui duis Lorem est.
                            </p>
                            <p>
                              Est incididunt sint eu minim dolore mollit velit
                              velit commodo ex nulla exercitation. Veniam velit
                              adipisicing anim excepteur nostrud magna nostrud
                              aliqua dolor. Sunt aute est duis ut nulla officia
                              irure reprehenderit laborum fugiat dolore in elit.
                              Adipisicing do qui duis Lorem est.
                            </p>
                            <p>
                              Est incididunt sint eu minim dolore mollit velit
                              velit commodo ex nulla exercitation. Veniam velit
                              adipisicing anim excepteur nostrud magna nostrud
                              aliqua dolor. Sunt aute est duis ut nulla officia
                              irure reprehenderit laborum fugiat dolore in elit.
                              Adipisicing do qui duis Lorem est.
                            </p>
                          </TimelineItem>
                          <TimelineItem
                            key="004"
                            dateText="08/2008 – 11/2008"
                            dateInnerStyle={{ background: "#76bb7f" }}
                          >
                            <h3>Title, Company</h3>
                            <h4>Subtitle</h4>
                            <p>
                              Est incididunt sint eu minim dolore mollit velit
                              velit commodo ex nulla exercitation. Veniam velit
                              adipisicing anim excepteur nostrud magna nostrud
                              aliqua dolor. Sunt aute est duis ut nulla officia
                              irure reprehenderit laborum fugiat dolore in elit.
                              Adipisicing do qui duis Lorem est.
                            </p>
                            <p>
                              Est incididunt sint eu minim dolore mollit velit
                              velit commodo ex nulla exercitation. Veniam velit
                              adipisicing anim excepteur nostrud magna nostrud
                              aliqua dolor. Sunt aute est duis ut nulla officia
                              irure reprehenderit laborum fugiat dolore in elit.
                              Adipisicing do qui duis Lorem est.
                            </p>
                          </TimelineItem>
                        </Timeline>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid> */}
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
                  <Grid>
                    <Grid.Row verticalAlign="middle">
                      <Grid.Column width={16} textAlign="center">
                        <Header as="h2">Skills</Header>
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
                </div>
              </StyleRoot>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
