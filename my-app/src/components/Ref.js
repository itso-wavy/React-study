import React, { Component } from 'react';
import '../styles/css/style.css';
import styled from 'styled-components';

// ref = DOM 조작
// 요소에 포커스, 스크롤 조작...

export class RefFocus extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  handleChange = e => {
    this.setState({ password: e.target.value });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
    this.input.focus();
  };

  render() {
    return (
      <Sdiv>
        <h2>Ref</h2>
        <h3>- 클래스형</h3>
        {/* <input
          type='password'
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
        /> */}
        {/* 콜백 함수를 통한 ref */}
        <input
          ref={ref => (this.input = ref)}
          type='password'
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
        />
        <button onClick={this.handleButtonClick}>검증</button>
      </Sdiv>
    );
  }
}

export class RefScroll extends Component {
  // {/* createRef를 통한 ref */}
  box = React.createRef();
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    // this.box는 div라는 DOM 요소를 가리키고 있음
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative',
    };
    const innerStyle = {
      width: '100%',
      height: '500px',
      background: 'linear-gradient(white, black)',
    };

    return (
      <div>
        <div style={style} ref={this.box}>
          <div style={innerStyle}></div>
        </div>
        <button onClick={this.scrollToBottom}>스크롤1</button>
      </div>
    );
  }
}

const Sdiv = styled.div`
  background-color: lightyellow;
`;
