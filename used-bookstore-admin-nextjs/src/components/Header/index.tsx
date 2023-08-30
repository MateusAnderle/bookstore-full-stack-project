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
              <span>Used bookstore</span>
            </div>
          </LogoWrapper>
        </Link>

        <Icons>
          <AdminDescription>Administrative panel</AdminDescription>
        </Icons>
      </MainHeader>

      <NavContainer>
        <NavHeader>
          <Link href={"/"}>
            <li>Search products</li>
          </Link>
          <Link href={"/productRegistration"}>
            <li>Add new product</li>
          </Link>
        </NavHeader>
      </NavContainer>
    </HeaderContainer>
  );
}
