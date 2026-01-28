import React from 'react';
import { useDispatch, UseDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/favorites/slice';
import { selectIsFavorite } from '../../redux/favorites/selectors';
import { Pizza } from '../../redux/pizza/types';
import styles from './FavoriteButton.module.scss';

type FavoriteButtonProps = {
  pizza: Pizza;
};

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ pizza }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavorite(pizza.id));

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (isFavorite) {
      dispatch(removeFromFavorites(pizza.id));
    } else {
      dispatch(addToFavorites(pizza));
    }
  };

  return (
    <>
      <svg
        onClick={handleToggleFavorite}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={isFavorite ? 'red' : 'white'}
        stroke={isFavorite ? '#ff6b6b' : '#ccc'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    </>
  );
};

export default FavoriteButton;
