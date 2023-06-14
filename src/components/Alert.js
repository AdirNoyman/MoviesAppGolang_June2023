import React from 'react';

const Alert = ({ className, message }) => {
  return <div className={'alert ' + className}>{message}</div>;
};

export default Alert;
