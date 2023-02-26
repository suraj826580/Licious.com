import React from "react";
import { createContext, useState } from "react";
import { useDisclosure, useToast } from "@chakra-ui/react";
import axios from "axios";

export const GlobalContext = createContext();
export default function GlobalContextfunc({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const {
    isOpen: isOpener,
    onOpen: onOpener,
    onClose: onCloser,
  } = useDisclosure();
  const btnRefer = React.useRef();
  const [inpuText, setinpuText] = useState("");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const toast = useToast();

  const [del, setdel] = useState(false);

  const getcartData = (id) => {
    axios
      .get(`https://63c71d3cd307b76967472ac6.mockapi.io/products/${id}`)
      .then((res) => {
        cart.push({ ...res.data, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
      })
      .catch((err) => console.log(err));
  };

  return (
    <GlobalContext.Provider
      value={{
        toast,
        getcartData,
        inpuText,
        setinpuText,
        isOpen,
        onOpen,
        onClose,
        btnRef,
        isOpener,
        onOpener,
        onCloser,
        btnRefer,
        setdel,
        del,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}
