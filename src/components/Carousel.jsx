import { Component } from "react";
import React, { useState, useEffect } from "react";
import { BsChevronRight } from "react-icons/bs";
import { Carousel, Stack, Spinner, Row, Col } from "react-bootstrap";
import { AiFillPlayCircle } from "react-icons/ai";
import "../scss/style.scss";
import movies from "../database/movies.json";
import Movie from "./Movie";
const CarouselComponent = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState([]);

  const movieSearch = async () => {
    try {
      const response1 = await fetch(
        `https://netflix-backend-production-0d3e.up.railway.app/medias`
      );
      if (response1.ok) {
        const unboxedResponse1 = await response1.json();
        setMovies(unboxedResponse1);
      } else {
        console.log("Error! Danger! Run!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    movieSearch();
    console.log(movies);
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center"></div>
      <h3>Popular on Netflix:</h3>
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4">
        {movies.map((movie) => (
          <Movie {...movie} />
        ))}
      </Row>
    </>
  );
};

export default CarouselComponent;