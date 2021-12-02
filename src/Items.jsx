import { PureComponent } from "react";

class Items extends PureComponent {
  render() {
    return (
      <ul>
        {this.props.numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    );
  }
}

export default Items;
