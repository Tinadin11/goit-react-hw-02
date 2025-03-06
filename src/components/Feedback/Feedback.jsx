import css from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div className={css.feedback}>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p className={css.total}>Total: {totalFeedback}</p>
      <p className={css.positive}>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
