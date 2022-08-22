import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/solid";

import { Movie } from "@/types/index";
import { IMAGES_BASE_URL } from "@/constants/requests";
import { randomNumber } from "@/utils/randomNumber";

interface Props {
  netflixOriginals: Movie[];
}

export const Banner: FC<Props> = ({ netflixOriginals }) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(netflixOriginals[randomNumber(0, netflixOriginals.length)]);
  }, [netflixOriginals]);

  return (
    <div className="flex flex-col justify-center space-y-2 px-8 h-[60vh] md:space-y-4 md:px-16 lg:px-[6vw] lg:h-[75vh]">
      <div className="absolute top-0 left-0 w-full h-[60vh] -z-10 lg:h-[75vh]">
        <Image
          src={`${IMAGES_BASE_URL}${movie?.backdrop_path || movie?.poster_path}`}
          alt={movie?.title}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/90" />
      </div>

      <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h2>
      <p className="text-xs text-gray-300 md:text-base">Released: {movie?.release_date}</p>
      <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-xl">
        {movie?.overview.slice(0, 100)}...
      </p>

      <div className="flex items-center gap-x-2">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="w-4 h-4 md:w-7 md:h-7" /> Play
        </button>
        <button className="bannerButton bg-[gray]/50 text-white">
          More Info <InformationCircleIcon className="w-4 h-4 md:w-8 md:h-8" />
        </button>
      </div>
    </div>
  );
};
