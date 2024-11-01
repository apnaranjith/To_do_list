import { Component } from "react";
import "./todo.css"
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      arr: [],
    };
  }

  chn = (event) => {
    this.setState({
      data: event.target.value,
    });
  };
  sub = (event) => {
    event.preventDefault();
    this.setState({
      arr: [...this.state.arr, this.state.data],
    });
  };
  del = (index) => {
   var ftr=this.state.arr.filter((val,ind)=>{
    return index!=ind;

   })
   this.setState({
        arr:ftr,
   })
  };
  edt=(index)=>{
   var  pmp=prompt("enter your task to update");
this.state.arr.splice(index,1,pmp);
    this.setState({
        arr:this.state.arr,
    })

  };
  render() {
    var a = this.state.arr.map((val, index) => {
      return (
        <>
       
          <tr key={index}>
            <td>{val}</td>
            <td>
              <button onClick={()=>{
                this.edt(index);
              }}>EDIT</button>
            </td>
            <td>
              <button onClick={()=>{
                this.del(index)
              }}>DELETE</button>
            </td>
          </tr>
          
        </>
      );
    });

    return (
      <>
        <h1 style={{ textAalign: "center", color: "red" }}>To do list</h1>
        <form action="" onSubmit={this.sub}>
          <input type="text" name="task" onChange={this.chn}></input>
          <input type="submit" value="ADD Task" />
        </form>
        <table>{a}</table>

        {console.log(this.state.data)}
        {console.log(this.state.arr)}
      </>
    );
  }
}
export default Todo;
