import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Website() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <Helmet>
        <title>Education Sarathi Smart OS</title>
        <meta
          name="description"
          content="Smart School Management System for Students, Teachers and Admin"
        />
        <meta name="keywords" content="School, Education, Dashboard, Exam" />
      </Helmet>

      <h1 className="text-4xl font-bold mb-6">Welcome to Education Sarathi</h1>
      <p className="text-lg mb-6 text-center">
        Complete Smart School Management System for Students, Teachers, and
        Admins
      </p>
      <div className="flex gap-4">
        <Link
          to="/dashboard"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Dashboard
        </Link>
        <Link
          to="/online-exam"
          className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Online Exam
        </Link>
      </div>
    </div>
  );
}.



