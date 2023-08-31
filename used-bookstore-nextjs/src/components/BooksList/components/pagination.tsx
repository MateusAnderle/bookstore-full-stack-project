import {
  NextPrev,
  PageContainer,
  PageCounter,
} from "../../../styles/components/pagination";

interface PaginationProps {
  pageNumber: number;
  previousClick: () => void;
  nextClick: () => void;
}

export default function Pagination({
  pageNumber = 0,
  previousClick,
  nextClick,
}: PaginationProps) {
  return (
    <PageContainer>
      <NextPrev variant="prev" onClick={previousClick}>
        «
      </NextPrev>
      <PageCounter>Page {pageNumber}</PageCounter>
      <NextPrev variant="next" onClick={nextClick}>
        »
      </NextPrev>
    </PageContainer>
  );
}
