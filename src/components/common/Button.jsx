const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-6
        py-3
        rounded-xl
        bg-blue-600
        hover:bg-blue-700
        transition-all
        duration-300
        font-semibold
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;