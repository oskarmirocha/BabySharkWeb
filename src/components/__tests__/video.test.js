import React from 'react';
import { render, screen } from '@testing-library/react';
import SharkSection from '../SharkSection';

describe('Check video background', () => {
  it('Should render video element with correct attributes', () => {
    render(<SharkSection />);
    const videoElement = screen.getByRole('video');

    expect(videoElement).toBeInTheDocument();
    expect(videoElement.src).toContain('babyshark.mp4');
    expect(videoElement.autoplay).toBe(true);
    expect(videoElement.loop).toBe(true);
    expect(videoElement.muted).toBe(true);
  });
});

