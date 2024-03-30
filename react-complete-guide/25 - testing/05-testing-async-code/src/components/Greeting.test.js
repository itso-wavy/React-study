import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    render(<Greeting />);

    const helloWorldElement = screen.getByText('Hello World', { exact: false }); // get/find/query 함수

    expect(helloWorldElement).toBeInTheDocument(); // not.toBeInTheDocument
  });

  test('renders good to see you if the button was NOT clicked.', () => {
    render(<Greeting />);

    const paragraphElement = screen.getByText(`It's good to see you!`);

    expect(paragraphElement).toBeInTheDocument();
  });

  test('renders Changed! if the button was clicked', () => {
    // 준비
    render(<Greeting />);

    // 실행
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // 단언
    const chanedElement = screen.getByText('Changed!');
    expect(chanedElement).toBeInTheDocument();
  });

  test('does not render', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // const paragraphElement = screen.getByText(`It's good to see you!`, {
    //   exact: false,
    // });
    // expect(paragraphElement).not.toBeInTheDocument();
    const paragraphElement = screen.queryByText(`It's good to see you!`, {
      exact: false,
    });
    expect(paragraphElement).toBeNull();
  });
});
