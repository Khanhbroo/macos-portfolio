import { WindowControls } from "@/components";
import WindowWrapper from "@/hoc/WindowWrapper";
import useWindowStore from "@/store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const { data } = windows.txtfile;

  if (!data) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <div className="flex flex-col items-center flex-1">
          <h2 className="text-sm font-bold text-[#5f6266]">{data.name}</h2>
        </div>
      </div>

      <div className="p-8 h-full overflow-auto bg-white font-roboto">
        {data.subtitle && (
          <h1 className="text-2xl font-bold mb-4">{data.subtitle}</h1>
        )}

        {data.image ? (
          <div className="w-full mb-5">
            <img
              src={data.image}
              alt={data.name}
              className="w-full max-h-80 object-cover rounded"
            />
          </div>
        ) : null}

        <div className="space-y-4">
          {(data.description || []).map((paragraph: string, index: number) => (
            <p key={index} className="text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;
