import "./frompeople.css";

function frompeople({children}) {
  return(
    <div className="frompeople-container">
      <div className="text-container">
        {children}
      </div>
    </div>
  );
}

export default frompeople;