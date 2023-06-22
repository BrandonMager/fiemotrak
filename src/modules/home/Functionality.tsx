"use client"
import { A11y, Autoplay, Scrollbar, Navigation, Pagination} from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperImage1 from '../../images/swiper1.png'
import SwiperImage2 from '../../images/swiper2.png'
import SwiperImage3 from '../../images/swiper3.png'
import 'swiper/css';

export default function Functionality(){
    const data = [
        {id: 1, heading: 'Boost your analysis', content: 'Get access to new indicators and indexes that can shape your strategies and actions in the market.', source: SwiperImage1.src},
        {id: 2, heading: 'Unleash the crypto dimension', content: 'Accelerate your portfolio through a series of trackers and insights on crypto.', source: SwiperImage2.src},
        {id: 3, heading: 'Discover stocks with indicators', content: 'Delve into the market with indictors and news trends from financial sources.', source: SwiperImage3.src}
    ]

    return (<div className=""><div className="flex flex-col m-auto w-full items-center justify-center relative my-[90px] ">
        <div className="text-4xl mt-24 text-center"> 
           <h1 className="font-bold"> Functionalities</h1>
        </div>
        <div className="w-full flex">
        <Swiper
            modules={[Pagination, Navigation, Scrollbar, A11y, Autoplay]}
            pagination={{clickable: true}}
            centeredSlides={true}
            autoplay
            breakpoints={
               {
                1000: {
                    slidesPerView: 1,
                    spaceBetween: 100,
                },
                
                1150: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
                2000: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                }
               }
            }
        >
            {data.map((element, index) => (
                <SwiperSlide key = {index}>
                    {({isActive}) => (
                    <div className="py-[100px] md:py-[120px] flex items-center justify-evenly">
                        <div className="w-[90%] md:w-[70%] md:mx-auto flex flex-col items-center justify-center ">
                            <div className="relative">
                                <div  className={`w-[90%] text-center items-center mx-auto md:w-[630px] md:min-h-[330px] flex flex-col p-[20px] px-[32px] md:p-[32px] shadow-lg md:shadow-2xl bg-gradient-to-r from-black via-[#045944] to-black transition-all duration-500 ${
                          isActive ? "scale-100 block oveflow-visible z-50" : "scale-90 oveflow-hidden z-20"
                                }`}>
                                    <img className="w-max h-[200px]" src = {element.source} />
                                    <h2 className="text-4xl my-2 font-medium">{element.heading}</h2>
                                    <p className="text-gray-400 text-xl">{element.content}</p>
                                </div>

                            </div>
                        </div>
                    </div>   
                    )}
                </SwiperSlide>
            ))}
        </Swiper>
        </div>
    </div>
    </div>)
}