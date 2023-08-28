import Link from "next/link";
import { Container404 } from "../styles/pages/404";

export default function FourOhFour() {
  return (
    <Container404>
      <h2>404 - Página não encontrada</h2>
      <Link href="/">Voltar para a página inicial</Link>
    </Container404>
  );
}
