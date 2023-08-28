import Image from "next/image";
import Link from "next/link";
import { ProductWrapper } from "../../styles/components/productCard";
import { currencyBRL } from "../../utils/currencyFormatter";
import { BooksProps } from "../BooksList";

interface ProductCardProps {
  data: BooksProps;
}

export default function ProductCard({ data }: ProductCardProps) {
  return (
    <Link
      href={`/productDetails/${data.id}`}
      style={{ textDecoration: "none" }}
      prefetch={false}
    >
      <ProductWrapper>
        <Image
          src={data.image}
          width={150}
          height={200}
          alt=""
          style={{ marginTop: 30, objectFit: "cover" }}
          unoptimized={true}
        />

        <h4>{data.livro}</h4>
        <p>{data.autor}</p>
        <h5>{currencyBRL(data?.preco)}</h5>
      </ProductWrapper>
    </Link>
  );
}
