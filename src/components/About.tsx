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

      <div className="grid grid-cols-4 gap-2 mt-8 mx-40 2sm:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
        <div className="">
            <img src="face.jpg" className="rounded-full max-w-xs lg:max-x-xs"/>
        </div>
        <div className="col-span-3">
            <div className="grid grid-cols-5">
              <div>
                <div className="w-12 h-12 bg-highlight rounded-full"></div>
              </div>
              <div className="col-span-4 pe-20">
                <p className="text-lg text-text text-justify md:text-md sm:text-sm 2sm:text-sm lg:text-lg">
                Mapping allows me to explore beyond the limitations of my eyes. I am driven to create maps that provide insightful 
                perspectives in the fields of renewable energy, conservation, public transport, and urban planning. Being involved 
                in urban designing and planning has been my aspiration since college, and it was gratifying to develop public 
                transportation web apps for "Angkot" in Bandung City. Nevertheless, my passion for nature has enlightened me to 
                understand the crises in energy, water, and forests. It has been an exciting journey, with 5 years of experience 
                in the GIS field, including 2 years in web development and 3 years in data analysis.
                </p>
              </div>
              <div>
              </div>
              <div className="col-span-4 pe-20 mt-4">
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
