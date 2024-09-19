import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useMeterStore } from '../../stores/MeterStore';
import { MeterInfo } from '../MeterInfo';
import { Pagination } from '../Pagination';
import {
  MeterListBody,
  MeterListContainer,
  MeterListHeader,
  Spinner
} from './MeterList.styled';

const MeterList = observer(() => {
  const meterStore = useMeterStore();

  useEffect(() => {
    meterStore.fetchMeters(1);
  }, []);

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
