import { useEffect, useState } from "react";
import { useTasksContext } from "src/contexts";
import { Logo } from "src/components/Logo";
import { handleSetTheme, isThemeSetToDark } from "src/utils";

export function Header() {
  const { clearTasks, tasks } = useTasksContext();
  const [isDarkMode, setIsDarkMode] = useState(isThemeSetToDark());

  const noTasks = tasks.filter(Boolean).length === 0;

  useEffect(() => {
    handleSetTheme(isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((currentDarkMode) => !currentDarkMode);
  };

  return (
    <header className="fixed top-0 flex h-16 w-full items-center justify-center sm:justify-between sm:px-6">
      <Logo />
      <nav className="flex h-full w-72 items-center justify-between xs:w-80 sm:w-96">
        <button
          onClick={toggleDarkMode}
          className="h-10 select-none rounded-2xl px-3 text-base font-medium text-darkerBlack transition duration-100 hover:bg-darkBlack hover:text-lighterWhite hover:ease-in dark:text-lighterWhite dark:hover:bg-lightWhite dark:hover:text-darkBlack xs:text-lg sm:px-4"
        >
          {isDarkMode ? "light" : "dark"} mode
        </button>
        <button
          onClick={clearTasks}
          className={`${
            noTasks
              ? "cursor-not-allowed"
              : "cursor-pointer hover:bg-alertRed hover:text-lighterWhite"
          }  h-10 select-none rounded-2xl px-3 text-base font-medium text-darkerBlack transition duration-100 hover:ease-in dark:text-lightWhite xs:text-lg sm:px-4`}
          disabled={noTasks}
        >
          clear tasks
        </button>
        <a
          href="https://twitter.com/intent/tweet?via=phivedphived&text=happy%20bday%2C%20@sophbt_%21"
          className="mt-2 flex h-10 select-none items-center rounded-2xl px-3 text-center text-base font-medium text-darkerBlack transition duration-100 hover:bg-twitterBlue hover:text-lightWhite hover:ease-in dark:text-lighterWhite dark:hover:bg-twitterBlue xs:mt-3 xs:text-lg sm:mt-0 sm:px-4"
        >
          soph day!
        </a>
        {/* <div className="flex justify-center">
          <button
            disabled
            className="peer h-10 select-none rounded-2xl px-3 text-base font-medium text-darkerBlack transition duration-100 hover:bg-berryBlue hover:ease-in dark:text-lighterWhite dark:hover:bg-purpleRain xs:text-lg sm:px-4"
          >
            help
          </button>
          <span className="absolute top-14 hidden translate-x-1 text-sm peer-hover:block dark:text-lightWhite">
            coming
            <br />
            soon 🚧
          </span>
        </div> part of the playful birthday present, will be reset after 19/04 */}
      </nav>
    </header>
  );
}
