import {
  Paragraph,
  ProductWrapperList,
  SectionContainer,
} from "../../styles/components/bookList";
import ProductCard from "../ProductCard";

export interface BooksProps {
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

interface BookListProps {
  title: string;
  bookData: BooksProps[];
}

export default function BooksList({ title, bookData }: BookListProps) {
  const titleFiltered = title || "Nenhum livro encontrado...";

  return (
    <SectionContainer>
      <h2>{titleFiltered}</h2>

      {bookData?.length > 0 ? (
        <>
          <ProductWrapperList>
            {bookData?.map((book) => {
              return <ProductCard key={book.id} data={book} />;
            })}
          </ProductWrapperList>
        </>
      ) : (
        <Paragraph>Tente novamente ou procure em outra página</Paragraph>
      )}
    </SectionContainer>
  );
}
