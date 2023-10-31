export default function Pricing() {
    return (
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Hero content */}
          <div className="pt-32 pb-6 md:pt-40 md:pb-4">
            {/* Section header */}
            <div className="text-center pb-8 md:pb-4">
                <h1 className="text-4xl md:text-5xl font-semibold leading-tighter tracking-tighter text-gray-1000 mb-4" data-aos="zoom-y-out">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-1000">Simple, straightforward pricing.
                    </span>
                </h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-gray-1000 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Elevate your studying for the same price as 2 Starbucks coffees.</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Pricing Table */}
        
          <div className="py-4 px-2 mx-auto max-w-screen-xl lg:py-8 lg:px-4 mb-12">
            <div className="space-y-4 lg:grid lg:grid-cols-1 sm:gap-4 xl:gap-10 lg:space-y-0">
              {/* Pricing Card 1 */}
              <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-1000 font-semibold mb-4 rounded-lg border-2 border-gray-100 shadow-xl shadow-gray-500">
                <h3 className="mb-4 text-2xl md:text-3xl font-semibold">Monthly Plan</h3>
                <p className="text-gray-1000 md:text-lg font-light dark:text-gray-1000 text-md">7-day free trial. 30-day money-back guarantee. No credit card required.</p>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-2xl md:text-4xl text-purple font-bold">$9.99</span>
                  <span className="text-purple text-2xl md:text-4xl dark:text-purple">/month</span>
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-purple dark:text-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    <span className="text-md md:text-lg text-base">Unlimited decks and cards</span>
                  </li>
                  <li className="flex items-cener space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-purple dark:text-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    <span className="text-md md:text-lg text-base">Unlimited automatic card creation</span>
                  </li>
                  <li className="flex items-cener space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-purple dark:text-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    <span className="text-md md:text-lg text-base">Unlimited file uploads</span>
                  </li>
                  <li className="flex items-cener space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-purple dark:text-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    <span className="text-md md:text-lg text-base">Dynamic phrasing for all text cards</span>
                  </li>
                  <li className="flex items-cener space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-purple dark:text-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    <span className="text-md md:text-lg text-base">Multiple choice questions created automatically for text cards</span>
                  </li>
                  <li className="flex items-cener space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-purple dark:text-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    <span className="text-md md:text-lg text-base">Unlimited semantic analysis</span>
                  </li>
                  <li className="flex items-cener space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-purple dark:text-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    <span className="text-md md:text-lg text-base">Unlimited spaced repetition</span>
                  </li>
                  <li className="flex items-cener space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-purple dark:text-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    <span className="text-md md:text-lg text-base">Unlimited deck sharing</span>
                  </li>
                </ul>
                <a href="https://app.onestudy.io/sign-up" data-test-id="sign-up-pricing-page" className="btn bg-purple-400 text-white font-bold rounded mb-2 focus:outline-none hover:bg-[#483285]">Start Free Trial</a>
              </div>
  
              
            </div>
          </div>
        
        {/* End Pricing Table */}
      </section>
    );
  }
  