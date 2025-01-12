import React from 'react';

const Disclaimer = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Medical Advice Disclaimer</h2>
            <p>
              The information provided on this website is for general informational purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Results Disclaimer</h2>
            <p>
              Individual results may vary. The weight loss results testimonials and examples on this website are not intended to represent or guarantee that anyone will achieve the same or similar results. Each individual's success depends on their background, dedication, desire, and motivation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Affiliate Disclosure</h2>
            <p>
              Some links on this website may be affiliate links. This means if you click on the link and purchase the item, we may receive an affiliate commission at no extra cost to you. All products we recommend are used and trusted by us regardless of affiliate relationships.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Content Accuracy</h2>
            <p>
              We make every effort to ensure the accuracy of the information on our website. However, we do not warrant or represent that the information provided is complete or up-to-date. Any reliance you place on such information is strictly at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Professional Consultation</h2>
            <p>
              Before starting any weight loss program or taking any dietary supplements, we strongly recommend consulting with a qualified healthcare professional, especially if you have any pre-existing medical conditions or are taking medications.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Disclaimer;