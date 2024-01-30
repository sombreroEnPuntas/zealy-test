import { fireEvent, getByPlaceholderText, getByText, render, screen } from '@testing-library/react'
import Page from '../app/page'

describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
  })

  it('adds a comment', () => {
    render(<Page />)

    const main = screen.getByTestId('main');
    const event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    });

    Object.defineProperty(event, 'offsetX', { value: 401 });
    Object.defineProperty(event, 'offsetY', { value: 402 });

    fireEvent(main, event);

    const inputElement = screen.getByPlaceholderText(/Enter your comment/i);
    expect(inputElement).toBeInTheDocument();


    fireEvent.change(inputElement, { target: { value: 'Test Comment' } });

    const saveButton = screen.getByText(/Save Comment/i)
    fireEvent.click(saveButton)

    const firstCommentElement = screen.getByText(/Test Comment/i);
    expect(firstCommentElement).toBeInTheDocument();
  })
})
