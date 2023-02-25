import React from "react";
import { createContext, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
export const GlobalContext = createContext();
export default function GlobalContextfunc({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inpuText, setinpuText] = useState("");

  const btnRef = React.useRef();
  return (
    <GlobalContext.Provider
      value={{ setinpuText, inpuText, isOpen, onOpen, onClose, btnRef }}>
      {children}
    </GlobalContext.Provider>
  );
}
