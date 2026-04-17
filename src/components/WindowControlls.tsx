import useWindowStore, { type WindowKey } from "@/store/window";

const WindowControlls = ({ target }: { target: WindowKey }) => {
  const { closeWindow } = useWindowStore();

  return <div id="window-controls">
    <div className="close" onClick={() => closeWindow(target)} />
    <div className="minimize" />
    <div className="maximize" />
  </div>;
};

export default WindowControlls;
