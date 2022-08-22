import type { NextPage } from "next";

import { Header } from "@/components/Header";
import { Seo } from "@/components/Seo";

const Home: NextPage = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Seo
        title="Home - Netflix"
        description="Netflix clone with Next.js, Typescript, Tailwindcss, Firebase"
      />

      {/* Header */}
      <Header />

      <main>
        {/* Banner */}
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
