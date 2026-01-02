import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import PublicBlogsList from '../PublicBlogsList';
import axios from 'axios';
import { awsUrlDevAll } from '../../config';

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: jest.fn()
  }
}));

describe('PublicBlogsList', () => {
    beforeEach(() => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    test('renders blog list with cards', async () => {
  axios.get.mockResolvedValue({ data: [{ id: 1, title: 'Test Blog', post: 'Test content' }] });
  render(
    <BrowserRouter>
      <PublicBlogsList />
    </BrowserRouter>
  );
  await waitFor(() => expect(screen.getByText('Test Blog')).toBeInTheDocument());
  expect(axios.get).toHaveBeenCalledWith(`${awsUrlDevAll}/dev/posts`);
  // Add assertions for Bootstrap classes initially, then update post-refactor
});
});