import useTabs from './hooks/useTabs';

const contents = [
  {
    tab: 'Section 1',
    content: "I'm the section 1",
  },
  {
    tab: 'Section 2',
    content: "I'm the section 2",
  },
];

const App = () => {
  const { tab, onClick } = useTabs(0, contents);
  return (
    <>
      {contents.map((item, index) => (
        <button onClick={() => onClick(index)}>{item.tab}</button>
      ))}
      <div>{tab.content}</div>
    </>
  );
};

export default App;
