// import s from "./passwordBar.module.scss";
// import { useEffect, useState } from "react";
// import { isPasswordValid } from "../../model/isPasswordValid";

// export const PassBlock = () => {

//   const [password, setPassword] = useState("");
//   const [isValid, setIsValid] = useState(false);
//   const [isVisited, setIsVisited] = useState(false);
//   const isIncorrect = !isValid && isVisited;

//   useEffect(() => {
//     setIsValid(isPasswordValid(password));
//   }, [password]);

//   const handleBlur = () => {
//     setIsVisited(true);
//   };

//   return (
//     <>
//     <div className={s.passBar}>
//         <p>Пароль</p>
//         <div className={s.inputWrap}>
//           <input
//             className={`${s.passInput}
// 								${isIncorrect && s.invalidPass}`}
//             type="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             onBlur={handleBlur}
//           />
//           <p className={`${s.inputError} ${isIncorrect && s.active}`}>
//             Используйте не менее 5 символов
//           </p>
//         </div>
//         <p className={s.passMsg}>
//           Ваш новый пароль должен содержать не менее 5 символов.
//         </p>
//       </div></>
//   )
// }

export const A = () => {
  return (
    <>
    </>
  )
}