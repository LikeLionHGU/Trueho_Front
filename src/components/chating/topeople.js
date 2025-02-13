import "./topeople.css";

function topeople({children}) {
  return(
    <div className="topeople-container">
      <div className="text-container">
        {children}
      </div>
    </div>
  );
}

export default topeople;