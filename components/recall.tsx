import Image from 'next/image'; // Import the Next.js Image component

export default function Recall() {
  return (
    <section className="bg-blue-1100">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="mt-4 md:mt-0">
          <h2 className="h2 font-semibold mb-4 tracking-tight text-gray-900 dark:text-white">
            Boost learning with active recall using dynamic phrasing.
          </h2>
          <p className="mb-6 text-gray-300 text-lg md:text-lg">
            OneStudy automatically adjusts the wording of each flashcard during every review, promoting comprehension over mere memorization.
          </p>
          <a href="#" className="btn bg-purple-400 text-white font-bold rounded focus:outline-none hover:bg-[#483285] sm:w-auto mb-8 md:mb-0">
            Learn with active recall
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
        <Image
          src="/path-to-your-image/dashboard-image-dark.jpg"
          alt="dashboard image"
          width={1000}
          height={750}
          className="w-full hidden dark:block sm:w-auto"
        />
      </div>
    </section>
  );
}

