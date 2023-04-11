import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 1) 클래스형
export class Props extends Component {
  static defaultProps = {
    name: 'my',
  };

  static propTypes = {
    name: PropTypes.string,
    text: PropTypes.string.isRequired,
  };

  render() {
    const { name, children } = this.props; // 비구조화 할당
    return (
      <div style={{ backgroundColor: 'lightblue' }}>
        <h2>Props</h2>
        <h3>- {name} 컴포넌트</h3>
        <button>{children}</button>
      </div>
    );
  }
}

// 2) 함수형
export const Props2 = props => {
  return (
    <div style={{ backgroundColor: 'lightblue' }}>
      <h3>- {props.name} 컴포넌트</h3>
      <button>{props.children}</button>
    </div>
  );
};

// Props.defaultProps = {
//   name: 'my',
//   text: '123'
// };

// Props.propTypes = {
//   name: PropTypes.string,
//   text: PropTypes.string.isRequired
// }
