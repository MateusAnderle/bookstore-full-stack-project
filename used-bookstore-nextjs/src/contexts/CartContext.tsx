import {
  useState,
  createContext,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

interface CartContextProviderProps {
  children: ReactNode;
}

interface ProductObjectProps {
  id: string;
  livro: string;
  autor: string;
  ano: number;
  genero: string;
  image: string;
  quantidade: number;
  precoSugerido: number;
  preco: number;
  sinopse: string;
  idioma: string;
  isbn: string;
  fabricante: string;
  dimensoes: string;
  created_at: string;
}

interface TotalCartCheckoutObjectProps {
  numberOfItems?: number;
  totalPriceCart?: number;
}

interface useCartContextProps {
  products: ProductObjectProps[];
  setProducts: Dispatch<SetStateAction<ProductObjectProps[]>>;
  addProductCart: (object: ProductObjectProps) => void;
  removeProductCart: (productId: string) => void;
  addQuantity: (productId: string) => void;
  clearCart: () => void;
  subQuantity: (productId: string) => void;
  totalCartCheckout: TotalCartCheckoutObjectProps;
  setTotalCartCheckout: Dispatch<SetStateAction<TotalCartCheckoutObjectProps>>;
}

export const CartContext = createContext<useCartContextProps>({
  products: [],
  setProducts: () => {
    return;
  },
  addProductCart: () => {
    return;
  },
  removeProductCart: () => {
    return;
  },
  addQuantity: () => {
    return;
  },
  clearCart: () => {
    return;
  },
  subQuantity: () => {
    return;
  },
  totalCartCheckout: {},
  setTotalCartCheckout: () => {
    return;
  },
});

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<ProductObjectProps[]>([]);
  const [totalCartCheckout, setTotalCartCheckout] = useState(
    {} as TotalCartCheckoutObjectProps
  );

  function addProductCart(object: ProductObjectProps) {
    setProducts([...products, object]);
  }

  function removeProductCart(productId: string) {
    const filteredProducts = products.filter((item) => item.id !== productId);
    setProducts(filteredProducts);
  }

  function addQuantity(productId: string) {
    const filteredProducts = products.filter((item) => item.id !== productId);
    const result = products.find((item) => item.id === productId);

    if (!result) return;
    result.quantidade = result.quantidade + 1;

    setProducts([...filteredProducts, result]);
  }

  function subQuantity(productId: string) {
    const filteredProducts = products.filter((item) => item.id !== productId);
    const result = products.find((item) => item.id === productId);

    if (!result) return;
    result.quantidade = result.quantidade - 1;

    if (result.quantidade <= 0) {
      setProducts([...filteredProducts]);
      return;
    }

    setProducts([...filteredProducts, result]);
  }

  function clearCart() {
    setProducts([]);
  }

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        addProductCart,
        removeProductCart,
        addQuantity,
        clearCart,
        subQuantity,
        totalCartCheckout,
        setTotalCartCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
