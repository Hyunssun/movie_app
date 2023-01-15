import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';
import styles from './Detail.module.css';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.container}>
          <MovieDetail
            key={detail.id}
            id={detail.id}
            large_cover_image={detail.large_cover_image}
            title_long={detail.title_long}
            genres={detail.genres}
            runtime={detail.runtime}
            rating={detail.rating}
            description_full={detail.description_full}
          />
        </div>
      )}
    </div>
  );
}
export default Detail;
