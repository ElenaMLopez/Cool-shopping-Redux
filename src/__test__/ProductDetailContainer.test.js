import { render, screen } from '@testing-library/react';
import ProductDetailContainer from '../components/productDetail/ProductDetailContainer';
import { productMock } from './mocks/productsMock';
import { MemoryRouter } from 'react-router-dom';

import { useSelectorMock,useDispatchMock } from './mocks/reactReduxMock';

beforeEach(() => {
  useSelectorMock.mockClear()
  useDispatchMock.mockClear()
})

const locationMock =  {
  detailProps: {
    id: 1
  }
}
const dispatch = jest.fn();

test('Send props to detail component', async () => {
  useSelectorMock.mockReturnValue(productMock)
  useDispatchMock.mockReturnValue(dispatch)

  render(<ProductDetailContainer location={locationMock} />, {wrapper: MemoryRouter});

  const productName = await screen.findByText(/Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops/i)

  expect(productName).toBeInTheDocument();
})