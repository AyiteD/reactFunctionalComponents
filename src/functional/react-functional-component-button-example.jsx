import React from "react";
import ReactDOM from "react-dom";

const Button = (props) => {
    const {
        children,
        onClick
    } = props;

    const handleButtonClick = () => {
        if(onClick) {
            onClick();
        }
    }

    if(children) {
        return (
            <button onClick={handleButtonClick}>
                {props.children}
            </button>
        )
    }else{
        return "Please write some valid button context!";
    }

    const RenderButton = () => {
        return (
            <Button onClick={() => alert("Clicked!")} >
                {"Click me!"}
            </Button>
        );
    } 

    const rootElement = document.getElementById("root");
    ReactDOM.render(<RenderButton />, rootElement);
}