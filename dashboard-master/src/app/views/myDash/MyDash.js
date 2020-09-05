import React, { Component } from "react";
import { Breadcrumb } from "matx";
import { Card } from "@material-ui/core";
// import BasicMap from "./BasicMap";
// import MarkerMap from "./MarkerMap";

class MyDash extends Component {
  state = {};
  render() {
    return (
      <div className="m-sm-30">
        <div className="mb-sm-30">
          <Breadcrumb routeSegments={[{ name: "Map" }]} />
        </div>
        <Card>
         <h1>card new </h1>
        </Card>
        <div className="py-3" />
        <Card>
        <h1>card new </h1>
        </Card>
      </div>
    );
  }
}

export default MyDash;
