import classes from './NewPost.module.css';

function NewPost(props) {
  return (
    <form className={classes.form}>
      <button onClick={props.onClick}>X</button>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea id='body' required rows={3} onChange={props.onBodyChange} />
      </p>
      <p>
        <label htmlFor='name'>Your name</label>
        <input type='text' id='name' required onChange={props.onAuthorChange} />
      </p>
    </form>
  );
}

export default NewPost;
