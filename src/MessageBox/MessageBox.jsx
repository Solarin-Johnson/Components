import "./MessageBox.scss";

export default function MessageBox(props) {
  return (
    <div className="notifyContainer">
      <div className="customalert">
        {props.message ? props.message : "Message Box"}
      </div>
    </div>
  );
}
