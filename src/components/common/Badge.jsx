const Badge = ({ children }) => {
  return (
    <span className="inline-block px-4 py-2 rounded-full bg-slate-800 text-sm">
      {children}
    </span>
  );
};

export default Badge;