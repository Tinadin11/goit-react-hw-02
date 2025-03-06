import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import css from "./App.module.css";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const localFeedback = localStorage.getItem("feedback");

    if (localFeedback) {
      return JSON.parse(localFeedback);
    } else {
      return { good: 0, neutral: 0, bad: 0 };
    }
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  //підказка з д.з, - використати Math.round((good / totalFeedback) * 100);
  let positiveFeedback;

  if (totalFeedback > 0) {
    positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  } else {
    positiveFeedback = 0;
  }

  return (
    <div className={css.box}>
      {/* <Description /> */}
      <Description totalFeedback={totalFeedback} />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;

//  коменти для себе

/*залишаю, бо не могла спочатку розібратись, що я не так роблю, щоб зникало No feedback yet
return (
  <>
    <Description />
    <Options
      updateFeedback={updateFeedback}
      resetFeedback={resetFeedback}
       totalFeedback={totalFeedback}
    />
    <Feedback feedback={feedback} totalFeedback={totalFeedback} />
    <Notification />
  </>
);*/

/* замість let positiveFeedback;

  if (totalFeedback > 0) {
    positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  } else {
    positiveFeedback = 0;
  }
    можна використати простіший запис:
    const positiveFeedback =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;
    але поки так зрозуміліше і щоб набити руку */
