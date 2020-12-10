import React from "react";

const FilmDiaries = () => {
  return (
    <div className="filmdiaries">
      <h1 className="text-center animate__animated animate__bounceIn">
        Film Diaries
      </h1>
      <div className="container text-center animate__animated animate__fadeIn">
        <img
          className="film-img"
          src="https://russtelen-photoportfolio.s3.ca-central-1.amazonaws.com/filmdiaries.jpg"
          alt="film diaries"
        />
      </div>
    </div>
  );
};

export default FilmDiaries;
