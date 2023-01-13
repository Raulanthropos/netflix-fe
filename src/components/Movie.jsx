import { Col } from "react-bootstrap";
import { AiFillPlayCircle } from "react-icons/ai";
const Movie = (movie) => {
  return (
    <Col>
      <div class="content">
        <img
          src={movie.poster}
          id="overlay"
          className="w-100 movie image opacity-75"
          style={{ zIndex: 0 }}
        />
        <div className="overlay d-flex align-items-end" style={{ zIndex: "9" }}>
          <div>
            <h5 className="d-inline-block text-truncate" id="movie-title">
              {movie.title}
            </h5>
            <span className="text-muted">
              {/* <p className="no-p-no-m">{movie.type}</p> */}
              <p>
                Year: {movie.year} • Type: {movie.type}
              </p>
            </span>
            {/* <p className="truncate">{movie.Description}</p> */}
          </div>

          <AiFillPlayCircle size={50} id="play-button" />
        </div>
      </div>
    </Col>
  );
};
export default Movie;