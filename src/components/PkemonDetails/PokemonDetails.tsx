import React from 'react';

type Props = {
  setClose: (data: Card | null) => void;
  details: Card | null;
};

export const PokemonDetails: React.FC<Props> = (props) => {
  const { details, setClose } = props;

  return (
    <>
      {details && (
        <button
          className="Details"
          onClick={() => setClose(null)}
          type="button"
          key={details?.id}
        >
          <div className="Details_container">
            <img
              src={details.sprites.other['official-artwork'].front_default}
              alt={details?.name}
            />
          </div>
          <div className="Details_bottom">
            <h2 className="Details_title">
              {details?.name}
            </h2>
            <ul className="Details_list">
              {details?.stats.map(stat => (
                <li key={stat.stat.name} className="Details_item">
                  {stat.stat.name}
                  <span className="details_value">
                    {stat.base_stat}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </button>
      )}
    </>
  );
};
