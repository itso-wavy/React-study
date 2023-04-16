import useNotification from './hooks/useNotification';

const App = () => {
  const triggerNoti = useNotification('One day, browser says...', {
    body: 'pay more attention to me!',
    icon: 'https://cdn.dribbble.com/users/2424774/screenshots/16962879/media/d0bd0d738aa6d19fc94bcd06866abe3c.png?compress=1&resize=400x300&vertical=top',
    image:
      'https://community.atlassian.com/t5/image/serverpage/image-id/86517i80EA08F2F52FCB3C/image-dimensions/571x321?v=v2',
  });

  return (
    <>
      <button onClick={triggerNoti}>Hello</button>
    </>
  );
};

export default App;
