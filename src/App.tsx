import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { Home } from "./Home/pages/Home";
import { AvatarPage } from "./Avatar/pages/AvatarPage";
import { AvatarsPage } from "./Avatar/pages/AvatarsPage";
import { NotFound } from "./NotFound";

export const App = () => (
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box m={2}>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/home" element={<Home />} />
          <Route path="avatars" element={<AvatarsPage />} />
          <Route path="avatars/:avatarId" element={<AvatarPage />} />
        </Routes>
      </Box>
    </ChakraProvider>
  </BrowserRouter>
);
