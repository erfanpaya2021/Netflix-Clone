import type { NextPage } from "next";

import { requests } from "@/constants/requests";

import { Movie } from "@/types/index";

import { Seo } from "@/components/Seo";
import { Header } from "@/components/Header";
import { Banner } from "@/components/Main";

interface Props {
  netflixOriginals: Movie[];
  trendingsNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  commedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
}

const Home: NextPage<Props> = ({
  netflixOriginals,
  trendingsNow,
  topRated,
  actionMovies,
  commedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}) => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-gray-900/90 lg:h-[140vh]">
      <Seo
        title="Home - Netflix"
        description="Netflix clone with Next.js, Typescript, Tailwindcss, Firebase"
      />

      {/* Header */}
      <Header />

      <main>
        {/* Banner */}
        <Banner netflixOriginals={netflixOriginals} />
        <section>
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
        </section>

        {/* Modal */}
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async (ctx: any) => {
  const [
    netflixOriginals,
    trendingsNow,
    topRated,
    actionMovies,
    commedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingsNow: trendingsNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      commedyMovies: commedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
};
