import css from "./Description.module.css";

const Description = ({ totalFeedback }) => {
  return (
    <div className={css.titleBox}>
      <h1 className={css.title}>Sip Happens Café</h1>
      {/* прибираю прохання про фідбек, після того, як користувач обрав якийсь варік */}
      {!totalFeedback && (
        <p className={css.text}>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      )}
    </div>
  );
};

export default Description;

// першочерговий код, по умові та без прибирання <p className={css.text}>
// const Description = () => {
//   return (
//     <div className={css.titleBox}>
//       <h1 className={css.title}>Sip Happens Café</h1>
//       <p className={css.text}>
//         Please leave your feedback about our service by selecting one of the
//         options below.
//       </p>
//     </div>
//   );
// };

// export default Description;
