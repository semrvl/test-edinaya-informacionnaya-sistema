import { types, flow, Instance } from 'mobx-state-tree';
import { fetchArea } from '../api';

const AreaModel = types.model('AreaModel', {
  id: types.string,
  str_number_full: types.string,
  str_number: types.string,
  number: types.number,
  house: types.model('House', {
    address: types.string,
    fias_addrobjs: types.array(types.string),
    id: types.string,
  }),
});

const AreaStore = types
  .model('AreaStore', {
    areas: types.map(AreaModel),
  })
  .actions((self) => ({
    fetchArea: flow(function* (areaId: string) {
      if (!self.areas.has(areaId)) {
        try {
          const areaData = yield fetchArea(areaId);

          const area = AreaModel.create({...areaData.data.results[0], id: areaData.data.results[0].id});
          
          self.areas.set(areaId, area);
        } catch (error) {
          console.error('Ошибка при получении данных области:', error);
        } 
      }
    }),
    getArea(areaId: string) {
      return self.areas.get(areaId);
    },
  }));

export const areaStore = AreaStore.create({});

export function useAreaStore() {
  return areaStore;
}

export type IAreaStore = Instance<typeof AreaStore>;
