import "./frompeople.css";

function frompeople({children}) {
  return(
    <div className="frompeople-container">
      <div className="frompeople-text-container">
        <span>{children}</span>
      </div>
    </div>
  );
}

export default frompeople;