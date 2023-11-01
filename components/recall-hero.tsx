export default function Hero() {
  return (
    <section className="relative">
      <div className="pt-28 pb-12 md:pt-24 md:pb-10">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tighter tracking-tighter text-gray-1000 mb-4" data-aos="zoom-y-out">
              Train {" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-1000">recall. {" "}
              </span>
              <br></br>
              Not memorization.
            </h1>
            <p className="max-w-2xl text-md md:text-xl text-gray-1000 mb-8" data-aos="zoom-y-out">
            Test your comprehension with flashcards that adapt their wording during review. Type your responses, and we'll gauge your understanding. Generate flashcards from any content.
            </p>
            <div className="mb-6">
              <div className="flex flex-col items-start">
                <a href="https://app.onestudy.io/sign-up" className="btn bg-purple-400 text-white font-bold rounded focus:outline-none hover:bg-[#483285] sm:w-auto">
                  Start free trial
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <p className="text-xxs ml-6 md:ml-2 mt-2 font-medium md:text-xs text-gray-1000 uppercase">(No credit card required)</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/images/sb-hero-image.png" alt="mockup" className="max-w-4xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

