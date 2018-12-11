import React from 'react';
import {Grid} from "semantic-ui-react";
import {bounce, fadeIn, fadeInRight} from "react-animations";
import {StyleRoot} from "radium";
import VerticalSidebar from "./VerticalSidebar";

const Layout = (props) => {
    return (
        <Grid>
            <Grid.Row columns={1} only="mobile">
                <Grid.Column>
                    <span>Hello</span>
                </Grid.Column>
            </Grid.Row>
            <Grid.Column width={2} only="tablet computer" className="app-sidebar">
                <VerticalSidebar direction={"left"} visible={true}/>
            </Grid.Column>
            <Grid.Column width={14}>
                <div className="container">
                    <StyleRoot>
                        {props.children}
                    </StyleRoot>
                </div>
            </Grid.Column>
        </Grid>
    );
}

export default Layout;