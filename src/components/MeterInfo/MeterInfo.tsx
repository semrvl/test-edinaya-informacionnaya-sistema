import React from 'react';
import { observer } from 'mobx-react-lite';
import { IMeter } from '../../models/Meter';
import { useMeterStore } from '../../stores/MeterStore';
import deleteIcon from '../../assets/images/delete.png';
import hotIcon from '../../assets/images/hot.png';
import coldIcon from '../../assets/images/cold.png';
import { WaterTypeIcon, MeterInfoContainer, DeleteButton } from './MeterInfo.styled';
import { toast } from 'react-toastify';



interface MeterInfoProps {
  meter: IMeter;
  index: number;
}

const MeterInfo = observer(({ meter, index }: MeterInfoProps) => {
  const meterStore = useMeterStore();

  const number = ((meterStore.currentPage - 1) * meterStore.limit) + index;

  const handleDelete = async () => {
    await meterStore.deleteMeter(meter.id);
    await meterStore.fetchMeters(meterStore.currentPage);
    toast.success(`Счетчик ${meter.id} удален`);
  };

  const waterTypeWithIcon = (
    <WaterTypeIcon>
      {meter.type === 'ColdWaterAreaMeter' ? <img src={coldIcon} alt="ХВС" /> : <img src={hotIcon} alt="ГВС" />}
      {meter.type === 'ColdWaterAreaMeter' ? 'ХВС' : 'ГВС'}
    </WaterTypeIcon>
  );

  return (
    <MeterInfoContainer>
      <div>{number}</div>
      <div>{waterTypeWithIcon}</div>
      <div>{new Date(meter.installation_date).toLocaleDateString('ru-RU')}</div>
      <div>{meter.is_automatic ? 'Да' : 'Нет'}</div>
      <div>{meter.initial_values}</div>
      <div>{meter.address}</div>
      <div>{meter.description}</div>
      <DeleteButton onClick={handleDelete}>
        <img src={deleteIcon} alt="Удалить" />
      </DeleteButton>
    </MeterInfoContainer>
  );
});

export default MeterInfo;

