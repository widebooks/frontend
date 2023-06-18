import React from "react";

import cl from "./BackendErrorMessages.module.scss";

const BackendErrorMessages = ({backendErrors}) => {
  // const errorMessages = backendErrors.map(name => {
  //   const messages = backendErrors[name].join(' ');
  //   return `${name} ${messages}`;
  // })

  return (
    <ul className={cl.container}>
      {backendErrors.map(errorMessages => (
        <li key={errorMessages}>{errorMessages}</li>
      ))}
    </ul>
  )
}

export default BackendErrorMessages;