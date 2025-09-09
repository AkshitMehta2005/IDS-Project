import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to Our Intrusion Detection System
          </h1>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Protect your network with real-time monitoring, intelligent threat
            detection, and instant alerts. Our IDS helps organizations stay safe
            from cyber threats before they become disasters.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate("/register")}
              className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/about")}
              className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Powerful Features for Maximum Security
          </h2>
          <p className="text-gray-600 mt-2">
            Our IDS comes packed with features that keep your digital
            environment safe and secure.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://img.icons8.com/color/96/000000/security-configuration.png"
              alt="Real-time Monitoring"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Real-time Monitoring
            </h3>
            <p className="text-gray-600">
              Constantly scans your network to detect unusual or unauthorized
              activities instantly.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://img.icons8.com/color/96/000000/alarm.png"
              alt="Instant Alerts"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Instant Alerts
            </h3>
            <p className="text-gray-600">
              Get notified immediately when suspicious activities are detected,
              ensuring quick response.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://img.icons8.com/color/96/000000/computer.png"
              alt="User Dashboard"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              User-friendly Dashboard
            </h3>
            <p className="text-gray-600">
              Manage, analyze, and visualize threats easily with our intuitive
              dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            How Our IDS Works
          </h2>
          <p className="text-gray-600 mt-2">
            A simple 3-step process to keep your systems secure.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div className="p-6">
            <span className="text-4xl font-bold text-blue-600">1</span>
            <h3 className="text-xl font-semibold text-gray-800 mt-2">
              Monitor
            </h3>
            <p className="text-gray-600">
              Continuously tracks network traffic and system activity.
            </p>
          </div>
          <div className="p-6">
            <span className="text-4xl font-bold text-blue-600">2</span>
            <h3 className="text-xl font-semibold text-gray-800 mt-2">Detect</h3>
            <p className="text-gray-600">
              Identifies suspicious patterns and unusual behaviors in real-time.
            </p>
          </div>
          <div className="p-6">
            <span className="text-4xl font-bold text-blue-600">3</span>
            <h3 className="text-xl font-semibold text-gray-800 mt-2">Alert</h3>
            <p className="text-gray-600">
              Sends instant notifications for immediate action.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <p className="text-gray-600 italic">
              "The IDS has saved us from multiple attacks. It's easy to use and
              gives us peace of mind."
            </p>
            <h4 className="mt-4 font-semibold text-gray-800">— TechCorp Ltd.</h4>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <p className="text-gray-600 italic">
              "Real-time alerts helped us prevent a serious data breach. Highly
              recommend this system!"
            </p>
            <h4 className="mt-4 font-semibold text-gray-800">
              — CyberSecure Inc.
            </h4>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Secure Your Organization?
          </h2>
          <p className="text-lg mb-6">
            Join thousands of businesses that trust our Intrusion Detection
            System to safeguard their networks.
          </p>
          <button
            onClick={() => navigate("/register")}
            className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-lg shadow hover:bg-yellow-300"
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
    
    </div>
  );
};

export default Home;
