import { FooterContainer, FooterMenu } from "../../styles/components/footer";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";
import Link from "next/link";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterMenu>
        <div>
          <h3>Menu</h3>
          <ul>
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
            <Link href={`/categoryList/${"CD"}`}>
              <li>CD</li>
            </Link>
            <Link href={`/categoryList/${"DVD"}`}>
              <li>DVD</li>
            </Link>
            <Link href={`/categoryList/${"Revistas"}`}>
              <li>Revistas</li>
            </Link>
          </ul>
        </div>

        <div>
          <h3>Informações</h3>
          <ul>
            <Link href={`/companyInfo/${"FAQ"}`}>
              <li>FAQ</li>
            </Link>
            <Link href={`/companyInfo/${"Sobre Nós"}`}>
              <li>Sobre Nós</li>
            </Link>
            <Link href="/location" style={{ textDecoration: "none" }}>
              <li>Onde Estamos</li>
            </Link>
            <Link href={`/companyInfo/${"Entregas e Devoluções"}`}>
              <li>Entregas e Devoluções</li>
            </Link>
            <Link href={`/companyInfo/${"Termos e Condições"}`}>
              <li>Termos e Condições</li>
            </Link>
            <Link href={`/companyInfo/${"Política de Cookies"}`}>
              <li>Política de Coockies</li>
            </Link>
          </ul>
        </div>

        <div>
          <h3>Contato</h3>
          <ul>
            <li style={{ fontWeight: "bold", fontSize: "20px" }}>
              Fone: (47) 3370-9999
            </li>
            <li>Av. Marechal Deodoro da Fonseca</li>
            <li>Centro, Jaraguá do Sul</li>
            <li>CNPJ: 08.999.999/0001-50</li>
            <li>
              <FacebookLogo /> <InstagramLogo /> <TwitterLogo /> <YoutubeLogo />
            </li>
            <li>Feito por @matsanderle - 2023.</li>
          </ul>
        </div>
      </FooterMenu>
    </FooterContainer>
  );
}
