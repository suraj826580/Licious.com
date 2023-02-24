import React from "react";
import { createContext } from "react";
import { useDisclosure } from "@chakra-ui/react";
export const GlobalContext = createContext();
export default function GlobalContextfunc({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();
  return (
    <GlobalContext.Provider value={{ isOpen, onOpen, onClose, btnRef }}>
      {children}
    </GlobalContext.Provider>
  );
}
