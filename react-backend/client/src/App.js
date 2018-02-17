import React, { Component } from 'react';
import Header from './components/header';
import Knowl from './components/knowl';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {knowls:[]};

    this.knowlsearch("lol");
  }

  render() {
    return (
      <div className="App">
        <h1>KnowlcontentTest</h1>
        <Header onSearchTermChange={this.knowlsearch} />
        <div className="queue">
          {this.state.knowls.map(knowl =>
            <Knowl knowl={knowl} />
          )}
        </div>
      </div>
    );
  }

  knowlsearch = textin => {
    if (textin == "") {
      this.setState({knowls:[]});
    } else {
      var aknowl = {id :1,
                   title:"topic1",
                   type:"type1",
                   field:"field1",
                   level: 'General',
                   content:"content1",
                   image:{hasimage:true,
                          path:"imagepath1"},
                   footerids: [2, 3, 4, 5, 1]
                   };
      this.setState({knowls:[aknowl]});
    }
  }

}

export default App;
