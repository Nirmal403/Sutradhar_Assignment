import React from "react";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import Master from "../components/Master";
import styles from "./HomePage.module.css"

const HomePage = () => {
  return (
    <Box id={styles.home}>
      <Navbar />
      <Master />
    </Box>
  );
};

export default HomePage;
