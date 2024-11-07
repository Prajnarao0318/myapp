import React from "react";

class RegComp extends React.Component{
    render(){
        console.log("regular component render");
        return(
            <div>
                I m the regular component{this.props.name}
            </div>
        );
    }
}
export default RegComp;