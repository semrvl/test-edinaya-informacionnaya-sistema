import { Instance, types } from "mobx-state-tree";

export const Meter = types.model('Meter', {
  id: types.string,
  type: types.enumeration('MeterType', ['ColdWaterAreaMeter', 'HotWaterAreaMeter']),
  installation_date: types.string,
  is_automatic: types.maybeNull(types.boolean),
  initial_values: types.number,
  address: types.optional(types.string, ''),
  description: types.optional(types.string, ''),
  area: types.model({
    id: types.string,
  }),
});

export type IMeter = Instance<typeof Meter>;
