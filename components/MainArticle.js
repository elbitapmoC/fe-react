import { useState } from "react";
import { leagueChampions } from "../data/champions";

const MainArticle = ({ title }) => {
  const numberOfCharacters = leagueChampions.length;
  const [champion, setChampion] = useState();

  const getRandomNumber = () => {
    return Math.floor(Math.random() * numberOfCharacters);
  };

  const handleClick = () => {
    setChampion(leagueChampions[getRandomNumber()].name);
  };

  return (
    <>
      <h1 className="title text-4xl">{title}</h1>
      <aside>Passing Props, useState &amp; Reactive Data</aside>
      <p className="mt-4 mb-4 text-2xl italic">{champion}</p>
      <button
        type="button"
        onClick={handleClick}
        className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm mt-4 px-5 py-2.5 mr-2 mb-2"
      >
        Get Random Champion!
      </button>
    </>
  );
};

export default MainArticle;
