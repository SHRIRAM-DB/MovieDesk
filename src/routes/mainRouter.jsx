import MovieList from '../pages/Movie'
import MovieDetails from '../pages/MovieDetails'
import Search from '../pages/Search'
import PageNotFound from '../pages/PageNotFound'

const mainRouter = {
    path:"/",
    element:<MovieList apiPath="movie/now_playing" />,
    children: [
        {
            path:"movie/:id",
            element: <MovieDetails/>
        },
        {
            path:"movies/popular",
            element: <MovieList apiPath="movie/popular" />
        },
        {
            path:"movies/top",
            element: <MovieList apiPath="movie/top_rated" />
        },
        {
            path:"movies/upcoming",
            element: <MovieList apiPath="movie/upcoming" />
        },
        {
            path:"search",
            element: <Search apiPath="search/movie"/>
        },
        {
            path:"*",
            element: <PageNotFound/>
        },
    ]
}

export default mainRouter;