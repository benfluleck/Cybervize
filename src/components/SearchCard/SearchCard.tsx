import { Drug } from "@entities/drugs";
import { FC } from "react";

const SearchCard:FC<Drug> = ({ name, released, diseases, description }) => (
  <div data-testid="search-component" className="mt-4">
    <div className="grid grid-cols-1">
      <div className="card cursor-pointer p-6 border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
        <div className="m-3">
          <h2 className="text-2xl font-bold mb-2">
            {name}
            <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">
              {released}
            </span>
          </h2>
          <h3>List of related disease(s) 
            {
              diseases.map((disease, index) => <span data-testid="disease-span-component" className="italic font-bold" key={index}> {disease}, </span> )
            }


          </h3>
          <p className="font-light border border-dashed border-neutral-300 p-4 mt-4 font-mono text-md text-gray-700 hover:text-gray-900 transition-all duration-200">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default SearchCard;
