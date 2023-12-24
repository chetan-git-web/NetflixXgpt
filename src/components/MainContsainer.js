import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer=()=>{
    const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
    if(movies===null) return;
    const mainMovie = movies?.results[0];
    console.log(mainMovie);
    const {original_title,overview,id,backdrop_path} = mainMovie;

    return(
        <div>
            <VideoTitle title={original_title} text={overview}/>
            <VideoBackground id={id} image={backdrop_path}/>
            
        </div>
    )
}

export default MainContainer;