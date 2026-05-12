import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { locations } from "@/constants";
import type { FileType } from "@/types";

interface LocationState {
  activeLocation: FileType;
  setActiveLocation: (location: FileType) => void;
  resetActiveLocation: () => void;
}

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create<LocationState>()(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location) =>
      set((state) => {
        state.activeLocation = location;
      }),

    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  })),
);

export default useLocationStore;
