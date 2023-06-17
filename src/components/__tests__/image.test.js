import React from 'react';
import { render, screen } from '@testing-library/react';
import Cards from '../Cards';

describe('Check image rendering', () => {
  it('Should render images correctly', () => {
    render(<Cards />);

    const imageElements = screen.getAllByRole('img');
    const imageSources = [
      '../assets/images/img-1.jpg',
      '../assets/images/img-2.jpg',
      '../assets/images/img-3.jpg',
      '../assets/images/img-4.jpg',
      '../assets/images/img-5.jpg',
      '../assets/images/img-6.jpg',
    ];

    expect(imageElements.length).toBe(imageSources.length);

    imageElements.forEach((element, index) => {
      expect(element).toHaveAttribute('src', imageSources[index]);
    });
  });
});
