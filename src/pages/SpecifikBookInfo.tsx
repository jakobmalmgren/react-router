import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import Book from "../components/Book";

// om jag bara gör som på allbooks sidan ochnvigerar till item.id
// kommer de till specifikbook/1 ksnke...så de fungerar på de viset
// MEN sen om vi ska anvönda den URL för sedan hämta data igen me useeeffect
//inne i komponenten som visar enskild data om en bok
// kan vi ta url id via useparams o sen göra en fetch o sätta
// in id som kmr från useparams..SÅ ska man använda useparams!!!
// kan implemettera error handling me om ex  specifikbook/111 ksnke inte fnns..
// då får man hantera de.
// typescript med

// sen sass se klart video o göra lite uppg!
const SpecifikBookInfo = () => {
  const { bookInfo, setBookInfo } = useOutletContext();
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books/${id}`
      );
      const data = await response.json();

      setBookInfo(data);
    };
    getData();
    console.log("useeffect körs i specific book info sidan");
  }, []);

  //   varför kan ja inte ta bookindo.id o inte anvönda useparams??

  // Kontrollera om bookInfo är korrekt och om id matchar

  if (!bookInfo) {
    return <div>loading...</div>;
  }
  // if (bookInfo) {
  // Här jämför vi bookInfo.id med id från URL och ser till att de matchar
  // KOLLA DE SEN!!
  return (
    <Book item={bookInfo}>
      <h1>{bookInfo.title}</h1>
      <p>{`Author: ${bookInfo.author}`}</p>
      <p>{`Pages: ${bookInfo.pages}`}</p>
      <p>{`Plot: ${bookInfo.plot}`}</p>
      <p>{`Year: ${bookInfo.year}`}</p>
      <p>{`Publisher: ${bookInfo.publisher}`}</p>
    </Book>
  );
};
// };

export default SpecifikBookInfo;
