import React from "react";
import Context from "./Context";

const withContext = Wrappedcomponent => {
    const WithHOC = props => {
        return (
            <Context.Consumer>
                {context => <Wrappedcomponent {...props} context={context} />}
            </Context.Consumer>
        );
    }
    return WithHOC;
}

export default withContext;