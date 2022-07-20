import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import tmdb from '../apis/tmdb'
import Similar from './Similar'
//import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import Recommendations from './Recommendations'
//import TopRatedMovie from './TopRated'

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/'
const LOADING_IMG_URL = 'https://c.tenor.com/aEjYE139N7wAAAAC/discord-loader.gif'

const DetailMovie = () => {
    let { movieId } = useParams();

    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(true)

    const fetchDetail = async () => {
        try {
            const fetchData = await tmdb.get(`movie/${movieId}`);
            setDetail(fetchData.data);
            console.log(fetchData.data)
        } catch (error) {
            console.log(error);
            setDetail({});
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        setLoading(true)
        fetchDetail()

        // fetchImages()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieId]);

    const handleLoaded = () => {
        setLoading(false)
    }

    return (
        <div className='content'>
            <div className='movie-detail'>
                <a href="/">Back</a>

                <div className='movie-backdrop'>

                    <div style={{ display: loading ? "block" : "none", marginTop: "10px" }}>
                        <img src={LOADING_IMG_URL} alt="loading" />
                    </div>
                    <div style={{ display: loading ? "none" : "block" }}>
                        <h1>{detail.title}</h1>
                        <img
                            src={`${BASE_IMG_URL}${detail.backdrop_path}`}
                            alt={detail.title}
                            onLoad={handleLoaded} />
                    </div>
                </div>
                <div className='movie-description'>
                    <p>Description</p>
                    <span className="overview">
                        {detail.overview}
                    </span>
                </div>
                <div style={{
                    textAlign: "center",
                    display: loading ? "block" : "none",
                    padding: "100px"
                }}>
                    Loading...  <FontAwesomeIcon className='spinner' icon={faSpinner} />
                </div>

                <div className='movie-additional-content' style={{ display: loading ? "none" : "block" }}>
                    <Similar movieId={movieId} />
                    <Recommendations movieId={movieId} />
                    {/* <TopRatedMovie movieId={movieId} /> */}
                </div>

            </div>
        </div>
    )
}

export default DetailMovie