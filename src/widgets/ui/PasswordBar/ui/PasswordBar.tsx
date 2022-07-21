import s from "../../styles/mainStyles.module.scss";
import { useContext, useEffect, useState } from "react";
import { isPasswordValid } from "../model/isPasswordValid";
import { PassRetry } from "./PassRetry";
import { StatusContext } from "../../../../app/StatusContextProvider";

export const PasswordBar = () => {
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isVisited, setIsVisited] = useState(false);
  const isIncorrect = !isValid && isVisited;

  useEffect(() => {
    setIsValid(isPasswordValid(password));
    toggleChangedStatus(true)
  }, [password]);
  
  // empty dependencies effect not to change status in 1st render
  useEffect(() => {
    toggleChangedStatus(false)
  }, []);

  const handleBlur = () => {
    setIsVisited(true);
  };

  const statusContext = useContext(StatusContext)
  const [isChangedStatus, toggleChangedStatus] = [statusContext.isChangedStatus, statusContext.toggleChangedStatus]
  
  return (
    <>
      <div className={s.BarWrap}>
        <div className={s.inputBar}>
          <p>Пароль</p>
          <div className={s.inputWrap}>
            <input
              className={`${s.inputBtn}
								${isIncorrect && s.invalidData}`}
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={handleBlur}
            />
            <p className={`${s.inputError} ${isIncorrect && s.active}`}>
              Используйте не менее 5 символов
            </p>
          </div>
          <p className={s.inputMsg}>
            Ваш новый пароль должен содержать не менее 5 символов.
          </p>
        </div>
        <PassRetry mainPassword={password}/>
      </div>
    </>
  );
};
