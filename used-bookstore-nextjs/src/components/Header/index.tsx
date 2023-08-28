import {
  HeaderContainer,
  InputAndIcons,
  LogoWrapper,
  MainHeader,
  NavContainer,
  NavHeader,
  Notification,
} from "../../styles/components/header";
import { Books, User, ShoppingCart } from "phosphor-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/auth";

export default function Header() {
  const { token } = useAuth();
  const { register, handleSubmit, resetField } = useForm<FormProps>();
  const { products } = useContext(CartContext);
  const router = useRouter();

  interface FormProps {
    search: string;
  }

  const onSubmit = async (data: FormProps) => {
    router.push(`/searchList/${data.search}`);
    resetField("search");
  };

  return (
    <HeaderContainer>
      <MainHeader>
        <Link href="/" style={{ textDecoration: "none" }}>
          <LogoWrapper>
            <Books />
            <div>
              <h1>Sebus</h1>
              <span>Livraria de Novos e Usados</span>
            </div>
          </LogoWrapper>
        </Link>

        <InputAndIcons>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Digite o nome do produto que deseja encontrar..."
              {...register("search", { required: true })}
            />

            <input type="submit" value="Buscar" />
          </form>

          {token ? (
            <Link href="/user" style={{ textDecoration: "none" }}>
              <User />
            </Link>
          ) : (
            <Link href="/login" style={{ textDecoration: "none" }}>
              <User />
            </Link>
          )}

          <Link href="/cart" style={{ textDecoration: "none" }}>
            <Notification>
              <ShoppingCart />
              {products.length === 0 ? null : <span>{products.length}</span>}
            </Notification>
          </Link>
        </InputAndIcons>
      </MainHeader>

      <NavContainer>
        <NavHeader>
          <Link href={`/categoryList/${"Mais Vendidos"}`}>
            <li>Mais Vendidos</li>
          </Link>
          <Link href={`/categoryList/${"Lançamentos"}`}>
            <li>Lançamentos</li>
          </Link>
          <Link href={`/categoryList/${"Livros"}`}>
            <li>Livros</li>
          </Link>
          <Link href={`/categoryList/${"Decorações"}`}>
            <li>Decorações</li>
          </Link>
          <Link href={`/categoryList/${"Educativo"}`}>
            <li>Educativo</li>
          </Link>
        </NavHeader>
      </NavContainer>
    </HeaderContainer>
  );
}
