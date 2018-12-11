import React, { Component } from 'react'
class Home extends Component {
    state = {  }
    render() { 
        return (<Segment placeholder raised>
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
        </Segment> );
    }
}
 
export default Home;