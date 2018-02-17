import React, {Component} from 'react';

var inputStyle = {
  right: '100%'
}

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {searchtext:""};
  }

  render() {
    return (
      <header>
        <input style={inputStyle} value={this.state.searchtext} onChange={(event) => this.setState({searchtext: event.target.value})} />
      </header>
    )
  }
}

export default Header;
