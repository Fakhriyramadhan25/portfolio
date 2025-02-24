import Project from "./Project";
import {AiFillBehanceCircle} from 'react-icons/ai';
import Writing from "./Writing";
import { FaGithub } from "react-icons/fa6";
import { SiGooglechrome } from "react-icons/si";
// import {AiFillMediumCircle} from "react-icons/ai";



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
            image="ewsgi.png"
            description="Early warning system for monitoring the Gunung Ibu activity"
            techStack="AWS, Directus, vue 3, nuxt.js , PostGreSQL"
            buttons={[
              {
                name: "Browse",
                image: SiGooglechrome,
                link: "https://gunungibu.geodashboard.io/gunung/ibu/",
              },
            ]}
          >
            Early Warning System Gunung Ibu
          </Project>
          <Project
            image="spainecom.png"
            description="Helping province government of spain deciding to install the Solar PV"
            techStack="GCP, Docker, Svelte kit, Google Maps API"
            buttons={[
            ]}
          >
            Spain Renewable Energy
          </Project>
        <Project
            image="energycommunity2.png"
            description="Ongoing Project: Energy Community from RES"
            techStack="Vercel, Maplibre, Next JS, PostgreSQl, NodeJS, Zustand"
            buttons={[
              {
                name: "Browse",
                image: SiGooglechrome,
                link: "https://energytransition.vercel.app/",
              },
            ]}
          >
            Energy Community version 2
        </Project>

        <Project
            image="miningem.png"
            description="Manage mining project site and resource"
            techStack="GCS, Docker, Vue 3, Directus, Nuxt js"
            buttons={[
            ]}
          >
            Mining Management
          </Project>

        <Project
            image="cim.png"
            description="Digital twin of Nusantara the capital city of Indonesia"
            techStack="Vue 3, Nuxt JS, PostgreSQL, Alibaba Cloud, AWS, Maplibre GL, Deck GL, Cesium JS"
            buttons={[
              {
                name: "Browse",
                image: SiGooglechrome,
                link: "https://cim.pu.go.id/",
              },
            ]}
          >
            Digital Twin of Nusatara City
        </Project>

        <Project
            image="ecomm.png"
            description="Energy Community from RES"
            techStack="Vercel, Maplibre, ArcGIS, React, PostgreSQl, NodeJS, redux"
            buttons={[
              {
                name: "Browse",
                image: SiGooglechrome,
                link: "https://energycommunity.vercel.app/",
              },
            ]}
          >
            Energy Community
          </Project>

          <Project
            image="ews.png"
            description="Early Warning System for the new capital city of Indonesia (IKN)"
            techStack="AWS, Directus, Nuxt.JS, Vue JS, PostGreSQL"
            buttons={[
              {
                name: "Browse",
                image: SiGooglechrome,
                link: "https://ews.geodashboard.io/",
              },

            ]}
          >
            Early Warning System IKN
          </Project>

          <Project
            image="pnr.png"
            description="Quality control and Quality Assurance for PUPR datasets"
            techStack="AWS, Directus, Next.JS, React JS, PostGreSQL"
            buttons={[
              {
                name: "Browse",
                image: SiGooglechrome,
                link: "https://pnr.braga.co.id/login",
              },
            ]}
          >
            PNR PUPR
          </Project>

          <Project
            image="igt.png"
            description="Land parcel purchase application"
            techStack="AWS, Directus, Next.JS, React JS, PostGreSQL"
            buttons={[
              {
                name: "Browse",
                image: SiGooglechrome,
                link: "https://igt2024.braga.co.id/login",
              },

            ]}
          >
            IGT Geoportal
          </Project>

          <Project
            image="rbb.png"
            description="Landing page for shrimp company in Indonesia"
            techStack="Vercel, Next.JS, React JS, Directus"
            buttons={[
              {
                name: "Browse",
                image: SiGooglechrome,
                link: "https://rbbiotech.vercel.app/",
              },

            ]}
          >
            Shrimp Company Profile
          </Project>

         

          <Project
            image="birobia.png"
            description="A government site which provide geospatial data"
            techStack="AWS, Directus, Next.JS, React JS,"
            buttons={[
              {
                name: "Browse",
                image: SiGooglechrome,
                link: "https://birobia.jabarprov.go.id",
              },

            ]}
          >
            Birobia
          </Project>


        <Project
            image="mitigation.png"
            description="Geodashboard for post natural disaster, damages and casualties estimator"
            techStack="Carto DN, Leaflet, TypeScript, Google Earth Engine"
            buttons={[
              {
                name: "Github",
                image: FaGithub,
                link: "https://github.com/Fakhriyramadhan25/React-leaflet-Risk_Calculation",
              },
            ]}
          >
            Post Natural Disaster
          </Project>


        <Project
            image="landcover.png"
            description="Geodashboard visualize Historical Land Cover In Indonesia"
            techStack="React, Leaflet, Next JS, Google Earth Engine"
            buttons={[
              {
                name: "Github",
                image: FaGithub,
                link: "https://github.com/Fakhriyramadhan25/FEE-landcover",
              },
            ]}
          >
            Land Cover Geodashboard
          </Project>


          <Project
            image="imageryst.png"
            description="Convert digital scan map to geometry that can be stored to SHP or GeoJSON"
            techStack="Streamlit, Geopandas, GDAL, Folium, Folium, Shapely"
            buttons={[
              // {
              //   name: "Medium",
              //   image: AiFillMediumCircle,
              //   link: "https://medium.com/@fakhriyramadhan25/d45223282325",
              // },

            ]}
          >
            Web-apps: Image Segmentation
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

        {/* <Project
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
          </Project> */}

         

          {/* <Project
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
          </Project> */}

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
