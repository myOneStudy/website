'use client'

import React, { useState } from 'react';

// Define the types for the props
interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleItem = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-2">
      <h2>
        <button
          className="flex items-center justify-between w-full text-left text-lg hover:bg-gray-100 hover:rounded-md font-semibold py-2"
          onClick={toggleItem}
          aria-expanded={isOpen}
          aria-controls={`accordion-text-${question}`}
        >
          <span>{question}</span>
          <svg
            className="fill-indigo-500 shrink-0 ml-8"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`ttransform origin-center transition duration-200 ease-out ${isOpen ? '!rotate-180' : ''}`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen ? '!rotate-180' : ''}`}
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-text-${question}`}
        role="region"
        aria-labelledby={`accordion-title-${question}`}
        className={`grid text-gray-1000 text-base overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-3" dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      </div>
    </div>
  );
}

export default function Accordion() {
  return (
    <div className="py-2">
      <div className="w-full max-w-2xl mx-auto px-4 md:px-6 py-2">
        <h1 className="h3 text-gray-1000 font-semibold mb-4">Frequently asked questions</h1>
        <FAQItem
          question="Can I try OneStudy before paying?"
          answer="Absolutely! We're confident you'll enjoy OneStudy, which is why we offer an unrestricted 7-day trial. Additionally, upon subscribing, we provide a 30-day money-back guarantee to further your peace of mind."
        />
        <hr />
        <FAQItem
          question="How is OneStudy different from Anki, Quizlet, and other study tools?"
          answer="OneStudy enables you to create high-quality, personalized study materials quickly but also leverage active recall with dynamic phrasing of flashcards for a comprehensive learning experience. Say goodbye to outdated and subpar study decks, as OneStudy seamlessly integrates your own content into your study materials (e.g. lectures, research papers, etc.). <br /> <br /> Even in cases where Anki decks are outdated or missing, OneStudy ensures your study approach remains intact by allowing fast and efficient deck creation, perfectly suited to your busy schedule."
        />
        <hr />
        <FAQItem
          question="What file formats can I use with OneStudy?"
          answer="At the moment, OneStudy is compatible with PDFs. You can easily convert alternate file formats like PowerPoint or Word documents into PDFs for use with OneStudy. We will be expanding our support for additional file types in the near future."
        />
        <hr />
        <FAQItem
          question="How does the automatic deck creation process work?"
          answer="It's incredibly straightforward and intuitive. You simply upload your PDF, and OneStudy converts the pertinent text into text flashcards. Additionally, it extracts all the images from the file, allowing you to generate image occlusions automatically, manually draw them, or apply a combination of both methods."
        />
        <hr />
        <FAQItem
          question="What's the process for generating multiple choice flashcards?"
          answer="When you create a deck automatically, OneStudy will create multiple choice questions for each text flashcard with no action required on your part. Multiple choice questions are not created for image occlusion cards nor manually-created text flashcards."
        />
        <hr />
        <FAQItem
          question="Does OneStudy use spaced repetition?"
          answer="Yes, but we don't conclude sessions once you've reviewed your due cards."
        />
        <hr />
        <FAQItem
          question="Can I customize my space repetition intervals?"
          answer="Absolutely, the spaced repetition intervals are completely customizable."
        />
        <hr />
        <FAQItem
          question="I’m interested in partnering. Who should I contact?"
          answer="Please email <a href='mailto:marshall@onestudy.io' style='color:#6C48FF;'>marshall@onestudy.io</a> for partnership inquiries."
        />
      </div>
    </div>
  );
}
