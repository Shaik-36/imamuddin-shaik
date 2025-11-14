import React from "react";

export default function TechCommunitySection({ talks }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tech Community
          </h2>
          <p className="text-lg text-gray-300">
            Sharing knowledge and inspiring innovation at leading tech communities
          </p>
        </div>

        {/* Talks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {talks.map((talk, index) => (
            <div
              key={index}
              className="bg-slate-700 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Talk Image */}
              <div className="relative overflow-hidden h-64 sm:h-72 bg-slate-600">
                <img
                  src={talk.image}
                  alt={talk.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Talk Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {talk.title}
                </h3>
                <p className="text-sm mb-4 font-semibold text-blue-400">
                  {talk.date}
                </p>
                <p className="text-gray-300 leading-relaxed text-base">
                  {talk.description}
                </p>

                {/* Learn More Link */}
                {talk.link && (
                  <a
                    href={talk.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
                  >
                    Learn More →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
