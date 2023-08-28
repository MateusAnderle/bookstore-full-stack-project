import {
  HeaderContainer,
  Icons,
  LogoWrapper,
  MainHeader,
  NavContainer,
  NavHeader,
  AdminDescription,
} from "../../styles/components/header";
import { Books } from "phosphor-react";
import Link from "next/link";

export default function Header() {
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

        <Icons>
          <AdminDescription>Painel administrativo</AdminDescription>
        </Icons>
      </MainHeader>

      <NavContainer>
        <NavHeader>
          <Link href={"/"}>
            <li>Consulta de produtos</li>
          </Link>
          <Link href={"/productRegistration"}>
            <li>Cadastrar novo produto</li>
          </Link>
        </NavHeader>
      </NavContainer>
    </HeaderContainer>
  );
}
