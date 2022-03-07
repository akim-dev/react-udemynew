import React from 'react';
import PropTypes from 'prop-types';

function Header({ text }) {
  return (
    <header style={{ backgroundColor: 'red', color: 'white' }}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

// Header.defaultProps ={
//   text:'Ini dari Props type'
// }
// Header.PropTypes ={
//   text:PropTypes.string
// }

export default Header;
