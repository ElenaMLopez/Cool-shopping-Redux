import { render, screen } from '@testing-library/react';
import ProductsList from '../components/productList/ProductListContainer';
import { productsMock } from './mocks/productsMock';
import { MemoryRouter } from 'react-router-dom';

import { useSelectorMock,useDispatchMock } from './mocks/reactReduxMock';

beforeEach(() => {
  useSelectorMock.mockClear()
  useDispatchMock.mockClear()
})

test('Renders a list of products', async () => {
  useSelectorMock.mockReturnValue(productsMock)
  render(<ProductsList />, {wrapper: MemoryRouter});

  const productName = await screen.findByText(/Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops/i)

  expect(productName).toBeInTheDocument();
})
