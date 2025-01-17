import React, { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalShown, setModalShown] = useState(true); // Ensure it opens only once.

  const hideModal = () => setModalShown(false);

  return (
    <ModalContext.Provider value={{ isModalShown, hideModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
