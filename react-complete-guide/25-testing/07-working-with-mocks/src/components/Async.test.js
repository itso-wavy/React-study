import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    window.fetch = jest.fn(); // mock 함수를 생성해서 fetch 함수 덮어쓰기
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First post' }], // 반환 데이터로 사용할 최소의 데이터
    });
    render(<Async />);

    const listitemElements = await screen.findAllByRole(
      'listitem',
      { exact: false },
      { timeout: 1000 }
    );
    // getAllByRole('listitem');

    expect(listitemElements).not.toHaveLength(0);
  });
});
