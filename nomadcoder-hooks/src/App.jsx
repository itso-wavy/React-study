import useTabs from './hooks/useTabs';

const contents = [
  { title: 'tab 1', content: 'content 1' },
  { title: 'tab 2', content: 'content 2' },
];

const App = () => {
  const { tab, selectTab } = useTabs(0, contents);

  return (
    <>
      <ul>
        {contents.map((item, index) => (
          <li>
            <button index={index} onClick={() => selectTab(index)}>
              {item.title}
            </button>
          </li>
        ))}
      </ul>
      <p>{tab.content}</p>
    </>
  );
};

export default App;
