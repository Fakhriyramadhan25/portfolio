import { AiFillMediumCircle } from "react-icons/ai";
import { FiArrowUpRight, FiBookOpen } from "react-icons/fi";

const writingData = [
  {
    image: "3dterrain.jpg",
    title: "Digital Twins: 3D Terrain & RGB Terrain",
    description: "3D Terrain & RGB Terrain to visualize the terrain in 2d maps",
    techStack: "RGBT, React, Maplibre",
    link: "https://medium.com/@fakhriyramadhan25/3d-terrain-rgb-terrain-74c65fe5150f",
    category: "Digital Twins",
  },
  {
    image: "3dtwins.png",
    title: "Digital Twins: 3D tiles building",
    description: "3D tiles building",
    techStack: "Xeokit, React, Cesium, Maplibre",
    link: "https://medium.com/@fakhriyramadhan25/digital-twins-3d-tiles-building-cesium-maplibre-xeokit-deae3942630b",
    category: "Digital Twins",
  },
  {
    image: "angkotmacet.png",
    title: "Public Transportation in Bandung City",
    description:
      "Is public transport information access a solution to tackle public transportation crisis in Bandung city?",
    techStack: "React, Leaflet, Geoserver, PostgreSQL",
    link: "https://medium.com/@fakhriyramadhan25/evaluating-bandung-public-transportation-030953b03da5",
    category: "Urban Planning",
  },
  {
    image: "googleapi.jpg",
    title: "Nearby Restaurants Geocoding",
    description: "Selecting Nearby Restaurants using Google Maps API",
    techStack: "Python, geopandas, Google Maps API",
    link: "https://medium.com/@fakhriyramadhan25/selecting-nearby-restaurants-using-google-maps-api-9f6e5647c467",
    category: "Geocoding",
  },
];

export default function Writing() {
  return (
    <section
      id="writing"
      className="flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-primary to-primary/95 py-20 text-text"
    >
      <div className="mx-auto w-full max-w-7xl px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-highlight/30 bg-highlight/5 px-6 py-2">
            <FiBookOpen className="text-highlight" size={20} />
            <span className="text-sm font-semibold text-highlight">
              Technical Writing
            </span>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-text lg:text-6xl">
            Articles & Insights
          </h2>
          <p className="mx-auto max-w-2xl text-text/70">
            Sharing knowledge about GIS development, digital twins, and
            geospatial technologies
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {writingData.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-highlight/20 bg-primary transition-all duration-500 hover:border-highlight/60 hover:shadow-[0_20px_60px_rgba(var(--highlight-rgb),0.15)]"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Category Badge */}
              <div className="absolute left-6 top-6 z-10 rounded-full border border-highlight/40 bg-primary/90 px-4 py-1.5 text-xs font-semibold text-highlight backdrop-blur-sm">
                {article.category}
              </div>

              {/* Image Container with Parallax Effect */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary" />
                <img
                  src={`./Portfolio/${article.image}`}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="relative space-y-4 p-8">
                {/* Title with Arrow */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold leading-tight text-text transition-colors duration-300 group-hover:text-highlight">
                    {article.title}
                  </h3>
                  <div className="flex-shrink-0 rounded-full border-2 border-highlight/30 bg-highlight/5 p-2 transition-all duration-300 group-hover:border-highlight group-hover:bg-highlight group-hover:text-primary">
                    <FiArrowUpRight
                      size={20}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="line-clamp-2 text-text/70 transition-colors duration-300 group-hover:text-text/90">
                  {article.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {article.techStack.split(",").map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-highlight/80"
                    >
                      {tech.trim()}
                      {idx < article.techStack.split(",").length - 1 && " •"}
                    </span>
                  ))}
                </div>

                {/* Read More Link */}
                <div className="flex items-center gap-2 pt-4 text-sm font-semibold text-highlight">
                  <AiFillMediumCircle size={24} />
                  <span className="transition-all duration-300 group-hover:translate-x-1">
                    Read on Medium
                  </span>
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-highlight via-highlight/80 to-highlight/50 transition-all duration-700 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Medium Profile Link */}
        <div className="mt-16 text-center">
          <a
            href="https://medium.com/@fakhriyramadhan25"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border-2 border-highlight/40 bg-highlight/5 px-8 py-4 font-semibold text-highlight transition-all duration-300 hover:border-highlight hover:bg-highlight hover:text-primary hover:shadow-[0_0_30px_rgba(var(--highlight-rgb),0.3)]"
          >
            <AiFillMediumCircle size={28} />
            <span>View All Articles on Medium</span>
            <FiArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
