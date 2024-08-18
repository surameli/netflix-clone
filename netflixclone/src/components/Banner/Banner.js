import React, { useEffect, useState } from 'react'
import axios from '../../utils/axios';
import "./banner.css";
import requests from '../../utils/request';
const Banner = () => {
    const [movie, setmovie] = useState({});
     useEffect(() => {
        (async() =>{
            try {
                const request = await axios.get(requests.fetchNetflixOriginals)
                setmovie(request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]);
            } catch (error) {
               console.log("error", error);
                }
        })()
     },[]);
   function truncate(str, n) {
     return str?.length > n? str.substr(0, n - 1) + '...' :str;
   }
  return (
    <div className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }} >
       <div className='banner-contain'>
         <h1 className='banner-title'>
             {movie?.title || movie?.name || movie?.original_name}
         </h1>
         <div className='banner-button-play'>
            <button className='banner-button play'>play</button>
            <button className='banner-button'>my lists</button>
         </div>
         <h1 className='banner-discription'>{truncate(movie?.overview, 150)}</h1>
       </div>
      <div className='banner-fade'/>
    </div>
  )
}

export default Banner