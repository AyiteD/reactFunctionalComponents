
import React, {Component} from "react";
import ReactDOM from "react-dom";

class ClassComponent extends Component {
    constructor() {
        super();

        this.state = {
            message: "Hello"
        }
    }

    logout = () => {
        this.setState({
            message: "Good bye"
        });
    }

    render() {
        const {message} = this.state;
        const {
            name,
            surname
        } = this.props;

        return (
            <div onClick={this.logout} >
                {`{$message}, ${name} ${surname}`}
            </div>
        );
    }
}

const RenderClassComponents = () => {
    return <ClassComponent name={"Bedirhan"} surname={Karadoğan} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<RenderClassComponents />, rootElement);