import Image from 'next/image'

import FeatImage01 from '@/public/images/OneStudy-upload.png'
import FeatImage02 from '@/public/images/OneStudy-PDF-conversion.png'
import FeatImage03 from '@/public/images/OneStudy-study-page.png'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-semibold text-gray-1000 mb-4">Instantly transform your course material into flashcards.</h2>
            <p className="text-md md:text-xl text-gray-1000">You're busy. So we made it super simple.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-md text-purple font-semibold mb-2">Step 1</div>
                  <h3 className="h3 text-gray font-semibold mb-3">Upload your documents</h3>
                  <p className="text-lg text-gray-1000 mb-4">Upload your notes, lecture notes, and other materials.</p>
                  <ul className="text-lg text-gray-1000 mb-4 md:-mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-blue mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Multiple file types supported</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-blue mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Unlimited uploads</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-blue mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Unlimited flashcards</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 sm:mt-4 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="OneStudy Features 01" />
              </div>
            </div>

                     
            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">             
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 sm:order-2" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-md text-purple font-semibold mb-2">Step 2</div>
                  <h3 className="h3 text-gray font-semibold mb-3">Automatically create your deck with just a click</h3>
                  <p className="text-lg text-gray-1000 mb-4">With the click of a button, OneStudy will create a variety of tailored study materials from your content.</p>
                  <ul className="text-lg text-gray-1000 mb-4 md:-mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-blue mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Text flashcards</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-blue mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Image occlusion flashcards</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-blue mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Multiple choice questions</span>
                    </li>
                  </ul>
                </div>
              </div>
               {/* Image */}
               <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Features 02" />
              </div>
            </div>



            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">             
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 sm:order-1" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-md text-purple font-semibold mb-2">Step 3</div>
                  <h3 className="h3 text-gray font-semibold mb-3">Start studying</h3>
                  <p className="text-lg text-gray-1000 mb-4">Now you’re ready to start studying with a range of capabilities.</p>
                  <ul className="text-lg text-gray-1000 mb-4 md:-mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-blue mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Spaced repetition</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-blue mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Multiple choice</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-blue mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Semantic analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
               {/* Image */}
               <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 sm:order-2" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540} height={405} alt="OneStudy Features 03" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}