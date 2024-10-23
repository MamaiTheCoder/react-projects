import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

test('The NavBar component should render', () => {
  const view = render(<NavBar title='Test application' />);
  // test the structure of the component by creating a snapshot from this render
  // and comparing it to the actual component every time this test is run
  expect(view).toMatchSnapshot();

  const title = 'Test application';
  render(<NavBar title={title} />);
  expect(screen.getByRole('heading')).toHaveTextContent(title);
});