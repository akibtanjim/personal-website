import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {
    Grid,
    Image,
    Segment,
    Header,
    Dimmer,
    Loader
} from "semantic-ui-react";
import {SocialIcon} from "react-social-icons";
import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from 'react-html-parser';
import UserFull from "../../user-full.jpg";

import animationStyles from "../../utils/animationStyles";
import {getInfo} from "./action";
import {getGeneralInfo} from "./reducer"
import {imageUrl} from "../../variables";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this
            .props
            .dispatch(getInfo())
    }
    render() {
        console.log(this.props)
        return (
            <div className="home-page-container" style={animationStyles.fadeInRight}>
                {this.props.info.loading
                    ? <Dimmer active>
                            <Loader/>
                        </Dimmer>
                    : <Segment placeholder raised>
                        <Grid columns={2} stackable textAlign="left">
                            <Grid.Row verticalAlign="middle">
                                <Grid.Column width={10} textAlign="center">
                                    <Header as="h2">MD. TANJIM -AL- AKIB</Header>
                                    <Header as="h3">{this.props.info.info[24].value}</Header>
                                    <Header sub>Phone: {this.props.info.info[8].value}</Header>
                                    <Header sub>Address: {this.props.info.info[1].value}</Header>
                                    <Header sub>{ReactHtmlParser(this.props.info.info[9].value)}</Header>
                                    <Header sub>
                                        Email:
                                        <span className="email">{this.props.info.info[3].value}</span>
                                    </Header>
                                    <Header sub>
                                        <SocialIcon
                                            network="linkedin"
                                            url={this.props.info.info[7].value}
                                            style={{
                                            height: 35,
                                            width: 35
                                        }}/>
                                        <SocialIcon
                                            network="twitter"
                                            url={this.props.info.info[4].value}
                                            color="#ff5a01"
                                            style={{
                                            marginLeft: 5,
                                            height: 35,
                                            width: 35
                                        }}/>
                                        <SocialIcon
                                            network="facebook"
                                            url={this.props.info.info[5].value}
                                            style={{
                                            marginLeft: 5,
                                            height: 35,
                                            width: 35
                                        }}/>
                                        <SocialIcon
                                            network="github"
                                            url={this.props.info.info[6].value}
                                            style={{
                                            marginLeft: 5,
                                            height: 35,
                                            width: 35
                                        }}/>
                                    </Header>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <Image src={imageUrl + "/others/" + this.props.info.info[25].value} size="big"/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {info: getGeneralInfo(state)};
}
export default connect(mapStateToProps, null)(withRouter(Home));
