export default function Banner() {
  return (
    <>
      <div className="carousel w-full mt-10">
        <div className="carousel-item relative w-full h-[280px] md:h-[500px] lg:h-[750px]">
          <img
            src="https://i.ibb.co/Y08nsC7/360-F-360193480-ki-F7-OU7k3-YUh-AADb-LQzob-EFwg-Oeej-HZJ.png"
            className="w-full h-full"
          />
          <div className="absolute grid pt-0 md:pt-16 lg:pt-0 text-center w-full gap-y-4 md:gap-y-10 lg:gap-y-5 lg:h-full bg-gradient-to-b from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white font-bold lg:font-extrabold text-2xl md:text-4xl lg:text-5xl mt-12 md:mt-12 lg:mt-44">
              Donate Your Blood to Us, Save More <br /> Life Together
            </div>
            <div className="text-white font-medium text-base lg:text-xl">
              Save Lives with Your Blood Donation! <br /> Every pint can help
              save up to three lives. <br /> Join us today and be a hero in your
              community!
            </div>
            <div className="mb-6 md:mb-8 lg:mb-56">
              <div className="btn btn-outline btn-accent mr-4">Donate Now</div>
              <div className="btn btn-outline btn-info">Explore More</div>
            </div>
          </div>
        </div>
        {/* <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div> */}
      </div>
    </>
  );
}
