import React, { Component } from "react";
import style from "./style.module.css";
import SideNav from "../sidenav";
class State extends Component {
  state = {
    title: "",
    des: "",
  };

  render() {
    return (
      <>
        <div className={style.container}>
            <SideNav/>
        </div>
      </>
    );
  }
}

export default State
