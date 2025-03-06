import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <ul className={css.list}>
      <li>
        <button className={css.btn} onClick={() => updateFeedback("good")}>
          Good ❤️
        </button>
      </li>
      <li>
        <button className={css.btn} onClick={() => updateFeedback("neutral")}>
          Neutral 😏
        </button>
      </li>
      <li>
        <button className={css.btn} onClick={() => updateFeedback("bad")}>
          Bad 👿
        </button>
      </li>
      {/* <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button> */}
      {totalFeedback > 0 && (
        <li>
          <button className={css.btn} onClick={resetFeedback}>
            Reset 🔂
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
