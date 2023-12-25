import { API_CALL } from "../utils/config";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => {

        const apicaller = async () => {
            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_CALL);
            const json = await data.json();
            dispatch(addNowPlayingMovies(json));
        }
        apicaller();

    }, [])
}

export default useNowPlayingMovies;