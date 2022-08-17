import React from "react";

const MainArticle = ({ title }) => {
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
    </>
  );
};

export default MainArticle;
