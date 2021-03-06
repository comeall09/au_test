import s from "../../styles/mainStyles.module.scss";
import { useContext, useEffect, useState } from "react";
import { isEmailValid } from "../model/isEmailValid";
import { StatusContext } from "../../../../app/StatusContextProvider";

export const EmailBar = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isVisited, setIsVisited] = useState(false);
  const isIncorrect = !isValid && isVisited;

  useEffect(() => {
    setIsValid(isEmailValid(email));
    toggleChangedStatus(true)
  }, [email]);

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
