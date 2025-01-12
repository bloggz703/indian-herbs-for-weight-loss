import React from 'react';
import { Leaf, Scale, Clock, ArrowRight } from 'lucide-react';
import WeightLossCalculator from '../components/WeightLossCalculator';

const Home = () => {
  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-r from-green-700 via-emerald-600 to-green-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515023115689-589c33041d3c')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
            Indian Herbs for Weight Loss: Natural Solutions for Your Journey
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Discover time-tested Ayurvedic herbs that support natural weight management
          </p>
          <a 
            href="https://c65f5m2860dl7w2grhqf3jfo2v.hop.clickbank.net/?&traffic_source=google&traffic_type=organic&campaign=Mill&ad=ad4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg font-semibold"
          >
            Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </header>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <WeightLossCalculator />
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Top Indian Herbs for Weight Loss</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-green-100">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-800">Maqui Berry</h3>
              <p className="text-gray-600">Powerful antioxidant that supports healthy metabolism and blood sugar levels</p>
              <a 
                href="https://c65f5m2860dl7w2grhqf3jfo2v.hop.clickbank.net/?&traffic_source=google&traffic_type=organic&campaign=Mill&ad=ad4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-green-600 hover:text-green-700 font-medium"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-green-100">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <Scale className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-800">Amla</h3>
              <p className="text-gray-600">Rich in vitamin C and antioxidants, supports digestion and metabolic health</p>
              <a 
                href="https://c65f5m2860dl7w2grhqf3jfo2v.hop.clickbank.net/?&traffic_source=google&traffic_type=organic&campaign=Mill&ad=ad4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-green-600 hover:text-green-700 font-medium"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-green-100">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-800">Rhodiola</h3>
              <p className="text-gray-600">Adaptogenic herb that helps reduce stress-related eating and supports energy levels</p>
              <a 
                href="https://c65f5m2860dl7w2grhqf3jfo2v.hop.clickbank.net/?&traffic_source=google&traffic_type=organic&campaign=Mill&ad=ad4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-green-600 hover:text-green-700 font-medium"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <p className="text-xl font-semibold text-gray-800 mb-4 md:mb-0 md:mr-8">
              Ready to transform your life with our natural weight loss solutions?
            </p>
            <a 
              href="https://c65f5m2860dl7w2grhqf3jfo2v.hop.clickbank.net/?&traffic_source=google&traffic_type=organic&campaign=Mill&ad=ad4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-all transform hover:-translate-y-0.5 font-semibold whitespace-nowrap"
            >
              Start Losing Weight Today <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-green-800">How long does it take to see results?</h3>
              <p className="text-gray-600">Most people start noticing changes within 2-4 weeks when combined with proper diet and exercise.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-green-800">Are Indian herbs safe for weight loss?</h3>
              <p className="text-gray-600">Traditional Indian herbs are generally safe, but always consult with a healthcare provider before starting any new supplement regimen.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-green-800">Can I take these herbs with other medications?</h3>
              <p className="text-gray-600">It's important to consult with your healthcare provider about potential interactions with your current medications.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;