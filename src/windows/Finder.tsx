import useLocationStore from "@/store/location";
import type { FileType } from "@/types";

import { WindowControls } from "@/components";
import { locations } from "@/constants";
import WindowWrapper from "@/hoc/WindowWrapper";
import clsx from "clsx";
import { SearchIcon } from "lucide-react";
import useWindowStore from "@/store/window";

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const openItem = (item: FileType) => {
    if (item.fileType === "pdf") {
      return openWindow("resume");
    } else if (item.kind === "folder") {
      return setActiveLocation(item);
    } else if(item.fileType === "url" && item.href) {
      return window.open(item.href, "_blank")
    }
  };

  const renderList = (title: string, items: FileType[]) => (
    <div>
      <h3>{title}</h3>
      <ul>
        {items.map((item: FileType) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
              item.id === activeLocation.id ? "active" : "not-active",
            )}
          >
            <img src={item.icon} alt={item.name} className="w-4" />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <SearchIcon className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          {renderList("Favorites", Object.values(locations))}
          {renderList("Work", locations.work.children as FileType[])}
        </div>
        <ul className="content">
          {activeLocation?.children.map((item: FileType) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => openItem(item)}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
