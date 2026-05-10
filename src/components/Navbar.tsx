import dayjs from "dayjs";
import { navIcons, navLinks, WINDOW_CONFIG } from "@/constants";
import useWindowStore from "@/store/window";

export type WindowKey = keyof typeof WINDOW_CONFIG;

const Navbar = () => {
  const { openWindow } = useWindowStore();

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="Logo" />
        <p className="font-bold">Khanh's Portfolio</p>

        <ul>
          {navLinks.map((item) => (
            <li
              key={item.id}
              onClick={() => openWindow(item.type as WindowKey)}
            >
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map((icon) => (
            <li key={icon.id}>
              <img src={icon.img} alt={`id-${icon.id}`} />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
