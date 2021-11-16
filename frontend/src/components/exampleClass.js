import React from 'react';

class Example extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  
  componentDidMount() {

    //This function will call on initial rendering.
    console.log(`inside mount You clicked ${this.state.count} times`)
    document.title = `You clicked ${this.state.count} times`;
   

  } 
  
  
  componentDidUpdate() {
     document.title = `You clicked ${this.state.count} times`;
     console.log(`inside update You clicked ${this.state.count} times`)
   }

  render(){
    return(
      <div>
      <p>You clicked {this.state.count} times</p>
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        Click me
      </button>
    </div>
    )
  }
}
export default Example;