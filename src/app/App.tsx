import s from "./mainStyles.module.scss";
import { StatusContextProvider } from "./StatusContextProvider";

export const App = () => {
  return (
    <div className={s.mainPage}>
      <div className={s.mainPageWrapper}>
        <StatusContextProvider />
      </div>
    </div>
  );
};