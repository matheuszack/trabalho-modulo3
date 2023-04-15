import React, { useState, useContext, useEffect } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  // função para colocar as informações do local storage no carrinho assim que a página for carregada
  useEffect(() => {
    const cartLocal = window.localStorage.getItem("cart");
    if (cartLocal) {
      setCart(JSON.parse(cartLocal));
    }
  }, []);

  // função para adicionar itens ao carrinho
  const addToCart = product => {
    setCart(old => {
      let quantity = 0;

      if (old[product.id]) {
        quantity = old[product.id].quantity;
      }

      const newCart = {
        ...old,
        [product.id]: {
          quantity: quantity + 1,
          product,
        },
      };
      // colocar os itens do carrinho no local storage
      window.localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  // função para remover itens do carrinho
  const removeFromCart = productId => {
    setCart(old => {
      const newCart = {};

      Object.keys(old).forEach(id => {
        if (id !== productId) {
          newCart[id] = old[id];
        }
      });

      // tirar os itens do carrinho no local storage
      window.localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  // função para mudar a quantidade de itens do carrinho
  const changeQuantity = (productId, newQuantity) => {
    setCart(old => {
      const newCart = {};

      Object.keys(old).forEach(id => {
        const newProduct = { ...old[id] };
        if (id === productId) {
          newProduct.quantity = newQuantity;
        }
        newCart[id] = newProduct;
      });

      // mudar a quantidade de itens do carrinho no local storage
      window.localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  return (
    // envelopamento para todas as páginas conseguirem usar o carrinho
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, changeQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

// função para usar o carrinho em outras páginas
export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};
