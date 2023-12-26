import React, { useEffect } from 'react'
import { useState } from 'react';
import { API_CALL } from '../utils/config'
import Moviecard from './Moviecard';
import Header from './Header';

const GPTSearch = () => {
    const [Value, setValue] = useState("");
    const [movielist, setmovieslist] = useState([]);
    useEffect(() => {
        const moviessearh = async () => {
            const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + Value + '&include_adult=false&language=en-US&page=1', API_CALL);
            const json = await data.json();
            console.log(json);
            setmovieslist(json.results);
            console.log(movielist);
        }
        moviessearh();
    }, [Value])

    return (<div className='absolute  w-screen h-screen'>

        <div className="absolute">
            <img
                className="h-screen w-screen object-cover"
                src={
                    "https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                }
                alt="logo"
            />
        </div>
        <Header/>

        <div className="relative mx-[210px] mr-[240px] mt-[120px]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
            </div>
            <input
                type="text"
                className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 "
                placeholder="Search for Movies in GPT"
                value={Value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            ></input>
            <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-4 py-2 "
                

            >
                Search
            </button>
        </div>
        <div className='relative flex flex-wrap w-screen h-[580px] justify-center items-center overflow-y-scroll gap-5 mt-5  no-scrollbar'>
            {
                movielist.map((movie) => {
                    if (movie.poster_path == null) {
                        return <></>
                    }
                    else {
                        return <Moviecard image={movie.poster_path} id={movie.id} title={movie.original_title} overview={movie.overview} />
                    }

                })
            }
        </div>
    </div>
    )
}

export default GPTSearch