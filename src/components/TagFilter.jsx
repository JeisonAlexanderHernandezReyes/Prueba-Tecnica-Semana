import React from 'react';

const TagFilter = ({ tags, setSelectedTag }) => {
  return (
    <div className="flex overflow-x-auto py-2">
      <button
        onClick={() => setSelectedTag('')}
        className="text-sm bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2"
      >
        Todos Filtro
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => setSelectedTag(tag)}
          className="text-sm bg-blue-200 text-blue-800 px-2 py-1 rounded mr-2"
        >
          #{tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
