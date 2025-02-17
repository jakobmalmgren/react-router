import { useEffect, useState } from "react";
import Book from "../components/Book";
import "./AllBooks.css";
import { Outlet, useNavigate, useOutletContext } from "react-router-dom";

const AllBooks = () => {
  const navigate = useNavigate();
  const { handleBookInfo } = useOutletContext();

  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books"
      );
      const data = await response.json();
      console.log("data i allboks", data);

      setAllBooks(data);
    };
    getData();
    console.log("useeffect körs");
  }, []);

  return (
    <div className="home">
      <h1>all books</h1>
      <section className="book-wrapper">
        {allBooks.map((item) => {
          return (
            <div key={item.id}>
              <Book item={item}>
                <h2>title : {item.title}</h2>
                <h2>author : {item.author}</h2>
                <p></p>
                <button
                  onClick={() => {
                    handleBookInfo(item);
                    console.log("hej", item);
                    navigate(`${item.id}`);
                  }}
                  className="book__btn"
                >
                  Click to find out more info
                </button>
              </Book>
              <Outlet />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default AllBooks;
