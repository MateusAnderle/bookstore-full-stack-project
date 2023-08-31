import Link from "next/link";
import { Container404 } from "../styles/pages/404";

export default function FourOhFour() {
  return (
    <Container404>
      <h2>404 - Not found</h2>
      <Link href="/">Return to homepage</Link>
    </Container404>
  );
}
