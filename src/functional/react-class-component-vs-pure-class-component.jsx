import React from "react";
import ReactDOM from "react-dom";

class ClassComponent extends React.Component {
    render() {
      console.log("Regular class component has been rendered!");
      return "I'm the class component";
    }
  }

  class PureClassComponent extends React.PureComponent {
    render() {
      console.log("Pure class component has been rendered!");
      return "I'm the class component";
    }
  }

  class RenderClassComponents extends React.Component {
    constructor() {
      super();
      
      this.state = {
        message: "Hello"
      }
    }
    
    componentDidMount() {
      const {message} = this.state;
      
      setInterval(() => {
        this.setState({
          message: message
        });
      }, 1000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.message !== this.state.message;
    }
    
    render() {
      return (
        <div>
          <ClassComponent />
          <PureClassComponent />
        </div>
      );
    }
  }

const rootElement = document.getElementById("root");
ReactDOM.render(<RenderClassComponents />, rootElement);