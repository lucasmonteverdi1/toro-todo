import React from "react";


function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center p-10 max-w-xl bg-white bg-opacity-90 rounded-2xl shadow-2xl">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
          Welcome to TORO's To-Do List App
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Organize your tasks and boost your productivity with our simple and
          efficient To-Do list app. Get started today!
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="/register"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
          >
            Sign Up
          </a>
          <a
            href="/login"
            className="bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-900 transition transform hover:scale-105"
          >
            Log In
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;