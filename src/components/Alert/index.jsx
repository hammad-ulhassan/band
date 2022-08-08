const Alert = ({ type = "error" | "info", message }) => {
  return (
    <div
      className={`p-4 mb-4 text-sm rounded-lg ${
        type === "error"
          ? "text-blue-700 bg-blue-100  dark:bg-blue-200 dark:text-blue-800"
          : "text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800"
      } `}
      role="alert"
    >
      <span className="font-medium">
        {type === "error" ? "Oh No" : "Hey There!"}
      </span>
      {message}
    </div>
  );
};

export default Alert;
