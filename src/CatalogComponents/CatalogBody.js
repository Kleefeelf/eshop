import React, { useEffect, useState } from "react";
import "../style/catalog-body.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";

function CatalogBody() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState([]);
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFitlerChange = (event) => {
    setFilter(event.target.value);
  };
  useEffect(() => {
    setFilter("all");
  }, []);

  useEffect(() => {
    const searchResults = films.filter((film) =>
      Object.values(film).join(" ").toLowerCase().includes(search)
    );
    setResults(searchResults);
  }, [search, filter, films]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10);
    axios
      .get(`http://localhost:3036/catalog/filters/${filter}`)
      .then((response) => {
        console.log(filter);
        setFilms(response.data);
      });
  }, [filter]);

  return (
    <div className="catalog">
      <div className="filter-lists">
        <input
          type="text"
          className="filter-button"
          onChange={handleSearchChange}
          value={search}
          placeholder="Search films"
        />
        <select
          className="filter-button"
          id="select"
          onChange={handleFitlerChange}
        >
          <option value="all">All</option>
          <option value="horror">Horror</option>
          <option value="action">Action</option>
          <option value="romance">Romance</option>
          <option value="slice of life">Slice of life</option>
          <option value="thriller">Thriller</option>
          <option value="mario">Mario</option>
        </select>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="films">
          {results.map((film) => {
            return (
              <div className="film" key={film.name} id={film.name}>
                <div className="film-tile">
                  <p className="name">{film.name}</p>
                  <p className="film-duration">{film.duration} min</p>
                  <p className="rating">{film.rating}/5</p>
                </div>
                <div className="pricing">
                  <hr className="br-line" />
                  <p className="price">price: {film.price} $</p>
                  <Link to={`/catalog/${film.name}`} className="more">
                    View more
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CatalogBody;

/*
{ name: "Anakonda", duration: 440, rating: 5, price: 152, genre: ["Action"] },
        { name: "Dimona", duration: 120, rating: 666, price: 25, genre: ["Horror", "Action", "Romance"] },
        { name: "Turtle", duration: 120, rating: 5, price: 15, genre: ["Action", "Racing"] },
        { name: "Gretha Tunberg", duration: 120, rating: 5, price: 65, genre: ["Horror"], },
        { name: "Anakonda 2", duration: 440, rating: 5, price: 252, genre: ["Action"] },
        { name: "JOAA", duration: 120, rating: 666, price: 14, genre: ["Slice of life"] },
        { name: "Ttrurtle", duration: 120, rating: 5, price: 45, genre: ["Thriller", "Racing"] },
        { name: "Zdershen", duration: 120, rating: 5, price: 75, genre: ["Mario"], },
        { name: "Xin Zheao", duration: 440, rating: 5, price: 65, genre: ["Action"] },
        { name: "RIOT", duration: 120, rating: 666, price: -205, genre: ["Horror", "Action", "Romance"] },
        { name: "Leagie", duration: 120, rating: 5, price: 151, genre: ["Action", "Racing"] },
        { name: "Legendoros", duration: 120, rating: 5, price: 465, genre: ["Horror"], }
        */
