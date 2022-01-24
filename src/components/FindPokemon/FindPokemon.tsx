import React, { useEffect, useState } from 'react';
import { COLOR_TYPES } from '../../api/consts';
import { requestTypes } from '../../api/pocemon';
import './FindPokemon.scss';

type Props = {
  getIndex: (index: number, name: string) => void;
};

export const FindPocemon: React.FC<Props> = (props) => {
  const { getIndex } = props;
  const [types, setTypes] = useState<PokemonType[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const loadTypes = async () => {
    const listOfTypes = await requestTypes();

    setTypes(listOfTypes.results);
  };

  const getTypes = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    loadTypes();
  }, []);

  return (
    <div className="Select">
      <button
        type="button"
        onClick={getTypes}
        className="Select_btn"
      >
        Select Types
        <span className="Select_span">&#9660;</span>
      </button>
      <div className="Select_container">
        {isOpen && types && (
          <ul className="Select_list">
            <button
              key="zero"
              type="button"
              className="Select_item"
              onClick={() => {
                getTypes();
                getIndex(0, '');
              }}
            >
              <li
                key="liZero"
                style={{ color: '#000' }}
              >
                0 all
              </li>
            </button>
            {types.map((type, index) => (
              <button
                key={type.name}
                type="button"
                className="Select_item"
                style={{ backgroundColor: COLOR_TYPES[type.name] }}
                onClick={() => {
                  getTypes();
                  getIndex(index, type.name);
                }}
              >
                <li
                  key={type.name}
                  className="Select_item--li"
                >
                  {`${index + 1} ${type.name}`}
                </li>
              </button>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
