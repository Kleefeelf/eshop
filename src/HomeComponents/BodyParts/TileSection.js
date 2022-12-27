import { React, useState } from "react";

function TileSection() {
  const [readMore, setReadMore] = useState(false);
  var linkName = readMore ? "Read less <<<" : "Read more >>>";
  const moreContent = (
    <div className="extra" id="read-more">
      <div className="films">
        <div className="adv-film">
          <p className="adv-film-name">Anakonda 2</p>
          <p className="adv-duration">980 min</p>
          <p className="adv-film-rating">5</p>
        </div>
        <div className="adv-film">
          <p className="adv-film-name">Hunter</p>
          <p className="adv-duration">120 min</p>
          <p className="adv-film-rating">4</p>
        </div>
        <div className="adv-film">
          <p className="adv-film-name">Dimona</p>
          <p className="adv-duration">666 min</p>
          <p className="adv-film-rating">6</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="tile-section">
      <div className="films">
        <div className="adv-film">
          <p className="adv-film-name">Anakonda 1</p>
          <p className="adv-duration">440 min</p>
          <p className="adv-film-rating">5</p>
        </div>
        <div className="adv-film">
          <p className="adv-film-name">Joaaa</p>
          <p className="adv-duration">120 min</p>
          <p className="adv-film-rating">3</p>
        </div>
        <div className="adv-film">
          <p className="adv-film-name">Turtle</p>
          <p className="adv-duration">240 min</p>
          <p className="adv-film-rating">5</p>
        </div>
      </div>
      <a
        href="#"
        id="home-view-more"
        onClick={() => {
          setReadMore(!readMore);
        }}
      >
        {linkName}
      </a>
      {readMore ? moreContent : ""}
    </div>
  );
}

export default TileSection;
