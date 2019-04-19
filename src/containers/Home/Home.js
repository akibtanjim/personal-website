import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Grid,
  Image,
  Segment,
  Header,
  Dimmer,
  Loader,
  Modal,
  Button
} from "semantic-ui-react";
import { SocialIcon } from "react-social-icons";
import ReactHtmlParser from "react-html-parser";
//import UserFull from "../../user-full.jpg";

import animationStyles from "../../utils/animationStyles";
import { getInfo, launch } from "./action";
import { getGeneralInfo } from "./reducer";
//import { imageUrl } from "../../variables";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      showFireWorks: false
    };
  }
  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true });
  };

  close = () => {
    this.setState({ showFireWorks: true });
    setTimeout(() => {
      this.setState({ open: false, showFireWorks: false });
      this.props.dispatch(launch());
    }, 5000);
  };
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.info.info[17].value === "no" &&
      this.props.info.info[17].value === "no"
    ) {
      this.setState({ open: true });
    }
  }
  componentDidMount() {
    Promise.all([this.props.dispatch(getInfo())]);
  }
  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state;
    return (
      <div className="home-page-container" style={animationStyles.fadeInRight}>
        {this.props.info.loading ? (
          <Dimmer
            style={{
              marginLeft: 20,
              height: "100vh"
            }}
            active
          >
            <Loader />
          </Dimmer>
        ) : (
          <Segment placeholder raised>
            <Modal
              open={open}
              closeOnEscape={closeOnEscape}
              closeOnDimmerClick={closeOnDimmerClick}
              onClose={this.close}
            >
              <Modal.Header>Launch Website</Modal.Header>
              <Modal.Content>
                <b>
                  Launching of akibtanjim.com by someone special and close to my
                  heart
                </b>
                <div
                  class="pyro"
                  style={{
                    background: "#000",
                    display: this.state.showFireWorks ? "" : "none"
                  }}
                >
                  <div class="before" />
                  <div class="after" />
                </div>
              </Modal.Content>
              <Modal.Actions>
                <Button
                  onClick={this.close}
                  positive
                  labelPosition="right"
                  icon="checkmark"
                  content="Yes"
                />
              </Modal.Actions>
            </Modal>
            <Grid columns={2} stackable textAlign="left">
              <Grid.Row verticalAlign="middle">
                <Grid.Column width={10} textAlign="center">
                  <Header as="h2">MD. TANJIM -AL- AKIB</Header>
                  <Header as="h3">{this.props.info.info[15].value}</Header>
                  <Header sub>Phone: {this.props.info.info[8].value}</Header>
                  <Header sub>Address: {this.props.info.info[1].value}</Header>
                  <Header sub>
                    {ReactHtmlParser(this.props.info.info[9].value)}
                  </Header>
                  <Header sub>
                    Email:
                    <span className="email">
                      {this.props.info.info[3].value}
                    </span>
                  </Header>
                  <Header sub>
                    <SocialIcon
                      network="linkedin"
                      url={this.props.info.info[7].value}
                      style={{
                        height: 35,
                        width: 35
                      }}
                    />
                    <SocialIcon
                      network="twitter"
                      url={this.props.info.info[4].value}
                      color="#ff5a01"
                      style={{
                        marginLeft: 5,
                        height: 35,
                        width: 35
                      }}
                    />
                    <SocialIcon
                      network="facebook"
                      url={this.props.info.info[5].value}
                      style={{
                        marginLeft: 5,
                        height: 35,
                        width: 35
                      }}
                    />
                    <SocialIcon
                      network="github"
                      url={this.props.info.info[6].value}
                      style={{
                        marginLeft: 5,
                        height: 35,
                        width: 35
                      }}
                    />
                  </Header>
                </Grid.Column>
                <Grid.Column width={6}>
                  <Image
                    src={
                      "http://akibtanjim.com/admin/public/others/" +
                      this.props.info.info[16].value
                    }
                    size="big"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { info: getGeneralInfo(state) };
}
export default connect(
  mapStateToProps,
  null
)(withRouter(Home));
