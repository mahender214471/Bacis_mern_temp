import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our App!</h1>
      <p className="mb-6 text-lg text-gray-700">
        This is the homepage. Use the navigation links to explore the app.
      </p>

      <div className="space-x-4">
        <Link
          to="/about"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Go to About
        </Link>
        <Link
          to="/dashboard"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  )
}
