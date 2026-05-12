import { WindowControls } from "@/components";
import WindowWrapper from "@/hoc/WindowWrapper";
import useWindowStore from "@/store/window";

const Image = () => {
  const { windows } = useWindowStore();
  const { data } = windows.imgfile;

  if (!data) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <div className="flex flex-col items-center flex-1">
          <h2 className="text-sm font-bold text-[#5f6266]">{data.name}</h2>
        </div>
      </div>

      <div className="flex items-center justify-center h-full bg-[#f6f6f6] p-4">
        <img
          src={data.imageUrl}
          alt={data.name}
          className="max-w-full max-h-full object-contain shadow-xl rounded-sm"
        />
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");
export default ImageWindow;
