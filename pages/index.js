/* eslint no-use-before-define: 0 */  // --> OFF
/* react/no-unknown-property*/

import { useScrollBy } from "react-use-window-scroll";
import { useEffect, useState, useRef } from "react";
import { BsInstagram } from 'react-icons/bs';
import styles from '../styles/Home.module.css'
import Typed from 'react-typed';






function index() {


  // carausel images 
  const [carauseImg, setCarauselImg] = useState('web1.svg')

  // changing imgs 
  const handleImg1 = () => {
    setCarauselImg('web1.svg')

  }
  const handleImg2 = () => {
    setCarauselImg('web2.svg')

  }
  const handleImg3 = () => {
    setCarauselImg('web3.svg')

  }
  const handleImg4 = () => {
    setCarauselImg('web4.svg')

  }



  const [colorRow, setColorRow] = useState(0)
  const ref = useRef()


  useEffect(() => {
    window.addEventListener('scroll', () => {
      const value = window.scrollY
      setColorRow(value * 2.5)
    })

  }, [])

  const handleScr = () => {
    const value = window.scrollY
    window.scroll({
      top: 6000,

      behavior: 'smooth'
    });
  }



  return (

    <>

      <div className={`bg-[#EDEDED]`} ref={ref}>

        <style jsx>{`
                .uniqueWidth{
                  width:${colorRow + 'px'}
                }
          
                `}</style>

        {/* navigation bar  */}
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

              <button className="inline-flex items-center text-black bg-gray-200 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 font-bold" onClick={handleScr}>Contact
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>



            </div>
          </headers>
        </nav>

        <section className="text-gray-600 body-font ">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-[2rem]  h-[5rem] text-3xl mb-4 font-bold text-gray-900">Hello Its me
                <br className="hidden lg:inline-block" />MD Emon
              </h1>
              <p className="mb-8 leading-relaxed lg:w-[20rem] md:w-none sm:w-[60%]">An enthusiastic product designer currently shaping the future of software development by designing smooth user-interfaces that promote user interaction with information and data. While traveling around the world.</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleScr}>Contact</button>

              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className="object-cover object-center rounded" alt="hero" src={'dev.svg'} />
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
                  <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">MY SKILLSET</h1>
                  <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 lg:invisible md:invisible visible">Graphic Design, Interface Design &
                    User Experience </p>
                </div>
              </div>
              <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6 ">
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img alt="content" className="object-cover object-center h-full w-full" src="phone.svg" />
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Graphic Design, Interface Design &
                    User Experience</h2>
                  <p className="text-base leading-relaxed mt-2">I specialize in building complex web applications, leading front-end teams, digital product design and developing visual design systems.
                    I worked with numerous clients from all around the world from early startups to well-established companies.   Let’s create something awesome together!</p>
                  <a className="cursor-pointer text-indigo-500 inline-flex items-center mt-3">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2 " viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img alt="content" className="object-cover object-center h-full w-full" src="backend.svg" />
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Back-End Development</h2>
                  <p className="text-base leading-relaxed mt-2">Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites. Unlike front-end developers, who control everything you can see on a website, back-end developers are involved in data storage, security, and other server-side functions that you cannot see</p>
                  <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img alt="content" className="object-cover object-center h-full w-full" src="mordern.svg" />
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Modern Design</h2>
                  <p className="text-base leading-relaxed mt-2">Responsive Web design is the approach that suggests that design and development should respond to the user's behavior and environment based on screen size, platform and orientation.</p>
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



        {/* technology  */}
        {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
        <div className="bg-[#EDEDED] py-12 container sm:pl-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-lg font-semibold text-indigo-600">Modern Web Development </h2>
              <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl h-[4rem]"> Web Development Technology</p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Technology I use to  Build Modern  Website</p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                <div className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                      <img src="react.svg" alt="" />

                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">React Js</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.</dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">

                      <img src="next.svg" alt="" className="h-6 w-6" />

                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">Next Js</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites.</dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                      <img src="tailwind.svg" alt="" className="h-6 w-6" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">Tailwind Css</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">

                      <img src="drefat.svg" alt="" />

                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">NodeJs</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>





        {/* recent projects */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
            <h1 className="text-[2rem] font-bold text-black mb-5 text-center">Recent Projects</h1>

            <div className="flex mx-auto flex-wrap mb-20">
              <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start title-font font-medium inline-flex items-center leading-none border-indigo-500 text-indigo-500 hover:text-gray-900 tracking-wider rounded-t cursor-pointer" onClick={handleImg1}>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24" >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>Project 1
              </a>
              <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start title-font font-medium inline-flex items-center leading-none border-indigo-500 text-indigo-500 hover:text-gray-900 tracking-wider cursor-pointer" onClick={handleImg2}>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24" >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>Project 2
              </a>
              <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start title-font font-medium inline-flex items-center leading-none border-indigo-500 text-indigo-500 hover:text-gray-900 tracking-wider cursor-pointer" onClick={handleImg3}>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24" >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>Project 3
              </a>
              <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start title-font font-medium inline-flex items-center leading-none border-indigo-500 text-indigo-500 hover:text-gray-900 tracking-wider cursor-pointer" onClick={handleImg4}>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24" >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>Project 4
              </a>
            </div>
            <img className="xl:w-[80%] lg:w-[80%] md:w-[80%] w-[80%] block mx-auto mb-10 object-cover object-center rounded" alt="hero" src={`${carauseImg}`} />
            <div className="flex flex-col text-center w-full">
              <h1 className="text-xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
            </div>
          </div>
        </section>




        {/* about me section  */}

        <section className="text-gray-600 body-font">
          <h1 className="text-center text-[2rem] text-black font-bold">About me</h1>
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              {/* <img className="object-cover object-center rounded" alt="hero" src="undraw_coding_re_iv62.svg" /> */}

              <svg className="object-cover object-center rounded" viewBox="0 0 879 483" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="undraw_coding_re_iv62 1">
                  <g id={styles.programerHead}>
                    <path id="Ellipse 276" d="M441.853 169.877C480.88 169.877 512.518 138.238 512.518 99.2107C512.518 60.183 480.88 28.5448 441.853 28.5448C402.825 28.5448 371.187 60.183 371.187 99.2107C371.187 138.238 402.825 169.877 441.853 169.877Z" fill="#FEB8B8" />
                    <path id="Path 1461" d="M507.855 38.246C497.29 21.0899 480.752 8.44813 461.425 2.75434L452.75 9.08513V0.864782C448.108 0.15437 443.41 -0.119301 438.718 0.0473682L431.233 6.81957V0.610006C420.151 1.98709 409.475 5.64536 399.878 11.3541C390.28 17.0629 381.969 24.6983 375.47 33.7789C359.216 57.2111 356.472 89.8105 372.459 113.431C376.847 99.9436 382.174 87.2889 386.563 73.803C390.013 74.2732 393.508 74.2902 396.962 73.8535L402.301 61.3949L403.793 73.3262C420.343 71.8849 444.889 68.7188 460.578 65.8184L459.052 56.6648L468.18 64.2709C472.986 63.1646 475.84 62.1606 475.605 61.3936C487.273 80.2048 501.553 92.2192 513.22 111.03C517.652 84.5056 522.752 62.4507 507.855 38.246Z" fill="#2F2E41" />
                    <path id="Vector" d="M518.868 93.9516H515.606C515.606 49.2216 481.949 12.8309 440.58 12.8309C399.21 12.8309 365.554 49.2216 365.554 93.9516H362.292C362.292 47.2767 397.412 9.30399 440.58 9.30399C483.748 9.30401 518.868 47.2768 518.868 93.9516Z" fill="#6C63FF" />
                    <path id="Vector_2" d="M376.871 125.549C365.516 125.549 356.311 115.597 356.311 103.32V92.205C356.311 79.928 365.516 69.9756 376.871 69.9756V125.549H376.871Z" fill="#6C63FF" />
                    <path id="Vector_3" d="M508.094 69.9756C519.449 69.9756 528.654 79.928 528.654 92.205V103.32C528.654 115.597 519.449 125.549 508.094 125.549V69.9756Z" fill="#6C63FF" />
                  </g>
                  <g id="rest">
                    <path id="Vector_4" d="M593.835 280.93C591.405 266.311 588.898 251.411 582.104 238.241C577.639 229.615 570.55 221.395 560.994 219.689C559.112 219.521 557.262 219.093 555.498 218.417C552.698 217.068 515.073 195.589 509.092 191.848C503.958 188.637 495.852 182.69 491.765 182.69C487.654 182.6 471.888 186.269 410.352 181.459C410.352 181.459 393.447 188.122 380.366 196.202C380.168 196.071 316.497 230.262 314.105 230.172C309.575 229.982 305.364 232.882 302.767 236.535C300.171 240.187 298.953 244.709 297.678 249.08C311.585 280.05 324.309 311.06 338.217 342.03C338.868 343.196 339.214 344.509 339.223 345.844C338.943 347.231 338.351 348.535 337.492 349.659C330.672 360.615 330.889 374.395 331.634 387.272C332.38 400.149 333.302 413.75 327.547 425.292C325.982 428.461 323.946 431.361 322.457 434.53C318.971 441.707 317.711 464.661 319.747 472.372L574.868 479.68C569.383 464.602 593.835 280.93 593.835 280.93Z" fill="#6C63FF" />
                    <path id="Path 1421" d="M275.625 343.403C275.116 347.085 275.065 350.817 275.473 354.512L279.129 407.024C279.473 411.974 279.811 416.911 280.275 421.848C281.152 431.429 282.463 440.934 284.09 450.426C284.126 451.773 284.696 453.051 285.674 453.979C286.652 454.907 287.958 455.409 289.306 455.375C305.402 458.781 322.032 458.645 338.459 457.717C363.526 456.318 427.657 453.671 431.575 448.581C435.493 443.491 433.21 435.259 428.101 431.143C422.992 427.028 338.362 416.994 338.362 416.994C339.189 410.441 341.684 404.27 344.05 398.048C348.301 387.013 352.271 375.616 352.347 363.795C352.423 351.974 347.97 339.545 338.286 332.773C330.321 327.213 320.065 326.182 310.358 326.411C303.296 326.614 291.093 324.922 284.643 327.683C279.538 329.931 276.579 338.405 275.625 343.403Z" fill="#FBBEBE" />
                    <path id="Path 1430" d="M296.942 250.023C295.703 251.321 294.742 252.858 294.118 254.541C283.833 277.72 277.758 302.546 276.177 327.856C276.205 329.09 275.921 330.312 275.35 331.406C274.788 332.135 274.162 332.812 273.48 333.429C272.885 334.134 272.435 334.95 272.155 335.829C271.876 336.708 271.772 337.633 271.85 338.552C271.928 339.472 272.186 340.366 272.61 341.186C273.034 342.005 273.615 342.733 274.32 343.328C274.435 343.425 274.554 343.519 274.676 343.609C276.775 339.658 281.801 338.367 286.268 338.023C307.657 336.331 328.55 346.282 350.002 345.531C348.489 340.301 346.312 335.275 345.077 329.983C339.619 306.481 353.234 280.894 344.887 258.257C343.219 253.727 340.433 249.274 336.044 247.289C334.226 246.556 332.324 246.052 330.382 245.79C324.961 244.811 314.17 240.624 308.929 242.304C306.995 242.928 306.232 244.747 304.628 245.846C302.192 247.402 298.961 247.974 296.942 250.023Z" fill="#6C63FF" />
                    <path id="Path 1421_2" d="M593.988 327.683C587.537 324.922 575.334 326.614 568.272 326.411C558.565 326.182 548.31 327.213 540.344 332.773C530.661 339.545 526.207 351.974 526.283 363.795C526.36 375.616 530.33 387.013 534.58 398.048C536.946 404.27 539.441 410.441 540.268 416.994C540.268 416.994 455.638 427.028 450.529 431.143C445.42 435.259 443.137 443.491 447.055 448.581C450.973 453.671 573.228 458.781 589.324 455.375C590.672 455.409 591.978 454.907 592.956 453.979C593.934 453.051 594.504 451.773 594.541 450.426C596.167 440.934 597.478 431.429 598.355 421.848C598.82 416.911 599.158 411.974 599.501 407.024L603.157 354.512C603.565 350.817 603.514 347.086 603.005 343.403C602.051 338.405 599.092 329.931 593.988 327.683Z" fill="#FBBEBE" />
                    <path id="Path 1430_2" d="M574.002 245.846C572.399 244.747 571.636 242.928 569.701 242.304C564.46 240.624 553.669 244.811 548.248 245.79C546.306 246.052 544.404 246.556 542.587 247.289C538.197 249.274 535.411 253.727 533.744 258.257C525.397 280.894 539.012 306.481 533.553 329.983C532.319 335.275 530.142 340.301 528.628 345.531C550.081 346.282 570.974 336.331 592.362 338.023C596.829 338.367 601.855 339.658 603.954 343.609C604.076 343.519 604.195 343.425 604.311 343.328C605.016 342.733 605.597 342.005 606.021 341.186C606.444 340.366 606.703 339.472 606.781 338.552C606.859 337.633 606.755 336.708 606.475 335.829C606.195 334.95 605.745 334.135 605.151 333.429C604.468 332.812 603.842 332.135 603.28 331.406C602.71 330.312 602.425 329.09 602.453 327.856C600.873 302.546 594.798 277.72 584.513 254.541C583.889 252.858 582.928 251.321 581.688 250.023C579.669 247.974 576.438 247.402 574.002 245.846Z" fill="#6C63FF" />
                    <path id="Vector_5" d="M420.924 457.883C431.457 457.883 439.996 449.344 439.996 438.81C439.996 428.277 431.457 419.738 420.924 419.738C410.39 419.738 401.851 428.277 401.851 438.81C401.851 449.344 410.39 457.883 420.924 457.883Z" fill="#FBBEBE" />
                    <path id="Vector_6" d="M463.156 457.883C473.69 457.883 482.229 449.344 482.229 438.81C482.229 428.277 473.69 419.738 463.156 419.738C452.623 419.738 444.083 428.277 444.083 438.81C444.083 449.344 452.623 457.883 463.156 457.883Z" fill="#FBBEBE" />
                    <path id="Vector_7" d="M580.888 481.788H318.857C315.797 481.785 312.865 480.568 310.701 478.405C308.538 476.242 307.321 473.309 307.317 470.25V311.283C307.321 308.224 308.538 305.291 310.701 303.128C312.865 300.965 315.797 299.748 318.857 299.744H580.888C583.947 299.748 586.88 300.965 589.043 303.128C591.206 305.291 592.423 308.224 592.427 311.283V470.25C592.423 473.309 591.206 476.242 589.043 478.405C586.88 480.568 583.947 481.785 580.888 481.788Z" fill="#3F3D56" />
                    <path id="Ellipse 263" d="M449.237 398.401C453.453 398.401 456.871 394.983 456.871 390.766C456.871 386.55 453.453 383.132 449.237 383.132C445.02 383.132 441.602 386.55 441.602 390.766C441.602 394.983 445.02 398.401 449.237 398.401Z" fill="white" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 lg:h-24 md:h-24 h-12">I am a
                <br className="hidden lg:inline-block" />professional programer
              </h1> */}


              <h1 className="lg:text-[3rem] text-black font-medium ">
                <Typed
                  strings={[
                    'I am a Programer',
                    'I am a Front-End Designer',
                    'I am a Back-End Developer']}
                  typeSpeed={40}
                  backSpeed={50}

                  loop >

                </Typed>

              </h1>




              <p className="mb-8 leading-relaxed">I’ve always been passionate about pixels and design projects and haven’t stopped working and learning about new technologies . Other than sitting in from of my display I enjoy myself in casual sports, such as bowling or playing football with friends.

                I'm grateful that my job allows me to work from anywhere.  I’m active on Instagram where I share most of the and all info about my upcoming projects.

                I also like sharing my experiences on instagram.</p>
              <div className="flex justify-center">

                <BsInstagram className="text-[2rem] cursor-pointer hover:text-blue-500 transition-all" />
                <h1 className="ml-5 text-[20px] font-bold">Instagram</h1>


              </div>
            </div>
          </div>
        </section>


        {/* contact pages  */}
        <section className="text-gray-600 body-font mt-[-5rem]">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 h-10">What's Next</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">If you'd like to talk about a project you want help with or need an advice about product design, just drop me a message
                <span className="font-bold"> at emonhasan520499@gmail.com</span>
                I'm currently Available for any design systems projects, dashboard designs or landing pages gigs.</p>
            </div>

          </div>
        </section>



        {/* write me email  */}



        <section className="text-gray-600 body-font relative sm:mt-[-5rem] mt-[-15rem]">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Write Me Email</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a className="text-indigo-500">example@email.com</a>
                  <p className="leading-normal my-5">49 Smith St.
                    <br />Saint Cloud, MN 56301
                  </p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-4 text-gray-500">
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-4 text-gray-500">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a className="ml-4 text-gray-500">
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* footer  */}

        <footer className="text-gray-600 body-font">
          <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Emon</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">©BUILT FROM SCRATCH BY ME —
              <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@emon50249</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </footer>


      </div>

    </>
  )
}

export default index