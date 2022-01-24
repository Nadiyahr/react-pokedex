import React from 'react';
// import Select, { MultiValue } from 'react-select';

// interface Props {
//   selectedFilters: MultiValue<ReactSelect<string>>;
//   setSelectedFilters: (filters: MultiValue<ReactSelect<string>>) => void;
//   className: string;
// }

type Props = {
  getAllTypes: () => void;
  allTypes: PokemonType[] | null;
};

export const FindPocemon: React.FC<Props> = (props) => {
  const { getAllTypes, allTypes } = props;

  return (
    <div className="Select">
      <button
        type="button"
        onClick={() => getAllTypes()}
        className="Select_btn"
      >
        Select Types
      </button>
      {allTypes && (
        <ul className="Select_list">
          {allTypes.map(type => (
            <li key={type.name} className="Select_item">{type.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
