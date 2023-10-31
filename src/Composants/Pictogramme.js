
import Icone from './Icone';
import React, { Component } from "react";
class Pictogramme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Bonne découverte des composants React",
      counter: 0,
    };
  }

  handleLikeClick = () => {
    // Update the message when the button is clicked
    this.setState({ message: "Premier défi réussi!" });
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    this.setState({
      buttonStyle: {
        backgroundColor: "cyan",
        fontWeight: "bold",
      },
    });
  };

  render() {
    return (
      <div>
        <Icone />
        <hr />
        <div>
        <div className="counter">{this.state.counter}</div>
          <button
            type="button"
            className="btn no-outline btn-secondary"
            style={this.state.buttonStyle}
            onClick={this.handleLikeClick}
          >
            <i className="fa fa-thumbs-o-up fa-4 align-middle" aria-hidden="true"></i>
            &nbsp;
            <span className="align-middle">J'aime</span>
          </button>
        </div>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Pictogramme;