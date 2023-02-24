import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  Link,
  Box,
  DrawerCloseButton,
  Input,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
function DrawerLoginAndSignUp() {
  const [number, setnumber] = useState("");
  const { isOpen, onClose, btnRef } = useContext(GlobalContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, `+91${number}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setnumber("");
  };
  return (
    <>
      <Drawer
        size="sm"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent
          backgroundSize="100%"
          backgroundImage={
            "url(https://media.gettyimages.com/id/1321649763/photo/fresh-chicken-meat-chicken-fillet-with-spices-on-wooden-table.jpg?s=2048x2048&w=gi&k=20&c=S9BI8zBYmGssf2jzzC7yAi6R89TKlAQ-CGDZO0YMM6A=)"
          }>
          <DrawerCloseButton color={"#000"} size={"lg"} />

          <DrawerBody>
            <form onSubmit={handleSubmit}>
              <Box
                backgroundColor={"#fff"}
                position={"absolute"}
                bottom={0}
                boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
                px={5}
                h={"60%"}
                borderRadius={8}>
                <DrawerHeader textAlign={"left"} pl={2}>
                  Sign In/Sign Up
                </DrawerHeader>
                <Input
                  value={number}
                  onChange={(e) => {
                    setnumber(e.target.value);
                  }}
                  type={"number"}
                  placeholder="Enter Your Mobile No..."
                  border={"none"}
                  borderBottom={"1px solid "}
                  outline={"none"}
                  borderRadius="10px"
                  borderColor={"gray.200"}
                  _focus={{
                    outline: "none",
                    borderRadius: "10px",
                    backgroundColor: "transparent",
                  }}
                  textAlign="left"
                  pl={2}
                />
                <Button
                  type="submit"
                  backgroundColor={"#42A5F5"}
                  _hover={{ backgroundColor: "#1E88E5" }}
                  color={"#fff"}
                  w={"100%"}
                  mt={5}>
                  Proceed Via OTP
                </Button>
                <Box fontSize={"14px"} mt={2} fontWeight={"semibold"}>
                  By signing in you agree to our{" "}
                  <Link color="red.500">terms and conditions</Link>
                </Box>
              </Box>
            </form>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default DrawerLoginAndSignUp;
