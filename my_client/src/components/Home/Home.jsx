import React from 'react'
import { Link } from 'react-router-dom';
import image1 from './image1.svg'
import image2 from './image2.svg'

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                       <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-gray-800">
                            Transform PDFs into Smart Assessments
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 mb-6">
                            Our AI-powered PDF Question Generator helps you instantly create high-quality
                            questions from any PDF. It supports multiple choice, short answer, and long answer
                            formats—perfect for students studying or teachers crafting tests. Fast, accurate,
                            and effortless.
                            </p>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/parser"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Lets Do it
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src={image1} alt="image1" />
                    
                </div>
            </aside>

            <div className="flex flex-col-reverse sm:flex-row items-center justify-between px-6 sm:px-16 py-12 bg-white">
  {/* Text Content */}
  <div className="sm:w-1/2 text-left">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
      Intelligent Question Generation
    </h2>
    <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-md">
      Upload your PDF, and our AI will automatically generate high-quality questions. Whether it's for self-study or classroom use, the system produces content-aware assessments that mirror your source material.
    </p>
    <ul className="space-y-4 text-gray-700">
      <li className="flex items-start gap-2">
        <span className="text-blue-600 font-bold">✔</span>
        <span>Supports MCQ, short, and long answer formats</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-blue-600 font-bold">✔</span>
        <span>Context-aware and relevant questions</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-blue-600 font-bold">✔</span>
        <span>Instant generation in seconds</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-blue-600 font-bold">✔</span>
        <span>Designed for students and teachers</span>
      </li>
    </ul>
  </div>

  {/* Image */}
  <div className="sm:w-1/2 mb-8 sm:mb-0 flex justify-center">
    <img
      src={image2} // Replace with actual image import or path
      alt="AI PDF to Questions"
      className="w-64 sm:w-80"
    />
  </div>
</div>


        </div>
    );
}