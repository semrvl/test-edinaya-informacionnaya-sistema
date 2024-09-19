import { types, flow, Instance } from 'mobx-state-tree';
import { fetchMeters, deleteMeter } from '../api';
import { Meter } from '../models/Meter';
import { areaStore } from './AreaStore';
import { Area } from '../models/Area';

const MeterStore = types
  .model('MeterStore', {
    meters: types.array(Meter),
    areas: types.array(Area),
    limit: 20,
    offset: 0,
    totalCount: 0,
    nextUrl: types.maybeNull(types.string),
    previousUrl: types.maybeNull(types.string),
    currentPage: 1,
    isLoading: false,
    isDeleting: false,
  })
  .actions((self) => ({
    fetchMeters: flow(function* (page: number) {
      try {
        self.isLoading = true;
        const response = yield fetchMeters(page);
        const data = response.data;

        if (data && Array.isArray(data.results)) {
          const meterPromises = data.results.map((meter: any) => {
            return areaStore.fetchArea(meter.area.id).then(() => {
              const area = areaStore.getArea(meter.area.id);
              const address = area ? `${area.house.address}, ${area.number ? `кв. ${area.number}` : ''}` : '';

              return {
                id: meter.id,
                type: meter._type[0],
                installation_date: meter.installation_date,
                is_automatic: meter.is_automatic,
                initial_values: meter.initial_values[0],
                description: meter.description || '',
                area: { id: meter.area.id },
                address,
              };
            });
          });

          const meters = yield Promise.all(meterPromises);
          self.meters.replace(meters);
          self.totalCount = data.count;
          self.nextUrl = data.next;
          self.previousUrl = data.previous;
        } else {
          console.error('Полученные данные счетчиков не соответствуют ожидаемому формату:', data);
        }
      } catch (error) {
        console.error('Ошибка при получении счетчиков:', error);
      } finally {
        self.isLoading = false;
      }
    }),

    deleteMeter: flow(function* (meterId: string) {
      try {
        yield deleteMeter(meterId);
        self.meters.replace(self.meters.filter((meter) => meter.id !== meterId));
      } catch (error) {
        console.error('Error deleting meter:', error);
      }
    }),

    setPage: flow(function* (page: number) {
      self.currentPage = page;
      yield fetchMeters(page);
    })
  }));

export const meterStore = MeterStore.create({});

export function useMeterStore() {
  return meterStore;
}

export type IMeterStore = Instance<typeof MeterStore>;

