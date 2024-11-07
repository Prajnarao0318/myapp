import React from "react";

class Purecomp extends React.Component{
    render(){
        console.log("pure component render");
        return(
            <div>
                I m the pure component{this.props.name}
            </div>
        );
    }
}
export default Purecomp;