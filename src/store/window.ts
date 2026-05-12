import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "@/constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type WindowKey = keyof typeof WINDOW_CONFIG;

export interface WindowState {
  windows: Record<
    WindowKey,
    {
      isOpen: boolean;
      zIndex: number;
      data: any;
    }
  >;
  nextZIndex: number;
  focusWindowKey: any;
  openWindow: (windowKey: WindowKey, data?: any) => void;
  closeWindow: (windowKey: WindowKey) => void;
  focusWindow: (windowKey: WindowKey) => void;
}

const useWindowStore = create<WindowState>()(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,
    focusWindowKey: null,

    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];

        if (!win) return;
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
        state.focusWindowKey = windowKey;
      }),
    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];

        if (!win) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;

        // Choose the closest z-index order for focusWindowkey
        if (state.focusWindowKey === windowKey) {
          const remainingWindows = (
            Object.entries(state.windows) as [WindowKey, any][]
          )
            .filter(([key, windowKey]) => windowKey.isOpen && key !== windowKey)
            .sort((a, b) => b[1].zIndex - a[1].zIndex);

          if(remainingWindows && remainingWindows.length > 0) {
            state.focusWindowKey = remainingWindows[0][0];
          }
          else {
            state.focusWindowKey = null;
          }
        }
      }),
    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.zIndex = state.nextZIndex++;
        state.focusWindowKey = windowKey;
      }),
  })),
);

export default useWindowStore;
