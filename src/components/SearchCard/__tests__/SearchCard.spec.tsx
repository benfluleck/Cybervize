import { render, screen } from '@testing-library/react';

import SearchCard from '../SearchCard'


const defaultProps = {
  name: 'Test Name',
  released: '19-08-2024',
  diseases: [
    'disease1', 'disease2'
  ],
  description: 'Test description'
}

describe('SearchCard component', () => {
  it('renders SearchCard component', () => {
    render(<SearchCard {...defaultProps} />);

    expect(screen.getByTestId('search-component')).toBeDefined();
  });

  it('renders SearchCard attributes', () => {
    render(<SearchCard {...defaultProps} />);

    expect(screen.getByText('Test Name')).toBeDefined();
    expect(screen.getByText('19-08-2024')).toBeDefined();
    expect(screen.getByText('disease1,')).toBeDefined();
    expect(screen.getByText('Test description')).toBeDefined();
  });

  it('renders 2 diseases on the card', () => {
    render(<SearchCard {...defaultProps} />);

    expect(screen.getAllByTestId('disease-span-component')).toHaveLength(2);
  })
});
