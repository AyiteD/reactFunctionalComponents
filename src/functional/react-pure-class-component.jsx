
import React from "react";
import ReactDOM from "react-dom";

class ClassComponent extends React.PureComponent {
    render() {
        return "I'm the class component";
    }
}

const RenderClassComponents = () => {
    return <ClassComponent />;
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<RenderClassComponents />, rootElement);