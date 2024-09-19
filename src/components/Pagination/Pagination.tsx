import {  useMeterStore } from "../../stores/MeterStore";
import { PaginationButton, Dots, PaginationContainer } from "./Pagination.styled";

const Pagination = () => {
  const meterStore = useMeterStore();
  const pagesToShow = 5;

  const handlePageChange = (pageNumber: number, currentPage: number) => {
    if (pageNumber === currentPage) return;
    meterStore.setPage(pageNumber);
    meterStore.fetchMeters(pageNumber);
  };

  const totalPages = Math.ceil(meterStore.totalCount / meterStore.limit);
  const currentPage = meterStore.currentPage;

  const pagination = [];
  let startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  if (endPage - startPage < pagesToShow - 1) {
    startPage = Math.max(1, endPage - pagesToShow + 1);
  }

  if (startPage > 1) {
    pagination.push(
      <PaginationButton key={1} active={currentPage === 1} onClick={() => handlePageChange(1, currentPage)}>
        1
      </PaginationButton>
    );
    if (startPage > 2) {
      pagination.push(<Dots key="dots-start">...</Dots>);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pagination.push(
      <PaginationButton
        key={i}
        active={currentPage === i}
        onClick={() => handlePageChange(i, currentPage)}
      >
        {i}
      </PaginationButton>
    );
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      pagination.push(<Dots key="dots-end">...</Dots>);
    }
    pagination.push(
      <PaginationButton
        key={totalPages}
        active={currentPage === totalPages}
        onClick={() => handlePageChange(totalPages, currentPage)}
      >
        {totalPages}
      </PaginationButton>
    );
  }

  return <PaginationContainer>{pagination}</PaginationContainer>;
}

export default Pagination
  

