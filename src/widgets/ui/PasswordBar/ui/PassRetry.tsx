import s from "./passwordBar.module.scss";
import { useEffect, useState } from "react";
import { isSamePass } from '../model/isSamePass'

type Prop = {
  mainPassword: string
}

export const PassRetry = ({mainPassword}: Prop) => {
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isVisited, setIsVisited] = useState(false);
  const isIncorrect = !isValid && isVisited;

  useEffect(() => {
    setIsValid(isSamePass(mainPassword, password))
  }, [password]);

  const handleBlur = () => {
    setIsVisited(true);
  };

  return (
    <>
      <div className={s.passBar}>
        <p>Пароль еще раз</p>
        <div className={s.inputWrap}>
          <input
            className={`${s.passInput}
								${isIncorrect && s.invalidPass}`}
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={handleBlur}
          />
          <p className={`${s.inputError} ${isIncorrect && s.active}`}>
            Пароли не совпадают
          </p>
        </div>
        <p className={s.passMsg}>
          Повторите пароль, пожалуйста, это обезопасит вас с нами на случай
          ошибки.
        </p>
      </div>
    </>
  );
};
