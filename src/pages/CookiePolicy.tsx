import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide useful information to website owners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Essential cookies: Required for the website to function properly</li>
              <li>Analytics cookies: To understand how visitors interact with our website</li>
              <li>Preference cookies: To remember your settings and preferences</li>
              <li>Marketing cookies: To deliver more relevant advertisements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">Essential Cookies</h3>
                <p>These cookies are necessary for the website to function and cannot be switched off in our systems.</p>
              </div>
              <div>
                <h3 className="font-bold">Performance Cookies</h3>
                <p>These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.</p>
              </div>
              <div>
                <h3 className="font-bold">Functional Cookies</h3>
                <p>These cookies enable the website to provide enhanced functionality and personalization.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CookiePolicy;