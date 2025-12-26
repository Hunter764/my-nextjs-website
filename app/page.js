import Image from "next/image";
import {Heart, Smartphone} from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 ">
      <div className="text-center mb-16">
        <h1 className="text-4xl  md:text-6xl font-bold text-gray-900 mb-6">Welcome to my Website</h1>
        <p>
          This is simple , clean wenbsite built with Next.js and Tailwind CSS.

        </p>

        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-3 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold cursor-pointer">
            Get Started
          </button>
          
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transiotion-colors"> 
            Learn More
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-blue-600 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast</h3>
          <p className="italic text-gray-600">
            Built with modern Tech for Optimal Performance.
          </p>
          
        </div>

         <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Heart className="text-green-500"/>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast</h3>
          <p className="italic text-gray-600">
            Designed with User Experience in Mind.
          </p>
          
        </div>

         <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Smartphone className="text-purple-600"/>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast</h3>
          <p className="italic text-gray-600">
            Works Seamlessly on All Devices.
          </p>
          
        </div>
      </div>
    </div>
  );
}
