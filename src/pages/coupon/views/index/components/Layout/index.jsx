import React, { Component } from 'react';

class Layout extends Component {
  render() {
    return (
      <div className="w-750 pb-100">
        {this.props.children}
      </div>
    );
  }
}

export default Layout;