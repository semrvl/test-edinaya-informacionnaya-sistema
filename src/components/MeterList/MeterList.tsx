import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useMeterStore } from '../../stores/MeterStore';
import { MeterInfo } from '../MeterInfo';
import { Pagination } from '../Pagination';
import {
  // PaginationButton,
  // Dots,
  // PaginationContainer,
  MeterListBody,
  MeterListContainer,
  MeterListHeader,
  Spinner
} from './MeterList.styled';

const MeterList = observer(() => {
  const meterStore = useMeterStore();
  // const pagesToShow = 5;

  useEffect(() => {
    meterStore.fetchMeters(1);
  }, []);

  // const handlePageChange = (pageNumber: number, currentPage: number) => {
  //   if(pageNumber === currentPage) return;
  //   meterStore.setPage(pageNumber);
  //   meterStore.fetchMeters(pageNumber);
  // };

  // const renderPagination = () => {
  //   const totalPages = Math.ceil(meterStore.totalCount / meterStore.limit);
  //   const currentPage = meterStore.currentPage;

  //   const pagination = [];
  //   let startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  //   const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  //   if (endPage - startPage < pagesToShow - 1) {
  //     startPage = Math.max(1, endPage - pagesToShow + 1);
  //   }

  //   if (startPage > 1) {
  //     pagination.push(
  //       <PaginationButton key={1} active={currentPage === 1} onClick={() => handlePageChange(1, currentPage)}>
  //         1
  //       </PaginationButton>
  //     );
  //     if (startPage > 2) {
  //       pagination.push(<Dots key="dots-start">...</Dots>);
  //     }
  //   }

  //   for (let i = startPage; i <= endPage; i++) {
  //     pagination.push(
  //       <PaginationButton
  //         key={i}
  //         active={currentPage === i}
  //         onClick={() => handlePageChange(i, currentPage)}
  //       >
  //         {i}
  //       </PaginationButton>
  //     );
  //   }

  //   if (endPage < totalPages) {
  //     if (endPage < totalPages - 1) {
  //       pagination.push(<Dots key="dots-end">...</Dots>);
  //     }
  //     pagination.push(
  //       <PaginationButton
  //         key={totalPages}
  //         active={currentPage === totalPages}
  //         onClick={() => handlePageChange(totalPages, currentPage)}
  //       >
  //         {totalPages}
  //       </PaginationButton>
  //     );
  //   }

  //   return pagination;
  // };

  return (
    <MeterListContainer>
      <MeterListHeader>
        <div>№</div>
        <div>Тип</div>
        <div>Дата установки</div>
        <div>Автоматический</div>
        <div>Значение</div>
        <div>Адрес</div>
        <div>Примечание</div>
        <div></div>
      </MeterListHeader>
      {meterStore.isLoading ? (
        <Spinner />
      ) : (
        <>
          <MeterListBody>
            {meterStore.meters.map((meter, index) => (
              <MeterInfo key={meter.id} meter={meter} index={index + 1} />
            ))}
          </MeterListBody>
          <Pagination />

        </>
      )}
    </MeterListContainer>

  );
});

export default MeterList;
