import React from "react";

interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return <div style={{ color: "red" }}>{message}</div>;
};

export default ErrorDisplay;
