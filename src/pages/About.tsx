import React from 'react';
import { Heart, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-8">
            We're a passionate team of Ayurvedic enthusiasts and wellness experts dedicated to helping people achieve their weight loss goals naturally through the power of traditional Indian herbs.
          </p>

          <div className="bg-green-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="mb-4">
              We believe in the transformative power of traditional Indian herbs for weight loss. Our mission is to make these natural solutions accessible to everyone while educating about their proper use and benefits.
            </p>
            <p>
              Through careful research and dedication to quality, we help people achieve their weight loss goals safely and naturally, drawing from centuries of Ayurvedic wisdom.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;