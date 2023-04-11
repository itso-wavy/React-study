import React, { Component, useState } from 'react';
import classes from '../styles/scss/CssModules.module.scss';

// 1) 클래스형
export class State extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0
  //   }
  // }

  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { text } = this.props;
    const { number, fixedNumber } = this.state;
    const { container } = classes;

    return (
      <div className={container}>
        <h2>{text}</h2>
        <h3>- 클래스형</h3>
        <p>바뀌지 않는 값: {fixedNumber}</p>
        <p>바뀌는 값: {number}</p>
        <button
          onClick={() => {
            this.setState({ number: number + 1 }, () => {
              console.log('setState 설정 세가지 방법');
            });

            // this.setState(prevState => {
            //   return {
            //     number: prevState.number + 1,
            //   };
            // });

            // this.setState(prevState => ({
            //   number: prevState.number + 1,
            // }));
          }}
        >
          + 1
        </button>
      </div>
    );
  }
}

// 2) 함수형
export const State2 = () => {
  const [msg, setMsg] = useState('');
  const onClickEnter = () => setMsg('굿모닝');
  const onClickLeave = () => setMsg('굿나잇');
  const { container2 } = classes;

  return (
    <div className={container2}>
      <h3>- 함수형</h3>
      <button onClick={onClickEnter}>아침</button>
      <button onClick={onClickLeave}>저녁</button>
      <h1>{msg}</h1>
    </div>
  );
};
