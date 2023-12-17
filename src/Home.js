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
      description:
        "Discover our English Courses collection designed for learners at every stage – beginners, pre-intermediates, and intermediates. Dive into 24 Google Meet sessions for only $60, tailored to each proficiency level. Whether you're starting afresh, bridging gaps, or aiming for fluency, our expert-led courses offer a focused and affordable path to English language mastery. Join us and elevate your language skills with interactive sessions that fit your schedule and budget.",
    },
    {
      title: "Level Estimation Test",
      sesNum: 1,
      price: 1,
      url: "https://live-english.net/wp-content/uploads/2020/05/img-english-level-test-1-750x315.png",
      urlAlt: "english test",
      titles: "english test",
      description:
        "The Level Estimation Test offers a quick and affordable opportunity for individuals to assess their proficiency in a specific skill or subject. Priced at just $1 per session, participants can engage in a comprehensive evaluation conducted through Google Meet. This test provides a concise and focused assessment, allowing individuals to gauge their current level of expertise and identify areas for improvement. Take the next step in your learning journey with our Level Estimation Test and gain valuable insights to propel your skills forward.",
    },
    {
      title: "Math",
      sesNum: 24,
      price: 60,
      url: "https://img.freepik.com/free-vector/chalkboard-with-math-elements_1411-88.jpg?w=1800&t=st=1702287783~exp=1702288383~hmac=f4ca67545e38aa2f5c58a260e78f26cd2ed333cd9a7313f876e20497daf09e09",
      urlAlt: "math",
      titles: "math",
      description:
        "Embark on a transformative mathematical journey with our Math Test Package, offering 24 enriching sessions for only $100. Delivered through Google Meet, each session provides a dedicated space for participants to delve into various mathematical concepts, refine problem-solving skills, and boost overall proficiency. With a structured and comprehensive approach, this package is designed to enhance mathematical understanding and build a solid foundation. Elevate your mathematical prowess affordably and conveniently with our Math Test Package – where learning meets convenience in the virtual realm.",
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
