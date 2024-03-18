import type { BaseStorage } from '@src/shared/storages/base';
import { createStorage, StorageType } from '@src/shared/storages/base';

type ComponentsInfo = {
  components: number;
  systems: number;
  refresh: number;
};

type ThemeStorage = BaseStorage<ComponentsInfo> & {
  setStorage: (value: ComponentsInfo) => void;
  refreshItems: (refresh: number) => void;
};

const storage = createStorage<ComponentsInfo>(
  'components-info',
  {
    systems: 0,
    components: 0,
    refresh: 0,
  },
  {
    storageType: StorageType.Local,
  },
);

const componentsInfoStorage: ThemeStorage = {
  ...storage,
  setStorage: ({ systems, components, refresh }) => {
    storage.set((value) => {
      return {
        ...value,
        refresh,
        systems,
        components,
      };
    });
  },
  refreshItems: (refresh) => {
    storage.set((prev) => {
      return { ...prev, refresh: refresh };
    });
  },
};

export default componentsInfoStorage;
