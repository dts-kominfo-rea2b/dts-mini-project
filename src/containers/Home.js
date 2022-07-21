import MovieLatest from '../components/MovieLatest';
import MovieNow from '../components/MovieNow';
import MovieRated from '../components/MovieRated';
import Layout from './Layout';

const Home = () => {

    return (
        <div className="flex w-full max-w-7xl mx-auto mt-24 px-4">
        <Layout>
            <MovieNow />
            <MovieLatest />
            <MovieRated />
        </Layout>
        </div>
    );
}

export default Home;