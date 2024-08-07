import { ReactNode } from "react";


export default function About({ title }: { title: ReactNode }) {


  return (
    <section
      id="about"
      className=" flex h-max min-h-screen w-full bg-primary p-6"
    >
      {/* Container */}
      <div className="mx-auto flex h-full w-full max-w-fit flex-col items-center justify-center">
        {/* Form */}
          {title && (
            <h2 className="mt-4 inline text-3xl font-bold text-text 2sm:text-4xl lg:text-6xl">
              {title}
            </h2>
          )}

      <div className="grid grid-cols-1 gap-2 mt-8 mx-40 2sm:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:grid-cols-4 lg:mx-40 md:mx-20 2sm:mx-8">
        <div className="col-span-1 2sm:col-span-0">
            <img src="face.jpg" className="rounded-full max-w-0 xl:max-w-xs"/>
        </div>
        <div className="col-span-1 lg:col-span-3 2sm:col-span-4">
            <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              <div>
                <div className="w-12 h-12 bg-highlight rounded-full"></div>
              </div>
              <div className="col-span-4 pe-20 2sm:pe-0">
                <p className="text-lg text-text text-justify md:text-md 2sm:text-md sm:text-md lg:text-lg">
                Ever since I worked on my first Geographic Information System (GIS) project, I knew I had found my passion. 
                This journey led me to a career where I've spent 4 years as a GIS Developer and Software Engineer. 
                I develop web applications for public transportation, renewable energy, and urban planning. 
                I find immense satisfaction in designing platforms that transform complex data into accessible insights, 
                helping users leverage location intelligence for better decision-making.
                </p>
              </div>
              <div>
              </div>
              <div className="col-span-4 pe-20 mt-4 2sm:pe-0">
                <hr className="rounded h-1 w-auto bg-gray-200"/>
                <div className="mt-5 gap-5">
                <h2 className="inline text-xl font-bold text-text 2sm:text-2xl lg:text-4xl">
                  Educational <span className="text-highlight">background</span>
                </h2>
                
                </div>
                <div className="mt-6 space-y-2">
                  <p className="text-lg text-text text-justify ">
                    MSc. Smart Cities & Communities - Heriot Watt University (2021-2023)
                  </p>
                  <p className="text-lg text-text text-justify">
                    MSc. ICT - International Hellenic University (2021-2023)
                  </p>
                  <p className="text-lg text-text text-justify">
                    BE. Geodetic and Geomatic - Institut Teknologi Bandung (2015-2019)
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
      </div>

         
    </section>
  );
}
