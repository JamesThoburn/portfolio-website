"use client";

import { useState } from "react";

const education = {
  university: "Durham University",
  degree: "BSc Mathematics",
  years: [
    {
      label: "Year 1",
      modules: [
        "Analysis I",
        "Calculus I",
        "Discrete Mathematics I",
        "Dynamics I",
        "Linear Algebra I",
        "Probability I",
        "Programming I",
        "Statistics I"
      ],
    },
    {
      label: "Year 2",
      modules: [
        "Computational Mathematics II",
        "Mathematical Methods II",
        "Statistical Inference II",
        "Complex Analysis II",
        "Probability II",
        "Data Science & Statistical Modelling II"
      ],
    },
    {
      label: "Year 3 (TBD)",
      modules: [
        "Operations Research III",
        "Partial Differential Equations III",
        "Advanced Statistical Modelling III",
        "Bayesian Computation and Modelling III",
        "Decision Theory III",
        "Machine Learning & Neural Networks III"
      ],
    },
    {
      label: "Year 4 (TBD)",
      modules: [
        "Project IV",
        "High-Dimensional Statistics & Deep Learning IV",
        "Nonparametric Statistics IV",
        "Spatio-Temporal Statistics IV",
        "Uncertainty Quantification & Clinical Trials IV"
      ],
    },
  ],
};

export default function EducationSection() {
  const [activeYear, setActiveYear] = useState(0);

  const current = education.years[activeYear];

  return (
    <section className="mt-10">
      {/* Header */}
      <h2 className="text-3xl font-semibold tracking-tight mb-2">
        Education
      </h2>
      <p className="text-neutral-500 text-sm mb-4">
        {education.degree} &mdash; {education.university}
      </p>

      {/* Year Toggle */}
      <div className="flex gap-1 mb-6 bg-neutral-800 rounded-lg p-1 w-fit">
        {education.years.map((year, index) => (
          <button
            key={year.label}
            onClick={() => setActiveYear(index)}
            className={`px-5 py-2 hover:cursor-pointer rounded-md text-sm font-medium transition-all duration-200 ${
              activeYear === index
                ? "bg-white text-neutral-900"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            {year.label}
          </button>
        ))}
      </div>

      {/* Module Pills */}
      <div className="flex flex-wrap gap-3">
        {current.modules.map((module) => (
          <span
            key={module}
            className="text-sm font-medium text-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 hover:border-neutral-500 transition-colors duration-200"
          >
            {module}
          </span>
        ))}
      </div>
    </section>
  );
}