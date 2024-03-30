import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders Hello World as a text', () => {
  // 준비
  render(<Greeting />);

  // 실행

  // 단언
  const helloWorldElement = screen.getByText('Hello World', { exact: false }); // get/find/query 함수

  expect(helloWorldElement).toBeInTheDocument(); // not.toBeInTheDocument
});
