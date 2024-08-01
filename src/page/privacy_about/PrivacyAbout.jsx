import React from "react";
import RouteNav from "../../common/route_nav/RouteNav.jsx"

const PrivacyAbout = () => {
  return (
    <div className="w-full sm:w-full md:w-[80%] lg:w-[60%] mx-auto text-gray-800 pb-[70px]">
    <RouteNav 
       ROUTE="privacy - about"
    />
      {/* Personal Information */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-4 font-nunito">About Me</h1>
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-2">Karan Kumar</h2>
          <p className="text-gray-600">
            I am a passionate software developer and blogger with a keen interest in technology and innovation. I enjoy writing about tech, programming, and the latest trends in the software industry.
          </p>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-4 font-nunito">Privacy Policy</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p className="text-gray-600 mb-4">
            Your privacy is important to us. This privacy policy explains how we collect, use, and share your personal information when you use our blog.
          </p>

          <h3 className="text-xl font-semibold mb-2">Information Collection</h3>
          <p className="text-gray-600 mb-4">
            We collect personal information that you provide directly to us, such as when you subscribe to our newsletter or leave a comment. This may include your name, email address, and any other information you choose to provide.
          </p>

          <h3 className="text-xl font-semibold mb-2">Use of Information</h3>
          <p className="text-gray-600 mb-4">
            We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our users.
          </p>

          <h3 className="text-xl font-semibold mb-2">Sharing of Information</h3>
          <p className="text-gray-600 mb-4">
            We do not share your personal information with third parties except to comply with the law, develop our products, or protect our rights.
          </p>

          <h3 className="text-xl font-semibold mb-2">User Rights</h3>
          <p className="text-gray-600 mb-4">
            You have the right to access, correct, or delete your personal information. If you have any questions or concerns about your privacy, please contact us.
          </p>

          <h3 className="text-xl font-semibold mb-2">Data Security</h3>
          <p className="text-gray-600 mb-4">
            We implement appropriate security measures to protect your personal information from unauthorized access, use, or disclosure.
          </p>

          <h3 className="text-xl font-semibold mb-2">Changes to Policy</h3>
          <p className="text-gray-600 mb-4">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
          </p>

          <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
          <p className="text-gray-600">
            If you have any questions about this privacy policy, please contact us at: karankumarascode@gmail.com
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-4 font-nunito">About This Blog</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            Our mission is to provide insightful articles and updates on the latest in technology, programming, and digital innovation. We aim to be a valuable resource for tech enthusiasts and professionals alike.
          </p>

          <h3 className="text-xl font-semibold mb-2">Our Team</h3>
          <p className="text-gray-600 mb-4">
            Our team consists of experienced writers and developers who are passionate about sharing their knowledge and insights with the world. Meet some of our key members:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center space-x-4">
              <img src="https://via.placeholder.com/100" alt="Team Member" className="w-20 h-20 rounded-full"/>
              <div>
                <h4 className="text-lg font-semibold text-left">Ai</h4>
                <p className="text-gray-500">Lead Writer</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img src="https://via.placeholder.com/100" alt="Team Member" className="w-20 h-20 rounded-full"/>
              <div>
                <h4 className="text-lg font-semibold text-left">Karan Kumar</h4>
                <p className="text-gray-500">Senior Developer</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2">Contact Us</h3>
          <p className="text-gray-600">
            We'd love to hear from you! Whether you have a question, feedback, or just want to say hi, feel free to reach out to us at: karankumarascode@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyAbout;