const Container = ({ children, className = "" }) => {
  return (
    <div className={`site-container ${className}`}>
      {children}
    </div>
  );
};

export default Container;