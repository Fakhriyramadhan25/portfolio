import { useState } from "react";
import Project from "./Project";
import { AiFillBehanceCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { SiGooglechrome } from "react-icons/si";
import { FiSearch } from "react-icons/fi";

const projectsData = [
  {
    image: "seeri.png",
    title: "SEERI GIZ",
    description:
      "Analysis for Solar Energy implementation in Java, Bali, and Madura",
    techStack: "AWS, Directus, React, next.js , PostGreSQL",
    buttons: [
      {
        name: "Browse",
        image: SiGooglechrome,
        link: "https://latestseeri.geodashboard.io/",
      },
    ],
  },
  {
    image: "bhumi.png",
    title: "BHUMI Land Administration",
    description:
      "Improving UI and data storing through geonode-atlas for ATR-BPN",
    techStack: "Directus, React, next.js, geonode, PostGreSQL",
    buttons: [
      {
        name: "Browse",
        image: SiGooglechrome,
        link: "https://bhumi.atrbpn.go.id/",
      },
    ],
  },
  {
    image: "surge.png",
    title: "Surge Telecommunication",
    description: "Implement FTTH analysis for utility planning",
    techStack: "AWS, Directus, vue 3, nuxt.js , PostGreSQL",
    buttons: [
      {
        name: "Browse",
        image: SiGooglechrome,
        link: "https://surge.geodashboard.io/signin",
        video: "https://www.youtube.com/watch?v=Ulr9CwY4WnY",
      },
    ],
  },
  {
    image: "ugis.png",
    title: "UGIS Digital Twin Mining",
    description: "Implement Digital Twin for mining site",
    techStack: "AWS, Directus, vue 3, nuxt.js, Cesium, PostGreSQL",
    buttons: [
      {
        name: "Browse",
        image: SiGooglechrome,
        link: "https://dev-ugis-insight.ugems.id/",
      },
    ],
  },
  {
    image: "ibeq.png",
    title: "IBEQ KLH",
    description: "Application for Water Quality Monitoring along Indonesia",
    techStack: "AWS, Directus, vue 3, nuxt.js , PostGreSQL",
    buttons: [
      {
        name: "Browse",
        image: SiGooglechrome,
        link: "https://ibeq.geodashboard.io/",
      },
    ],
  },
  {
    image: "simpel.png",
    title: "Simpel KLH",
    description: "Application for Air Quality Monitoring along Indonesia",
    techStack: "AWS, Directus, vue 3, nuxt.js , PostGreSQL",
    buttons: [
      {
        name: "Browse",
        image: SiGooglechrome,
        link: "https://klh-simpel.geodashboard.io/",
      },
    ],
  },
  {
    image: "ewsbanjir.png",
    title: "Early Warning System Bekasi City",
    description:
      "Early warning system for monitoring the hazard level in Bekasi City",
    techStack: "AWS, Directus, vue 3, nuxt.js , PostGreSQL",
    buttons: [
      {
        name: "Browse",
        image: SiGooglechrome,
        link: "https://ewsbanjir.geodashboard.io/",
      },
    ],
  },
  {
    image: "logbook.png",
    title: "Logbook Braga Technologies",
    description:
      "Story maps logging, helps user tells the story through the maps",
    techStack: "AWS, Directus, React, next.js , PostGreSQL",
    buttons: [
      {
        name: "Browse",
        image: SiGooglechrome,
        link: "https://logbook.id/en",
      },
    ],
  },
  {
    image: "ewsgi.png",
    title: "Early Warning System Gunung Ibu",
    description: "Early warning system for monitoring the Gunung Ibu activity",
    techStack: "AWS, Directus, vue 3, nuxt.js , PostGreSQL",
    buttons: [
      {
        name: "Browse",
        image: SiGooglechrome,
        link: "https://gunungibu.geodashboard.io/gunung/ibu/",
      },
    ],
  },
  {
    image: "spainecom.png",
    title: "Spain Renewable Energy",
    description:
      "Helping province government of spain deciding to install the Solar PV",
    techStack: "GCP, Docker, Svelte kit, Google Maps API",
    buttons: [],
  },
  {
    image: "energycommunity2.png",
    title: "Energy Community",
    description: "Ongoing Project: Energy Community from RES",
    techStack: "Vercel, Maplibre, Next JS, PostgreSQl, NodeJS, Zustand",
    buttons: [
      {
        name: "Browse",
        image: SiGooglechrome,
        link: "https://energytransition.vercel.app/",
      },
    ],
  },
  {
    image: "miningem.png",
    title: "Mining Management",
    description: "Manage mining project site and resource",
    techStack: "GCS, Docker, Vue 3, Directus, Nuxt js",
    buttons: [],
  },
  {
    image: "cim.png",
    title: "Digital Twin of Nusatara City",
    description: "Digital twin of Nusantara the capital city of Indonesia",
    techStack:
      "Vue 3, Nuxt JS, PostgreSQL, Alibaba Cloud, AWS, Maplibre GL, Deck GL, Cesium JS",
    buttons: [
      {
        name: "Browse",
        image: SiGooglechrome,
        link: "https://cim.pu.go.id/",
      },
    ],
  },
  {
    image: "ews.png",
    title: "Early Warning System IKN",
    description:
      "Early Warning System for the new capital city of Indonesia (IKN)",
    techStack: "AWS, Directus, Nuxt.JS, Vue JS, PostGreSQL",
    buttons: [
      {
        name: "Browse",
        image: SiGooglechrome,
        link: "https://ews.geodashboard.io/",
      },
    ],
  },
  {
    image: "pnr.png",
    title: "PNR PUPR",
    description: "Quality control and Quality Assurance for PUPR datasets",
    techStack: "AWS, Directus, Next.JS, React JS, PostGreSQL",
    buttons: [
      {
        name: "Browse",
        image: SiGooglechrome,
        link: "https://pnr.braga.co.id/login",
      },
    ],
  },
  {
    image: "igt.png",
    title: "IGT Geoportal",
    description: "Land parcel purchase application",
    techStack: "AWS, Directus, Next.JS, React JS, PostGreSQL",
    buttons: [
      {
        name: "Browse",
        image: SiGooglechrome,
        link: "https://igt2024.braga.co.id/login",
      },
    ],
  },
  {
    image: "rbb.png",
    title: "Shrimp Company Profile",
    description: "Landing page for shrimp company in Indonesia",
    techStack: "Vercel, Next.JS, React JS, Directus",
    buttons: [
      {
        name: "Browse",
        image: SiGooglechrome,
        link: "https://rbbiotech.vercel.app/",
      },
    ],
  },
  {
    image: "birobia.png",
    title: "Birobia",
    description: "A government site which provide geospatial data",
    techStack: "AWS, Directus, Next.JS, React JS,",
    buttons: [
      {
        name: "Browse",
        image: SiGooglechrome,
        link: "https://birobia.jabarprov.go.id",
      },
    ],
  },
  {
    image: "mitigation.png",
    title: "Post Natural Disaster",
    description:
      "Geodashboard for post natural disaster, damages and casualties estimator",
    techStack: "Carto DN, Leaflet, TypeScript, Google Earth Engine",
    buttons: [
      {
        name: "Github",
        image: FaGithub,
        link: "https://github.com/Fakhriyramadhan25/React-leaflet-Risk_Calculation",
        video: "https://www.youtube.com/watch?v=VJu8IEDNOv8",
      },
    ],
  },
  {
    image: "landcover.png",
    title: "Land Cover Geodashboard",
    description: "Geodashboard visualize Historical Land Cover In Indonesia",
    techStack: "React, Leaflet, Next JS, Google Earth Engine",
    buttons: [
      {
        name: "Github",
        image: FaGithub,
        link: "https://github.com/Fakhriyramadhan25/FEE-landcover",
      },
    ],
  },
  {
    image: "imageryst.png",
    title: "Web-apps: Image Segmentation",
    description:
      "Convert digital scan map to geometry that can be stored to SHP or GeoJSON",
    techStack: "Streamlit, Geopandas, GDAL, Folium, Folium, Shapely",
    buttons: [],
  },
  {
    image: "spadetrans.png",
    title: "Web-apps: Public Transportation",
    description:
      "Angkutan Kota Bandung shortest path route selection using leaflet, pgrouting, and geoserver",
    techStack: "React, leaflet, geoserver, postgreSQL",
    buttons: [
      {
        name: "Github",
        image: FaGithub,
        link: "https://github.com/Fakhriyramadhan25/React-Leaflet-Bandung-Transportations",
        video: "https://www.youtube.com/watch?v=r16rwxDguu0",
      },
    ],
  },
  {
    image: "geodashboard.png",
    title: "Smart Cities Geodashboard",
    description:
      "Geodashboard with attribute query, drawing, area calculating, coordinate detection, and layer switcher",
    techStack: "Chakra UI, React, OpenLayers, geoserver, postgreSQL",
    buttons: [
      {
        name: "Github",
        image: FaGithub,
        link: "https://github.com/Fakhriyramadhan25/OpenLayers-ReactJS",
      },
    ],
  },
  {
    image: "powerlocation.png",
    title: "The Power Of Location",
    description:
      "The latest portfolio comprises of WebDev, GIS & data analysis, and Community Development",
    techStack: "WebDev, ArcGIS, Python, React",
    buttons: [
      {
        name: "Behance",
        image: AiFillBehanceCircle,
        link: "https://www.behance.net/gallery/178918233/The-power-of-Location",
      },
    ],
  },
];

export default function Portfolio() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projectsData.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.techStack.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section
      id="portfolio"
      className="flex min-h-screen w-full items-center justify-center bg-primary py-20 text-text"
    >
      {/* Container */}
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-4 text-center">
        <h2 className="pb-4 text-4xl font-bold text-text lg:text-6xl">
          Portfolio
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-text/70">
          Explore my web development projects spanning GIS applications,
          environmental monitoring systems, and digital twins
        </p>

        {/* Search Bar */}
        <div className="mx-auto mb-12 w-full max-w-md">
          <div className="group relative">
            <FiSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-highlight transition-colors group-focus-within:text-highlight"
              size={20}
            />
            <input
              type="text"
              placeholder="Search projects by name, description, or tech stack..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-full border-2 border-highlight/30 bg-primary py-3 pl-12 pr-4 text-text outline-none transition-all duration-300 placeholder:text-text/50 focus:border-highlight focus:shadow-[0_0_20px_rgba(var(--highlight-rgb),0.3)]"
            />
          </div>
          {searchTerm && (
            <p className="mt-2 text-sm text-text/60">
              Found {filteredProjects.length} project
              {filteredProjects.length !== 1 ? "s" : ""}
            </p>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Project
                image={project.image}
                description={project.description}
                techStack={project.techStack}
                buttons={project.buttons}
              >
                {project.title}
              </Project>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredProjects.length > 6 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mx-auto mt-12 rounded-full border-2 border-highlight px-8 py-3 font-semibold text-highlight transition-all duration-300 hover:bg-highlight hover:text-primary hover:shadow-[0_0_20px_rgba(var(--highlight-rgb),0.4)]"
          >
            {showAll
              ? "Show Less"
              : `Show All ${filteredProjects.length} Projects`}
          </button>
        )}

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-xl text-text/60">
              No projects found matching your search.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
