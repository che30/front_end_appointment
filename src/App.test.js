import React from 'react';
// import { render, screen } from '@testing-library/react';
// import { Route, Routes } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from './App';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

it('renders correctly', () => {
  const tree = renderer
    .create(

      <App />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// test('renders learn react link', () => {
//   render(
//     <Routes >
//    <Route path="/" element={<App />} />
//   </Routes>
//   );
//   const linkElement = screen.getByText(/APPOINTMENT/i);
//   expect(linkElement).toBeInTheDocument();
// });
