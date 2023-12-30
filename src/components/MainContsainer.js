import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
    if (movies === null) return;
    const number =Math.floor(Math.random() * 10);
    const mainMovie = movies?.results[number];
    const { original_title, overview, id, backdrop_path } = mainMovie;

    return (
        <div className="-mb-20">
            {
                console.log("hellooooooooooooooooooooo")
            }
            <VideoTitle title={original_title} text={overview} id={id} />
            <VideoBackground id={id} image={backdrop_path} />
        </div>
    )
}

export default MainContainer;