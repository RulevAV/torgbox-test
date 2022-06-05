import React from "react";

interface PropsType {
  message: string;
}

const Alert: React.FC<PropsType> = ({ message }) => {
  return <div className="alert">{message}</div>
}

export default Alert;