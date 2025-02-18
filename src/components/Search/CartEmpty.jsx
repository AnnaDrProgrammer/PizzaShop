import React from 'react';
import { Link } from 'react-router-dom';
const CartEmpty = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>
          Корзина пустая<icon>🥺</icon>
        </h2>
        <p>
          Возможно, вы еще не заказывали пиццу.
          <br /> Для того, чтобы заказать пиццу, пожалуйста, перейдите на
          главную страницу.
        </p>
        <img src="/CartEmpty2.svg" alt="CartEmpty"></img>
        <Link to="/" className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
