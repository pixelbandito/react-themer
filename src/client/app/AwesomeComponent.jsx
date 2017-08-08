import React from 'react';

class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likesCount: 0 };
    this.onLike = this.onLike.bind(this);
  }

  onLike() {
    const newLikesCount = this.state.likesCount + 1;
    this.setState({ likesCount: newLikesCount });
  }

  render() {
    return (
      <div>
        Likes: <span>{this.state.likesCount}</span>
        <div>
          <button className="btn btn-primary" onClick={this.onLike}>Like me</button>
        </div>
      </div>
    );
  }
}

export default AwesomeComponent;
