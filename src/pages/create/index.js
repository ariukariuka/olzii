import React, { Component } from "react";
import SideNav from "../../components/sidenav";
import Input from "../../components/input";
import axios from '../../axios-get'
class Create extends Component {
  valueUsername = (e) => {
    this.setState({username:  e.target.value})
  };
  valueAge = (e) => {
    this.setState({ age: e.target.value });
  };
  valueEmail = (e) => {
    this.setState({email: e.target.value });
  };
  valueNumber = (e) => {
    this.setState({ number: e.target.value });
  };

  state = {
      username: "",
      age: "",
      email: "",
      number: ""
  }

  submitInformation = () => {
      const sendElements = {
          username: this.state.username,
          
          age: this.state.age,
          email: this.state.email,
          number: this.state.number
      }
      axios.post("send.json", sendElements).then(() => console.log("amjilttai ilgeegdlee"))
  }

  render() {
    return (
      <div className="w-full flex">
        <SideNav />
        <div>
          <div className="pt-[50px] px-[30px]">
            <h1 className="text-[30px] font-[600] mb-[10px]">
              Create Information
            </h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="w-full flex gap-[20px]"
            >
              <Input
                type="text"
                valueInput={this.valueUsername}
                placeholder="username"
              />
              <Input 
                type="text" 
                placeholder="age" 
                valueInput={this.valueAge} 
              />
              <Input
                type="text"
                placeholder="email"
                valueInput={this.valueEmail}
              />
              <Input
                type="text"
                placeholder="phoneNumber"
                valueInput={this.valueNumber}
              />
              <button
                type="submit"
                className="px-[15px] py-[8px] rounded-[10px] bg-[orange]"
                onClick={this.submitInformation}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Create;
