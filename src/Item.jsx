import { PureComponent } from "react";

class Item extends PureComponent {
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

export default Item;
