import "./TodoItem.css";

export const TodoItem = ({ text, completed, onDeleteTodo, onComplete }) => {
  return (
    <li className={`TodoItem ${completed && "TodoItem--complete"}`}>
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={() => onComplete(text)}
      >
        √
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={() => onDeleteTodo(text)}>
        X
      </span>
    </li>
  );
};
