import React from "react";
import Purecomp from "./Purecomp";
import RegComp from "./RegComp";
class ParentComp extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            name: "doorvalabs"
        };
    }

    componentDidMount()
    {
        setInterval(() => {
            this.setState(
                {
                    name: "doorvalabs"
                }
            );
        },3000);
    }


    render(){
        console.log("parent compnent render");
        return(
            <div>
                I m the parent component
                <RegComp name={this.state.name}/>
                <Purecomp name={this.state.name}/>
            </div>
        );
    }
}
export default ParentComp;