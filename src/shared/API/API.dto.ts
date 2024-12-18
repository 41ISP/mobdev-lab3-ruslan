export interface IMoviesResponse 
{
    Response: string
    totalResults: string
    Search:IMovie[]
}

export interface IMovieError
{
    Error:string
    Response:string
}

export interface IMovie
{
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
}

export interface IMovieDescription
{
    Title: string
    Poster: string
    Actors: string
    Awards:string
    Country: string
    Released: string
    Year: string
    imdbRating: string
    Plot: string
}

