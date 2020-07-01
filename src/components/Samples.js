import React, { Component } from "react";

export default Card = (props) => {
  const { isVisible, title } = props;
  return (
    <div>
      <h2>{title}</h2>
      <hr />
      {isVisible && <p>Hello there!</p>}
    </div>
  );
};

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }

  handleClick = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  render() {
    const { title } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <hr />
        {isVisible && <p>Hello there!</p>}
        <button onClick={this.handleClick}>Show/Hide Description</button>
      </div>
    );
  }
}

export default Card = (props) => {
  const { title } = props;
  // 👇 This is where the magic happens 👇
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (e) => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h2>{title}</h2>
      <hr />
      {isVisible && <p>Hello there!</p>}
      <button onClick={handleClick}>Show/Hide Description</button>
    </div>
  );
};
