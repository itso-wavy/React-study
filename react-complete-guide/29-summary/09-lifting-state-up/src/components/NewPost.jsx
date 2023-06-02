// import { useState } from 'react';

import classes from './NewPost.module.css';

function NewPost({ onTextareaChange, onInputChange, post }) {
  // const [enteredBody, setEnteredBody] = useState('');

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea id='body' required rows={3} onChange={onTextareaChange} />
      </p>
      <p>{post['textarea']}</p>
      <p>
        <label htmlFor='name'>Your name</label>
        <input type='text' id='name' required onChange={onInputChange} />
      </p>
    </form>
  );
}

export default NewPost;
