import { useCart } from "../componentes/CartContext";
import styles from "./Carrinho.module.css";

function Carrinho() {
  function concludePurchase() {
    if (cart.changeQuantity > 0) {
      console.log("Compra concluída com sucesso!");
    } else {
      console.log("Carrinho vazio.");
    }
  }

  // função para usar o carrinho
  const cart = useCart();

  // função para remover itens do carrinho
  const remove = id => () => {
    cart.removeFromCart(id);
  };

  // função para mudar a quantidade itens do carrinho
  const changeQuantity = id => evt => {
    cart.changeQuantity(id, Number(evt.target.value));
  };
  return (
    <div className={styles.app}>
      <h1 className={styles.carrinho}>Carrinho</h1>

      <div className={styles.container}>
        <div className={styles.infosProduto}>
          <h3>Produto</h3>
          <h3>Preço unitário</h3>
          <h3>Quantidade</h3>
          <h3>Preço total</h3>
        </div>
        {Object.keys(cart.cart).map(key => {
          const { product, quantity } = cart.cart[key];
          return (
            //dados do produto que está no carrinho
            <section
              className={styles.containerProduto}
              key={key}
            >
              <div className={styles.nomeProduto}>
                <p>{product.name}</p>
                <button
                  className={styles.btnRemover}
                  type="submit"
                  onClick={remove(key)}
                >
                  <small>Remover item</small>
                </button>
              </div>

              <div className={styles.precoProduto}>
                <p>R${product.valor}</p>
              </div>

              <div className={styles.qtdProduto}>
                <input
                  type="number"
                  min="1"
                  defaultValue={quantity}
                  onBlur={changeQuantity(key)}
                />
              </div>

              <div className={styles.totalProduto}>
                <p>R${parseFloat((product.valor * quantity).toFixed(2))}</p>
              </div>
            </section>
          );
        })}
        <div className={styles.emptyCart}></div>
      </div>

      <button
        className={styles.btnComprar}
        onClick={concludePurchase}
      >
        Finalizar Compra
      </button>
    </div>
  );
}

export default Carrinho;
