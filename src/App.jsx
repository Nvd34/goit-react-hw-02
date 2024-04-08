import { useState } from "react";
import { useEffect } from "react";

import { Description } from "./Components/Description";
import { Options } from "./Components/Options";
import { Feedback } from "./Components/Feedback";
import { Notification } from "./Components/Notification";

function App() {
  const getResetFeedback = () => {
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  };

  const KEY_FEEDBACK_LS = "Feedback";

  const [feedback, setFeedback] = useState(() => {
    const savedObject = window.localStorage.getItem(KEY_FEEDBACK_LS);
    if (savedObject) {
      try {
        return JSON.parse(savedObject);
      } catch (error) {
        console.log(error.message);
      }
    }
    return getResetFeedback();
  });

  useEffect(() => {
    window.localStorage.setItem(KEY_FEEDBACK_LS, JSON.stringify(feedback));
  }, [feedback]);

  const handlerBtn = (event) => {
    if (event.target.type === "button") {
      if (event.target.name === "reset") {
        setFeedback(getResetFeedback);
      } else {
        setFeedback({
          ...feedback,
          [event.target.name]: ++feedback[event.target.name],
        });
      }
    }
  };

  const totalFeedback = feedback
    ? feedback.good + feedback.neutral + feedback.bad
    : 0;

  return (
    <>
      <Description />
      <Options handlerBtn={handlerBtn} totalFeedback={totalFeedback} />
      {totalFeedback ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
