import Project from "./Project";
import {AiFillBehanceCircle} from 'react-icons/ai';
import Writing from "./Writing";
import { FaGithub } from "react-icons/fa6";

export default function Portfolio() {
  return (<>
    <section
      id="portfolio"
      className="flex h-max min-h-screen w-full items-center justify-center bg-primary text-text"
    >
      {/* Container */}
      <div className="mx-auto flex h-full w-full max-w-fit flex-col justify-center text-center">
        <h2 className="mt-2 font-bold text-4xl text-text lg:text-6xl pb-4">Portfolio</h2>
        <h3 className="mt-4 inline pb-2 text-2xl font-bold text-text lg:text-3xl">
          Web Development
        </h3>

        {/* Projects Grid */}
        <div className="mx-14 grid grid-cols-1 gap-16 py-8 text-center md:grid-cols-2 lg:mx-0 xl:grid-cols-3">
      
        <Project
            image="geodashboard.png"
            description="Geodashboard with attribute query, drawing, area calculating, coordinate detection, and layer switcher"
            techStack="Chakra UI, React, OpenLayers, geoserver, postgreSQL"
            buttons={[
              {
                name: "Github",
                image: FaGithub,
                link: "https://github.com/Fakhriyramadhan25/OpenLayers-ReactJS",
              },

            ]}
          >
            Smart Cities Geodashboard
          </Project>

        <Project
            image="deckglres.png"
            description="Data Visualization with Deck GL"
            techStack="React, DeckGL, geoserver, postgreSQL"
            buttons={[
              {
                name: "Github",
                image: FaGithub,
                link: "https://github.com/Fakhriyramadhan25/React-deckGL",
              },

            ]}
          >
            Data Visualization with Deck GL
          </Project>

          <Project
            image="spadetrans.png"
            description="Angkutan Kota Bandung shortest path route selection using leaflet, pgrouting, and geoserver"
            techStack="React, leaflet, geoserver, postgreSQL"
            buttons={[
              {
                name: "Github",
                image: FaGithub,
                link: "https://github.com/Fakhriyramadhan25/React-Leaflet-Bandung-Transportations",
              },

            ]}
          >
            Web-apps: Public Transportation
          </Project>

          <Project
            image="workoutbuddy.png"
            description="The web application serves authentication for people who wants to list their workout practice"
            techStack="Node JS, Express, React, MongoDB"
            buttons={[
              {
                name: "Github",
                image: FaGithub,
                link: "https://github.com/Fakhriyramadhan25/React-MongoDB-MERN",
              },

            ]}
          >
            Workout Buddy application
          </Project>

          <Project
            image="powerlocation.png"
            description="The latest portfolio comprises of WebDev, GIS & data analysis, and Community Development"
            techStack="WebDev, ArcGIS, Python, React"
            buttons={[
              {
                name: "Behance",
                image: AiFillBehanceCircle,
                link: "https://www.behance.net/gallery/178918233/The-power-of-Location",
              },

            ]}
          >
            The Power Of Location
          </Project>


        </div>
      </div>
    </section>
    <Writing/>
    </>
  );
}
