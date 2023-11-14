import React from "react";
import { differenceInDays, formatDistanceToNow } from "date-fns";

const Task = ({ taskObj, onComplete }) => {
  const now = new Date();
  const selectedDay = new Date(taskObj.deadline);
  const daysLeft = differenceInDays(selectedDay, now);
  const timeLeft = formatDistanceToNow(selectedDay);

  const left =
    daysLeft < 0
      ? ` expired ${Math.abs(daysLeft)} days ago`
      : daysLeft < 1
      ? ` ${timeLeft} left`
      : `${daysLeft} days left`;


  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">son teslim: <span>{taskObj.deadline}</span></div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
