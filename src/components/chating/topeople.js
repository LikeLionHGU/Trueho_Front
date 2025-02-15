import "./topeople.css";

function topeople({children}) {
  return(
    <div className="topeople-container">
      <div className="text-container">
        <span>{children}</span>
      </div>
    </div>
  );
}

export default topeople;