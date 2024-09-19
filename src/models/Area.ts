import { Instance, types } from 'mobx-state-tree';

export const Area = types.model('Area', {
  id: types.string,
  street: types.string,
  house: types.string,
  flat: types.string,
});

export type IArea = Instance<typeof Area>;
