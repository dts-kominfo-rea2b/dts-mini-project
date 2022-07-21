import { ThemeProvider } from "@mui/material";
import Footer from "../components/Footer";
import MovieRecomen from "../components/MovieRecomen";
import MovieSimilar from "../components/MovieSimilar";
import MovieView from "../components/MovieView";
import ResponsiveBar from "../components/ResponsiveBar";
import theme from "../themes/themes";
import Layout from "./Layout";

const MovieDetail = () => {
        return (
                <ThemeProvider theme={theme}>
                        <Layout>
                        <ResponsiveBar />
                        <MovieView />
                        <MovieSimilar />
                        <MovieRecomen />
                        <Footer />
                        </Layout>
                </ThemeProvider>
        );
}

export default MovieDetail;