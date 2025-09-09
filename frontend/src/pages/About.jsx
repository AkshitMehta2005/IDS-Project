import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            About Our Intrusion Detection System
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            Safeguarding networks, servers, and applications by identifying unauthorized access, 
            suspicious activity, and threats in real-time.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Who We Are</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our <span className="font-semibold text-blue-600">Intrusion Detection System (IDS)</span> 
              is a next-generation security solution designed to continuously monitor and 
              analyze network traffic, preventing data breaches and cyberattacks. We focus 
              on building a safer digital environment for businesses, governments, and 
              institutions worldwide.
            </p>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
            alt="Cyber Security"
            className="w-full h-80 object-contain"
          />
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
                title: "Real-Time Monitoring",
                desc: "Continuous traffic analysis to detect suspicious activities instantly.",
              },
              {
                img: "https://cdn-icons-png.flaticon.com/512/3601/3601021.png",
                title: "Automated Alerts",
                desc: "Receive instant notifications for unauthorized or risky behavior.",
              },
              {
                img: "https://cdn-icons-png.flaticon.com/512/1484/1484795.png",
                title: "Detailed Reports",
                desc: "Comprehensive analytics to make smarter security decisions.",
              },
              {
                img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
                title: "Firewall Integration",
                desc: "Seamless integration with your firewall and existing security setup.",
              },
              {
                img: "https://cdn-icons-png.flaticon.com/512/3601/3601021.png",
                title: "User-Friendly Dashboard",
                desc: "Simple yet powerful dashboard for admins and IT teams.",
              },
              {
                img: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
                title: "Scalable Solution",
                desc: "Suitable for small businesses, enterprises, and institutions.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <img src={feature.img} alt={feature.title} className="w-14 h-14 mb-4" />
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Choose Our IDS?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            In today’s digital world, data breaches and cyberattacks are 
            becoming more frequent. Our IDS gives you an additional layer of 
            defense by monitoring threats proactively. From enterprises to 
            small businesses, our system adapts to your needs.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white border-l-4 border-blue-600 p-8 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-blue-700 mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To build a secure digital ecosystem where organizations and 
              individuals can thrive without the constant fear of cyberattacks.
            </p>
          </div>
          <div className="bg-white border-l-4 border-green-600 p-8 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-green-700 mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To become a global leader in intrusion detection by continuously 
              innovating and providing scalable, AI-powered security solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { name: "Akshit Mehta", role: "Lead Developer" },
            { name: "Tripurari", role: "Security Analyst" },
            { name: "Mohit", role: "System Architect" },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt={member.name}
                className="w-24 h-24 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-blue-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Secure Your Network?
        </h2>
        <p className="mb-6">
          Join us in building a safer digital future. Get started with our 
          Intrusion Detection System today.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default About;
