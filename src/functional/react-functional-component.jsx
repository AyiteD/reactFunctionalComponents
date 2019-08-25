import React from "react";
import ReacDom from "react-dom";

function FunctionalComponent() {
    return "I'm the functional component";
}

const FunctionalComponentWithArrowFunction = () => {
    return "I'm the functional component";
}

const FunctionalComponentReturnsHtml = () => {
    return <div>{"I'm the functional component"}</div>;
}

const FunctionalComponentReturnsMultilineHtml = () => {
    return (
      <div>
        {"I'm the functional component"}
      </div>
    );
}

const RenderFunctionalComponents = () => {
    return (
      <div>
        <FunctionalComponent />
        <FunctionalComponentWithArrowFunction />
        <FunctionalComponentReturnsHtml />
        <FunctionalComponentReturnsMultilineHtml />
      </div>
    );
}
  
const rootElement = document.getElementById("root");
ReactDOM.render(<RenderFunctionalComponents />, rootElement);