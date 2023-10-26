import VideoThumb from '@/public/images/OneStudy-hero.svg'
import ModalVideo from '@/components/od-modal-video'

export default function Hero() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#F6F3FF" offset="0%" />
              <stop stopColor="#A590FF" offset="77.402%" />
              <stop stopColor="#92BEFF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
          <div className="inline-flex text-sm font-bold py-1 px-3 m-2 text-blue bg-[#cadffe] rounded-full mb-6">We'll create your first deck for free!</div>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tighter tracking-tighter text-gray-1000 mb-4" data-aos="zoom-y-out">
                Say goodbye to outdated flashcards  <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-1000">for good.
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-md md:text-xl text-gray-1000 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Automatically convert your documents, such as lecture notes and powerpoints, into flashcards.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn bg-purple-400 text-white font-bold rounded mb-6 focus:outline-none hover:bg-[#483285] sm:w-auto" href="https://app.onestudy.io/sign-up" data-test-id="sign-up-hero">
                    <span>Create flashcards now</span>
                    <svg className="w-3 h-3 fill-current text-white-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                    </svg>
                  </a>
                </div>                
              </div>              
            </div>
          </div>

          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />

        </div>

      </div>
    </section>
  )
}