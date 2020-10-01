import React from "react";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className={styles.grid}>
      <Header />
      <Sidebar />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
