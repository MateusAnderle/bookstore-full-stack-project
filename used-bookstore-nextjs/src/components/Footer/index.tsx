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
            <Link href={`/categoryList/${"Best sellers"}`}>
              <li>Best sellers</li>
            </Link>
            <Link href={`/categoryList/${"Releases"}`}>
              <li>Releases</li>
            </Link>
            <Link href={`/categoryList/${"Books"}`}>
              <li>Books</li>
            </Link>
            <Link href={`/categoryList/${"Decorations"}`}>
              <li>Decorations</li>
            </Link>
            <Link href={`/categoryList/${"Educational"}`}>
              <li>Educational</li>
            </Link>
            <Link href={`/categoryList/${"CD"}`}>
              <li>CD</li>
            </Link>
            <Link href={`/categoryList/${"DVD"}`}>
              <li>DVD</li>
            </Link>
            <Link href={`/categoryList/${"Magazines"}`}>
              <li>Magazines</li>
            </Link>
          </ul>
        </div>

        <div>
          <h3>Informações</h3>
          <ul>
            <Link href={`/companyInfo/${"FAQ"}`}>
              <li>FAQ</li>
            </Link>
            <Link href={`/companyInfo/${"About"}`}>
              <li>About</li>
            </Link>
            <Link href="/location" style={{ textDecoration: "none" }}>
              <li>Location</li>
            </Link>
            <Link href={`/companyInfo/${"Deliveries and Returns"}`}>
              <li>Deliveries and Returns</li>
            </Link>
            <Link href={`/companyInfo/${"Terms and Conditions"}`}>
              <li>Terms and Conditions</li>
            </Link>
            <Link href={`/companyInfo/${"Cookie Policy"}`}>
              <li>Cookie Policy</li>
            </Link>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li style={{ fontWeight: "bold", fontSize: "20px" }}>
              Phone: (47) 3370-9999
            </li>
            <li>Av. Marechal Deodoro da Fonseca</li>
            <li>Jaraguá do Sul</li>
            <li>CNPJ: 08.999.999/0001-50</li>
            <li>
              <FacebookLogo /> <InstagramLogo /> <TwitterLogo /> <YoutubeLogo />
            </li>
            <li>Made by Mateus Anderle da Silva - 2023.</li>
          </ul>
        </div>
      </FooterMenu>
    </FooterContainer>
  );
}
