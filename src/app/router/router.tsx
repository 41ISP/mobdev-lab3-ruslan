import { createBrowserRouter } from "react-router-dom";
import MoviePage from "../../pages/MoviePage/MoviePage";
import Search from "../../pages/Search/Search";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Search />,
    },
    {
        path: "/movie/:id",
        element: <MoviePage/>,  
    }
])

export default router
