import Skill from "./Skill";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex h-max min-h-screen w-full items-center justify-center bg-primary text-text"
    >
      {/* Container */}
      <div className="mx-auto flex h-full w-full max-w-fit flex-col justify-center text-center">
        <h2 className="mt-4 inline pb-8 text-4xl font-bold text-text lg:text-6xl">
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-8 py-4 text-center 2sm:grid-cols-2 sm:gap-12 md:grid-cols-3 xl:grid-cols-4">
          <Skill image="JavaScript.png">JavaScript</Skill>
          <Skill image="Python.png">Python</Skill>
          <Skill image="Java.png">Java</Skill>
          <Skill image="Geopandas.png">Geopandas</Skill>
          <Skill image="SQL.png">SQL</Skill>
          <Skill image="PostgreSQL.png">PostgreSQL</Skill>
          <Skill image="MongoDB.png">MongoDB</Skill>
          <Skill image="React.png">React</Skill>
          <Skill image="Redux.png">Redux</Skill>
          <Skill image="TailwindCSS.png">Tailwind CSS</Skill>
          <Skill image="ArcgisPro.png">ArcgisPro</Skill>
          <Skill image="FME.png">FME</Skill>
          <Skill image="Ol.png">OpenLayers</Skill>
          <Skill image="Leaflet.png">ArcgisPro</Skill>
          <Skill image="Gmaps.png">Gmaps API</Skill>
          <Skill image="DeckGL.png">DeckGL</Skill>
          <Skill image="ArcgisJS.png">Arcgis JS API</Skill>
         
        </div>
      </div>
    </section>
  );
}
