import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [bookInfo, setBookInfo] = useState(null);

  const handleBookInfo = (item) => {
    setBookInfo(item);
  };

  return (
    <>
      <Navbar />
      <Outlet
        context={{
          bookInfo: bookInfo,
          setBookInfo: setBookInfo,
          handleBookInfo: handleBookInfo,
        }}
      />
    </>
  );
}

export default App;
