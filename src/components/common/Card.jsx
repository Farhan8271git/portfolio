const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`
        bg-slate-900
        rounded-2xl
        border
        border-slate-800
        p-6
        hover:border-blue-500
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;