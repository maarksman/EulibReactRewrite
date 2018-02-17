import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import YTSearch from 'youtube-api-search';
import Header from './components/header';
import Queue from './components/queue';
/*const fs = require('fs');
const mysql = require('mysql');
var db = mysql.createConnection({
  host: 'localhost',
  user: 'eulibdbuser',
  password: 'mysql',
  database: 'EulibDB2',
  multipleStatements: true
});

var createtablesquery = ` drop table if exists article;
drop table if exists users;
drop table if exists field;
drop table if exists user;
drop table if exists bookmarks;
drop trigger if exists bookdatetrigger;

create table field(
  field VARCHAR(30),
  subfield_of VARCHAR(30),
  PRIMARY KEY (field)
);

create table users(
  username VARCHAR(50) PRIMARY KEY,
  password VARCHAR(100) NOT NULL,
  first_name VARCHAR(50) ,
  last_name VARCHAR(50) ,
  salt VARCHAR(50),
  account_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  theme TEXT,
  email VARCHAR(50),
  UNIQUE (email)
);

create table article(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  type VARCHAR(30) NOT NULL,
  level INT,
  belongs_to VARCHAR(30),
  FOREIGN KEY (belongs_to) REFERENCES field(field),
  path VARCHAR(150) NOT NULL,
  date_created DATETIME DEFAULT CURRENT_TIMESTAMP,
  creator VARCHAR(50),
  FOREIGN KEY (creator) REFERENCES users(username),
  last_edited DATETIME ON UPDATE CURRENT_TIMESTAMP,
  last_editor VARCHAR(50)
);

create table bookmarks(
  bookid INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50),
  title VARCHAR(30),
  field VARCHAR(30),
  last_edited DATETIME
);

INSERT INTO users (username, password, email) VALUES ('testuserpony', 'password', 'testuser1@eu.lib'),
('testuser2', 'password', 'Algebra@malgebra.com');

INSERT INTO field VALUES ('Mathematics', NULL),
('Algebra', 'Mathematics'),
('Analysis', 'Mathematics'),
('Field Theory', 'Algebra');

INSERT INTO article ( title, type, belongs_to, path, creator, level)
VALUES ( 'Automorphism', 'Definition', 'Analysis', 'knowlcontent/automorphism.html', 'testuserpony', 3),
 ( 'Field', 'Definition', 'Mathematics', 'knowlcontent/field.html', 'testuserpony', 3),
 ( 'Field Extension', 'Definition', 'Field Theory', 'knowlcontent/fieldextension.html', 'testuserpony', 3),
 ( 'Galois Group', 'Definition', 'Algebra', 'knowlcontent/galoisgroup.html', 'testuserpony', 3)
 `;

db.query(createtablesquery, (err, result) => {
  if (err) throw err;
  console.log(result);
}); */



const API_KEY = 'AIzaSyDr2ge_Exc2jv-9OSOhjxRfarkFnmPSB_0';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      knowls: []
     };
}

  render() {
    return (
      <div>
        <Header />
        <Queue knowls={this.state.knowls} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
