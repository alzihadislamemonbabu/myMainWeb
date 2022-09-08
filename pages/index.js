/* eslint-disable @next/next/no-img-element */
import images from "../components/images"
import { useScrollBy } from "react-use-window-scroll";
import { useEffect, useState, useRef } from "react";





function index() {
  const [colorRow, setColorRow] = useState(0)
  const Ref = useRef()


  useEffect(() => {
    window.addEventListener('scroll', () => {
      const value = window.scrollY
      setColorRow(value * 2.5)
    })

  }, [])
  console.log(colorRow);


  return (
    <>
      <style jsx>{`
                .uniqueWidth{
                  width:${colorRow + 'px'}
                }
                `}</style>
      <nav className="md:bg-[#3F3D56] sm:bg-[#EDEDED]">
        <headers className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center md:bg-[#3F3D56] sm:bg-[#EDEDED]">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 md:bg-[#3F3D56] sm:bg-[#EDEDED]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl cursor-pointer md:bg-[#3F3D56] sm:bg-[#EDEDED] lg:text-white sm:text-black">Emon</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-white bg-[#3F3D56]">

            </nav>

            <button className="inline-flex items-center text-black bg-gray-200 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 font-bold" >Contact
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>

            <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer ml-5 lg:bg-[#3F3D56]            mg:bg-[#3F3D56] bg-[#EDEDED] lg:mt-0 md:mt-0 mt-5 rounded-[30px]">
              <input type="checkbox" value="" id="default-toggle" className="sr-only peer" />
              <div className="lg:bg-[#EDEDED] md:bg-[#EDEDED] md:rounded-3xl bg-gray-700 w-11 h-6 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-red-600 peer-checked:bg-blue-600"></div>

            </label>


          </div>
        </headers>
      </nav>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-[2rem]  h-[5rem] text-3xl mb-4 font-bold text-gray-900">Hello Its me
              <br className="hidden lg:inline-block" />MD Emon
            </h1>
            <p className="mb-8 leading-relaxed lg:w-[20rem] md:w-none sm:w-[60%]">An enthusiastic product designer currently shaping the future of software development by designing smooth user-interfaces that promote user interaction with information and data. While traveling around the world.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contact</button>

            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="dev.svg" />
          </div>
        </div>
      </section>


      {/* content  */}

      <div>



        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div className="uniqueWidth h-full bg-indigo-500" ></div>

              </div>
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Space The Final Frontier</h1>
                <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503" />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Shooting Stars</h2>
                <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1204x504" />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">The Catalyzer</h2>
                <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1205x505" />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">The 400 Blows</h2>
                <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

      </div >


    </>
  )
}

export default index