/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { requestInfo } from '../../api/pocemon';
import './PokemonCard.scss';

type Props = {
  key: string;
  pokemon: Pokemon;
};

export const PokemonCard: React.FC<Props> = (props) => {
  const { pokemon, key } = props;
  const [card, setCard] = useState<Card | null>(null);

  const preparedCard = async () => {
    const info = await requestInfo(pokemon.name);

    setCard(info);
  };

  useEffect(() => {
    preparedCard();
  }, []);

  return (
    <li key={key}>
      {card && (
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
              {card.types.map(item => (item.type.name !== 'bug' ? (
                <button
                  key={item.type.name}
                  type="button"
                  className="Card_btn"
                >
                  {item.type.name}
                </button>
              ) : null))}
            </div>
          </div>
        </div>
      )}
    </li>
  );
};
