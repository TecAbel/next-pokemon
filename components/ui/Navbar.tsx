import Image from "next/image";
import { FC, useEffect } from "react";
import { ThemeAction } from "../../services/redux/actions/ThemeAction";
import {
  useAppDispatch,
  useAppSelector,
} from "../../services/redux/store/store";

const Navbar: FC = () => {
  const isDark = useAppSelector((state) => state.theme.isDark);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const htmlTag = document.getElementsByTagName("html")[0];
    isDark === true
      ? htmlTag.classList.add("dark")
      : htmlTag.classList.remove("dark");
  }, [isDark]);

  const toggleTheme = () => {
    dispatch(ThemeAction(!isDark));
  };
  return (
    <>
      <nav className="bg-red-500 py-4 px-4 text-white dark:bg-blue-400 md:px-0">
        <div className="container mx-auto flex flex-row items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="aspect-square h-8">
              <Image
                alt="app"
                layout="responsive"
                height={70}
                width={70}
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
              />
            </div>
            <h4 className="flex items-baseline text-xl font-bold">
              <span className="text-2xl">P</span>
              <span>okémon</span>
            </h4>
            <div>Favoritos</div>
          </div>
          <button
            type="button"
            className="
            grid
            aspect-square
            h-[3rem]
            place-content-center
            rounded-xl
            bg-black
            text-white
            dark:bg-yellow-300
            dark:text-black"
            onClick={toggleTheme}
          >
            <span className="material-symbols-rounded">
              {isDark ? "light_mode" : "dark_mode"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
