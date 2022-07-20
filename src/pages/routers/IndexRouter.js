import { Routes, Route } from "react-router-dom";
import React from "react";

// protected route watch movie
import ProtectedRoute from "../../components/navbar/ProtectedRoutes";

const MainNavigation = React.lazy(() =>
  import("../../components/navbar/MainNavbar")
);
// home
const Home = React.lazy(() => import("../movies/home/Home"));
// movies
const MoviesSelected = React.lazy(() =>
  import("../movies/home/MoviesSelected")
);
const MoviesPlaying = React.lazy(() => import("../movies/home/MoviesPlaying"));
// footer
const Footer = React.lazy(() => import("../../components/footer/Footer"));

const IndexRouter = () => {
  return (
    <section className="flex flex-col w-full font-inter justify-between min-h-screen text-white bg-[#141414]">
      {/* main navigation */}
      <div className="fixed z-[202] w-full h-24 pt-6 px-8 shadow-md top-0 bg-[#141414]">
        <div className="flex w-full max-w-7xl mx-auto px-4">
          <React.Suspense fallback={<p>Loading...</p>}>
            <MainNavigation />
          </React.Suspense>
        </div>
      </div>
      {/* router view */}
      <div className="flex w-full max-w-7xl mx-auto mt-24 px-4">
        <Routes>
          {/* home */}
          <Route
            path="/home"
            element={
              <React.Suspense fallback={<p>Loading ...</p>}>
                <Home />
              </React.Suspense>
            }
          />
          {/* movies */}
          <Route
            path="/home/detail/:id"
            element={
              <React.Suspense fallback={<p>Loading ...</p>}>
                <MoviesSelected />
              </React.Suspense>
            }
          />
          <Route
            path="/home/watch/:id"
            element={
              <React.Suspense fallback={<p>Loading ...</p>}>
                <ProtectedRoute>
                  <MoviesPlaying />
                </ProtectedRoute>
              </React.Suspense>
            }
          />
        </Routes>
      </div>
      {/* footer */}
      <div className="flex w-full max-w-7xl mx-auto mt-16 px-4">
        <Footer />
      </div>
    </section>
  );
};

export default IndexRouter;
