// 1) 클래스형
import React, { Component, useState } from 'react';

class EventHandling extends Component {
  state = {
    username: '',
    msg: '',
  };

  /* constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  } */

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h2>이벤트 핸들링</h2>
        <h3>- 클래스형</h3>
        <input
          type='text'
          name='username'
          placeholder='username'
          value={this.state.username}
          onChange={this.handleChange}
        />

        <input
          type='text'
          name='msg'
          placeholder='msg'
          value={this.state.msg}
          onChange={this.handleChange}
        />

        {/* <button onClick={this.handleClick}>확인</button> */}

        <button
          onClick={() => {
            alert(this.state.username + ': ' + this.state.msg);
            this.setState({
              username: '',
              msg: '',
            });
          }}
        >
          확인
        </button>
      </div>
    );
  }
}

// 2) 함수형

const EventHandling2 = () => {
  // const [username, setUsername] = useState('');
  // const [msg, setMsg] = useState('');
  const [form, setForm] = useState({
    username: '',
    msg: '',
  });
  const { username, msg } = form;
  // const onChangeUsername = e => setUsername(e.target.value);
  // const onChangeMsg = e => setMsg(e.target.value);
  const onChange = e => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ': ' + msg);
    // setUsername('');
    // setMsg('');
    setForm({
      username: '',
      msg: '',
    });
  };
  const onKeyPress = e => {
    if (e.key == 'Enter') onClick();
  };

  return (
    <div>
      <h3>- 함수형</h3>
      <input
        type='text'
        name='username'
        placeholder='username'
        value={username}
        onChange={onChange}
      />

      <input
        type='text'
        name='msg'
        placeholder='msg'
        onChange={onChange}
        value={msg}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export { EventHandling, EventHandling2 };
