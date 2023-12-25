import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
    if (movies === null) return;
    const mainMovie = movies?.results[0];
    const { original_title, overview, id, backdrop_path } = mainMovie;

    return (
        <div className="-mb-20">
            <VideoTitle title={original_title} text={overview} />
            <VideoBackground id={id} image={backdrop_path} />
        </div>
    )
}

export default MainContainer;