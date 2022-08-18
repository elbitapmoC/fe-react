import { useState } from "react";
import { leagueChampions } from "../data/champions";

const MainArticle = ({ title }) => {
  const numberOfCharacters = leagueChampions.length;
  let championSelection = "";

  const getRandomNumber = () => {
    return Math.floor(Math.random() * numberOfCharacters);
  };
  const handleClick = () => {
    championSelection = leagueChampions[getRandomNumber()].name;
    console.log(championSelection);
  };

  return (
    <>
      <style jsx>
        {`
          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .title,
          .description {
            text-align: center;
          }
        `}
      </style>
      <h1 className="title">{title}</h1>
      {championSelection}
      <button
        type="button"
        onClick={handleClick}
        className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm mt-4 px-5 py-2.5 mr-2 mb-2"
      >
        Get Your Champion!
      </button>
    </>
  );
};

export default MainArticle;
