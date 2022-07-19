import s from "../../styles/mainStyles.module.scss";
import { useEffect, useState } from "react";
import { isPasswordValid } from "../model/isPasswordValid";
import { PassRetry } from "./PassRetry";

export const PasswordBar = () => {
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isVisited, setIsVisited] = useState(false);
  const isIncorrect = !isValid && isVisited;

  useEffect(() => {
    setIsValid(isPasswordValid(password));
  }, [password]);

  const handleBlur = () => {
    setIsVisited(true);
  };

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
