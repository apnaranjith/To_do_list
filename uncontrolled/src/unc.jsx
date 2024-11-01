import { Component, createRef } from "react";
class Unc extends Component{
    constructor(props){
        super(props);
         this.g=createRef();
         this.g1=createRef();

    }
    sub=(e)=>{
        e.preventDefault();
        console.log(this.g.current.value);
        console.log(this.g1.current.value);
    }
    render(){
        return(
            <>
           <h1>Uncontrolled</h1>
           <form onSubmit={this.sub}>
            <input type="text" ref={this.g}></input>
            <input type="text" ref={this.g1}></input>

            <input type="submit" value="submit"></input>
           </form>
            </>
        )
    }
}
export default Unc;