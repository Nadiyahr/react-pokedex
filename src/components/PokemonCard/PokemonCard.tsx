/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { COLOR_TYPES } from '../../api/api';
import { requestInfo } from '../../api/pocemon';
import './PokemonCard.scss';

type Props = {
  pokemon: Pokemon;
};

export const PokemonCard: React.FC<Props> = (props) => {
  const { pokemon } = props;
  const [card, setCard] = useState<Card | null>(null);

  const preparedCard = async () => {
    const info = await requestInfo(pokemon.name);

    setCard(info);

    console.log(info);
  };

  useEffect(() => {
    preparedCard();
  }, []);

  return (
    <>
      {card && (
        <li key={card.id}>
          <div className="Card">
            <div className="Card_div">
              <img
                src={card.sprites.other['official-artwork'].front_default}
                alt={card.name}
                className="Card_img"
              />
            </div>
            <div className="Card_bottom">
              <h2 className="Card_title">{card.name}</h2>
              <div className="Card_buttons">
                {card.types.map(item => (
                  <div
                    key={item.type.name}
                    className="Card_types"
                    style={{ backgroundColor: COLOR_TYPES[item.type.name] }}
                  >
                    {item.type.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </li>
      )}
    </>
  );
};
