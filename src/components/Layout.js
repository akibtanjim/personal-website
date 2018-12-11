import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { StyleRoot } from "radium";
import VerticalSidebar from "./VerticalSidebar";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
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
            <StyleRoot>{this.props.children}</StyleRoot>
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  null,
  null
)(withRouter(Layout));
