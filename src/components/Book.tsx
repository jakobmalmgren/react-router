import { useEffect, useState } from "react";
import "./Book.css";

const Book = ({ item, children }) => {
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    switch (item.id) {
      case 1:
        setBackgroundColor("red");
        break;
      case 2:
        setBackgroundColor("blue");
        break;
      case 3:
        setBackgroundColor("green");
        break;
      case 4:
        setBackgroundColor("pink");
        break;
      case 5:
        setBackgroundColor("purple");
        break;
      case 6:
        setBackgroundColor("yello");
        break;
      case 7:
        setBackgroundColor("orange");
        break;
      case 8:
        setBackgroundColor("violet");
        break;
    }
  }, []);

  return (
    <section className="book" style={{ backgroundColor: backgroundColor }}>
      {children}
    </section>
  );
};

export default Book;
