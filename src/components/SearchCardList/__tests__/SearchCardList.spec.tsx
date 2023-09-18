import { render, screen } from '@testing-library/react';

import SearchCardList from '../SearchCardList';

const defaultProps = [
  {
    id: '1',
    name: 'Test Name',
    released: '19-08-2024',
    diseases: ['disease1', 'disease2'],
    description: 'Test description'
  },
  {
    id: '2',
    name: 'Test Name2',
    released: '19-09-2024',
    diseases: ['disease2', 'disease3'],
    description: 'Test description2'
  },
  {
    id: '3',
    name: 'Test Name3',
    released: '19-10-2024',
    diseases: ['disease2', 'disease4'],
    description: 'Test description3'
  }
];


describe('SearchCard component', () => { 
  it('renders 3 SearchCards component', () => {
    render(<SearchCardList drugs={defaultProps} />);

    expect(screen.getAllByTestId('search-component')).toHaveLength(3);
  });

  it('renders a paragraph showing 3 results', () => {
    render(<SearchCardList drugs={defaultProps} />);

    expect(screen.getByText('Showing 3 results')).toBeDefined();

  })

})
