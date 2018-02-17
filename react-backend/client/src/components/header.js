import React, { Component } from 'react';


class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {typedin:""};
  }

  render() {
    return (
      <div className="search-controls">
        <input value={this.state.typedin}
        onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(typedin) {
    this.setState({typedin});
    this.props.onSearchTermChange(typedin);
  }
}

export default Header;
