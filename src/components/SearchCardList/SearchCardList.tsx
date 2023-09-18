import { FC } from 'react';
import { Drug } from '@entities/drugs';
import SearchCard from '@components/SearchCard/SearchCard';

interface SearchCardDrops {
  drugs?: Drug[];
}

const SearchCardList: FC<SearchCardDrops> = ({ drugs = [] }) => (
  <>
    <p className="self-start mt-12">Showing {drugs.length} results</p>
    <div className="w-full flex flex-col">
      {drugs.map((drug) => (
        <SearchCard
          key={drug.id}
          id={drug.id}
          name={drug.name}
          released={drug.released}
          description={drug.description}
          diseases={drug.diseases}
        />
      ))}
    </div>
  </>
);

export default SearchCardList;
