import { FC, useState, useMemo, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { useSearchParams } from 'react-router-dom';

import SearchBox from '@components/SearchBox/SearchBox';
import logo from '@assets/images/Logo.png';
import SearchCardList from '@components/SearchCardList/SearchCardList';
import data from '@mocks/data';
import { Drug } from '@entities/drugs';
import { handleDrugFilterByParameters } from '@utils/drugs';

const HomePage: FC = () => {
  const [filteredDrugs, setFilteredDrugs] = useState<Drug[] | []>([]);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, []);

  const handleSearchFilter = (value: string) => {

    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
    setFilteredDrugs(() => handleDrugFilterByParameters(value, data));
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(handleSearchFilter, 300),
    [filteredDrugs.length, searchParams]
  );

  return (
    <div className="bg-white flex flex-col justify-center items-center px-4 md:px-16 sm:px-4 lg:px-72">
      <img src={logo} className="md:self-start" />
      <SearchBox
        searchValue={searchParams.get('search')}
        handleFormChange={debouncedChangeHandler}
      />
      {Boolean(filteredDrugs.length) && <SearchCardList drugs={filteredDrugs} />}
    </div>
  );
};

export default HomePage;
