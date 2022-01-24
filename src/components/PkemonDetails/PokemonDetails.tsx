import React from 'react';
import { COLOR_TYPES } from '../../api/api';
import './PokemonDetails.scss';

type Props = {
  setClose: (data: Card | null) => void;
  details: Card | null;
};

export const PokemonDetails: React.FC<Props> = (props) => {
  const { details, setClose } = props;

  // eslint-disable-next-line no-console
  console.log(details);

  const textTrasform = (text: string) => {
    if (text.includes('special-')) {
      return text.replace(/special-/, 'SP ');
    }

    if (text === 'hp') {
      return text.toUpperCase();
    }

    return text;
  };

  return (
    <>
      {details && (
        <button
          className="Details"
          onClick={() => setClose(null)}
          type="button"
          key={details.id}
        >
          <div className="Details_container">
            <img
              src={details.sprites.other['official-artwork'].front_default}
              alt={details.name}
            />
          </div>
          <div className="Details_bottom">
            <h2 className="Details_title">
              {`${details.name} #${details.id.toString().padStart(3, '0')}`}
            </h2>
            <ul className="Details_list">
              {details.types.map(type => (
                <li
                  className="Details_item"
                  key={type.type.name}
                >
                  Type
                  <span className="Details_value" style={{ color: COLOR_TYPES[type.type.name] }}>
                    {type.type.name}
                  </span>
                </li>
              ))}
              {details.stats.map(stat => (
                <li key={stat.stat.name} className="Details_item">
                  {textTrasform(stat.stat.name)}
                  <span className="Details_value">
                    {stat.base_stat}
                  </span>
                </li>
              ))}
              <li
                className="Details_item"
                key="weight"
              >
                Weight
                <span className="Details_value">
                  {details.weight}
                </span>
              </li>
              <li
                className="Details_item"
                key="moves"
              >
                Total moves
                <span className="Details_value">
                  {details.moves.length}
                </span>
              </li>
            </ul>
          </div>
        </button>
      )}
    </>
  );
};
