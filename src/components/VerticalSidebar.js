import React, { Component } from "react";
import { Icon, Sidebar, Menu, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getDefaults } from "../reducer";
import { changeActiveMenuItem } from "../action";

import history from "../utils/history";

import avatar from "../user.jpeg";

class VerticalSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "home"
    };
  }
  handleMenuClick(name) {
    switch (name) {
      case "experience":
        this.props.dispatch(changeActiveMenuItem("experience"));
        history.push("/experience");
        break;
      case "home":
        this.props.dispatch(changeActiveMenuItem("home"));
        history.push("/home");
        break;
      case "project":
        this.props.dispatch(changeActiveMenuItem("project"));
        history.push("/project");
        break;
      case "education":
        this.props.dispatch(changeActiveMenuItem("education"));
        history.push("/education");
        break;
      case "skill":
        this.props.dispatch(changeActiveMenuItem("skill"));
        history.push("/skill");
        break;
      default:
    }
  }

  render() {
    const { animation, direction, visible } = this.props;
    return (
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
        stackable
      >
        <Menu.Item>
          <Image src={avatar} size="small" circular />
          <div className="user-name">Akib Tanjim</div>
        </Menu.Item>
        <Menu.Item
          as="a"
          active={this.props.defaults.activeItem === "home"}
          onClick={() => this.handleMenuClick("home")}
          className="second-menu-item"
        >
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item
          as="a"
          active={this.props.defaults.activeItem === "experience"}
          onClick={() => this.handleMenuClick("experience")}
        >
          <Icon name="line graph" />
          Experience
        </Menu.Item>
        <Menu.Item
          as="a"
          active={this.props.defaults.activeItem === "education"}
          onClick={() => this.handleMenuClick("education")}
        >
          <Icon name="book" />
          Education
        </Menu.Item>
        <Menu.Item
          as="a"
          active={this.props.defaults.activeItem === "project"}
          onClick={() => this.handleMenuClick("project")}
        >
          <Icon name="pencil" />
          Projects
        </Menu.Item>
        <Menu.Item
          as="a"
          active={this.props.defaults.activeItem === "skill"}
          onClick={() => this.handleMenuClick("skill")}
        >
          <Icon name="star" />
          Skills
        </Menu.Item>
        <Menu.Item
          as="a"
          active={this.props.defaults.activeItem === "skill"}
          onClick={() => this.handleMenuClick("skill")}
        >
          <Icon name="file alternate outline" />
          Publications
        </Menu.Item>
        {/* <Menu.Item as="a">
          <Icon name="camera" />
          Channels
        </Menu.Item> */}
      </Sidebar>
    );
  }
}
function mapStateToProps(state) {
  return {
    defaults: getDefaults(state)
  };
}
export default connect(
  mapStateToProps,
  null
)(withRouter(VerticalSidebar));
