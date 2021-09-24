import { render, screen } from '@testing-library/react';
import ProductDetailComponent from '../components/productDetail/ProductDetailComponent';
import { productMock } from './mocks/productsMock';
import { MemoryRouter } from 'react-router-dom';

test('Render a product detail page', async () => {

  render(<ProductDetailComponent product={productMock} />, {wrapper: MemoryRouter});

  const productName = await screen.findByText(/Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops/i)

  expect(productName).toBeInTheDocument();
})
