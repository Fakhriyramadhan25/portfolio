import Project from "./Project";
import {AiFillMediumCircle} from "react-icons/ai";

export default function Writing() {
  return (
    <section
      id="writing"
      className="flex h-max min-h-screen w-full items-center justify-center bg-primary text-text"
    >
      {/* Container */}
      <div className="mx-auto flex h-full w-full max-w-fit flex-col justify-center text-center">
      <h3 className="mt-4 inline pb-2 text-2xl font-bold text-text lg:text-3xl">
          Writing
        </h3>

        {/* Projects Grid */}
        <div className="mx-14 grid grid-cols-1 gap-16 py-8 text-center md:grid-cols-2 lg:mx-0 xl:grid-cols-3">
        
        <Project
            image="angkotmacet.png"
            description="Is public transport information access a solution to tackle public transportation crisis in Bandung city?"
            techStack="React, Leaflet, Geoserver, PostgreSQL"
            buttons={[
              {
                name: "Medium",
                image: AiFillMediumCircle,
                link: "https://medium.com/@fakhriyramadhan25/evaluating-bandung-public-transportation-030953b03da5",
              },
            ]}
          >
            Public Transportation in Bandung City
          </Project>

        <Project
            image="googleapi.jpg"
            description="Selecting Nearby Restaurants using Google Maps API"
            techStack="Python, geopandas, Google Maps API"
            buttons={[
              {
                name: "Medium",
                image: AiFillMediumCircle,
                link: "https://medium.com/@fakhriyramadhan25/selecting-nearby-restaurants-using-google-maps-api-9f6e5647c467",
              },
            ]}
          >
            Nearby Restaurants Geocoding
          </Project>


        </div>
      </div>
    </section>
  );
}
