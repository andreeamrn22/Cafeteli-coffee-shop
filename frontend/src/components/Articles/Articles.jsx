import React from "react";

const Articles = () => {
  return (
    <div className="flex items-center justify-center min-h-[500px] text-center px-4">
      <div className="space-y-4">
        {/* Aici poți adăuga o iconiță sau o imagine sugestivă, dacă ai */}
        <span className="text-6xl text-gray-400">📝</span>

        <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary">
          Articolele noastre sunt în curs de pregătire
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Revenim în curând cu noutăți, ghiduri și povești din lumea cafelei!
          Între timp, te invităm să explorezi produsele noastre.
        </p>
      </div>
    </div>
  );
};

export default Articles;
