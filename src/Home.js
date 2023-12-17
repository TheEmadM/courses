import React from "react";
import Card from "./Card";
import "./App"; // Import the corresponding CSS file for styling

const Home = ({ handleMouseEnter, handleMouseLeave }) => {
  // Sample data for cards
  const cardsData = [
    {
      title: "English",
      sesNum: 24,
      price: 60,
      url: "https://englishclassviaskype.com/wp-content/uploads/2023/05/Learning-English-Made-Easier-Tips-To-Follow-2-1.jpg",
      urlAlt: "English Intermediate",
      titles: "a classroom",
      description: "English courses for all levels.",
    },
    {
      title: "Level Estimation Test",
      sesNum: 1,
      price: 1,
      url: "https://live-english.net/wp-content/uploads/2020/05/img-english-level-test-1-750x315.png",
      urlAlt: "english test",
      titles: "english test",
      description: "Description for test course.",
    },
    {
      title: "Math",
      sesNum: 24,
      price: 60,
      url: "https://img.freepik.com/free-vector/chalkboard-with-math-elements_1411-88.jpg?w=1800&t=st=1702287783~exp=1702288383~hmac=f4ca67545e38aa2f5c58a260e78f26cd2ed333cd9a7313f876e20497daf09e09",
      urlAlt: "math",
      titles: "math",
      description: "Description for math course.",
    },
    // Add more card data as needed
  ];

  return (
    <div className="home">
      <div className="header">
        <h1>Professional Courses</h1>
      </div>

      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            sesNum={card.sesNum}
            price={card.price}
            url={card.url}
            urlAlt={card.urlAlt}
            titles={card.titles}
            alignRight={index % 2 !== 0}
            handleMouseEnter={() => handleMouseEnter(card.description)}
            handleMouseLeave={handleMouseLeave}
            description={card.description}
          />
        ))}
      </div>

      <div className="footer">
        <h1>All rights reserved.</h1>
      </div>
    </div>
  );
};

export default Home;
