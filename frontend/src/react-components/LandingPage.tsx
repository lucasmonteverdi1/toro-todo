import React from "react";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center p-8 max-w-lg bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Your To-Do List App
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Organize your tasks and boost your productivity with our simple and
          efficient To-Do list app. Get started today!
        </p>
        <div className="flex justify-center">
          <a
            href="/signup"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg mr-4 hover:bg-blue-600 transition"
          >
            Sign Up
          </a>
          <a
            href="/login"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
          >
            Log In
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
