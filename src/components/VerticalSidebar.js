import React from "react";
import {Icon, Sidebar, Menu, Image} from "semantic-ui-react";
import avatar from "../user.jpeg";
const VerticalSidebar = ({animation, direction, visible}) => (
    <Sidebar
        as={Menu}
        animation={animation}
        direction={direction}
        icon="labeled"
        inverted
        vertical
        visible={visible}
        width="thin"
        className="bg-img">
        <Menu.Item>
            <Image src={avatar} size="small" circular/>
            <div className="user-name">Akib Tanjim</div>
        </Menu.Item>
        <Menu.Item as="a" className="second-menu-item">
            <Icon name="home"/>
            Home
        </Menu.Item>
        <Menu.Item as="a">
            <Icon name="gamepad"/>
            Games
        </Menu.Item>
        <Menu.Item as="a">
            <Icon name="camera"/>
            Channels
        </Menu.Item>
    </Sidebar>
);

export default VerticalSidebar;