import React from "react";
import ReactDOM from "react-dom";

class ClassComponent extends React.Component {
    render() {
        return "I'm the class component";
    }
}

const RenderClassComponent = () => {
    return <ClassComponent />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<RenderClassComponents />, rootElement);