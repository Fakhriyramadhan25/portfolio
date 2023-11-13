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
          <Skill image="javascript.png">JavaScript</Skill>
          <Skill image="python.png">Python</Skill>
          <Skill image="java.png">Java</Skill>
          <Skill image="geopandas.png">Geopandas</Skill>
          <Skill image="sql.png">SQL</Skill>
          <Skill image="postgresql.png">PostgreSQL</Skill>
          <Skill image="mongodb.png">MongoDB</Skill>
          <Skill image="react.png">React</Skill>
          <Skill image="redux.png">Redux</Skill>
          <Skill image="tailwindcss.png">Tailwind CSS</Skill>
          <Skill image="arcgispro.png">ArcgisPro</Skill>
          <Skill image="fme.png">FME</Skill>
          <Skill image="ol.png">OpenLayers</Skill>
          <Skill image="leaflet.png">Leaflet</Skill>
          <Skill image="gmaps.png">Gmaps API</Skill>
          <Skill image="deckgl.png">DeckGL</Skill>
          <Skill image="arcgisjs.png">Arcgis JS API</Skill>
         
        </div>
      </div>
    </section>
  );
}
