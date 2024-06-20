import { link } from "react-router-dom";


const  ToDoCard = (props) => {
    return (
      <div className="col-lg-4 mb-3">
        <div className="card" style={{ width: "100%" }}>
          <div className="card-body">
            <h5 className="card-title">{props.todoTitle}</h5>
  
            <p className="card-text">{props.userId}</p>
            <a href="" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
    );
  };



export default ToDoCard;