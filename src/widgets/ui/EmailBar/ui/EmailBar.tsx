import s from "../../styles/mainStyles.module.scss";
import { useEffect, useState } from "react";
import { isEmailValid } from "../model/isEmailValid";

export const EmailBar = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isVisited, setIsVisited] = useState(false);
  const isIncorrect = !isValid && isVisited;

  useEffect(() => {
    setIsValid(isEmailValid(email));
  }, [email]);

  const handleBlur = () => {
    setIsVisited(true);
  };

  return (
    <>
      <div className={s.inputBar}>
        <p>Электронная почта</p>
        <div className={s.inputWrap}>
          <input
            className={`${s.inputBtn}
							  ${isIncorrect && s.invalidData}`}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleBlur}
          />
          <p className={`${s.inputError} ${isIncorrect && s.active}`}>
            Неверный E-mail
          </p>
        </div>
        <p className={s.inputMsg}>
          Можно изменить адрес, указанный при регистрации.
        </p>
      </div>
    </>
  );
};
