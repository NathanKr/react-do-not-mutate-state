import {Component} from 'react'
import Items from './Items'

class App extends Component {
    state = {
    numbers: [],
  };


  createRandomNumber() {
    return Math.floor(Math.random() * 10) // 0,1 ...9
  }

  // CORRECT : no state mutation - the state is cloned and only the clone is modifyed
  addItemWithoutStateMutation = () => {
    const numbers = [...this.state.numbers];
    numbers.push(this.createRandomNumber())
    this.setState({numbers});
  };

  // WRONG  --> state is mutated
  addItemWithStateMutation = () => {
    this.state.numbers.push(this.createRandomNumber());
    this.setState({ numbers: this.state.numbers });
  };

  render() {
    return (
      <div>
        <button style={{color:'green'}} onClick={this.addItemWithoutStateMutation}>
          Add item : no state mutation (correct)
        </button>
        <br />
        <button style={{color:'red'}} onClick={this.addItemWithStateMutation}>Add item : state mutation (wrong)</button>
        <Items numbers={this.state.numbers} />
      </div>
    );
  }
}

export default App;