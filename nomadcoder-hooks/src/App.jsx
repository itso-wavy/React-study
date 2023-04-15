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
  const { section, changeItem } = useTabs(0, contents);
  return (
    <>
      {contents.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{section.content}</div>
    </>
  );
};

export default App;
