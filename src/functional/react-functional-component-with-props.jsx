import React from "react";
import ReactDOM from "react-dom";

const FunctionalComponentWithProps = (props) => {
    const fullName = `${props.name} ${props.surname}`;
    
    return `Hello ${fullName}`;
};

const RenderFunctionalComponents = () => {
    return <FunctionalComponentWithProps name={"Mbarali"} surname={"Solaar"} />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<RenderFunctionalComponents />, rootElement);