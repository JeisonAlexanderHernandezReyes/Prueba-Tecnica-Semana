import React, { useState } from "react";

const TagFilter = ({ tags, setSelectedTag }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const isValidTag = (tag) => {
    return (
      typeof tag === "string" &&
      tag.trim() &&
      !tag.includes("##") &&
      (/^[a-zA-Z]+$/.test(tag))
    );
  };

  const validTags = tags.filter(isValidTag);

  const specificTags = ["animal","pet", "water", "tech"];
  const randomTags = validTags
    .filter((tag) => !specificTags.includes(tag))
    .sort(() => 0.5 - Math.random())
    .slice(0, 27);
  const initialTags = [...specificTags, ...randomTags];

  const modalTags = validTags.filter((tag) => !initialTags.includes(tag)).sort((a, b) => a.localeCompare(b));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    handleClose();
  };

  const filteredModalTags = modalTags.filter((tag) => tag.toLowerCase().startsWith(search.toLowerCase()));

  return (
    <div className="flex flex-wrap gap-2 p-4 bg-gray-100 rounded-md">
      {initialTags.map((tag, index) => (
        <button
          key={`${tag}-${index}`}
          onClick={() => setSelectedTag(tag)}
          className="text-sm bg-blue-300 text-blue-900 px-3 py-2 rounded shadow-md hover:bg-blue-400 transition"
        >
          #{tag}
        </button>
      ))}

      <button
        onClick={handleOpen}
        className="text-sm bg-green-500 text-white px-3 py-2 rounded shadow-md hover:bg-green-600 transition"
      >
        +
      </button>

      {open && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white w-full max-w-md sm:max-w-lg lg:max-w-4xl p-6 rounded shadow-md max-h-[85vh] overflow-y-auto">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded shadow hover:bg-red-600 transition"
            >
              X
            </button>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Selecciona un Tag
            </h2>

            {/* Buscador */}
            <input
              type="text"
              placeholder="Buscar por letra..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {filteredModalTags.map((tag, index) => (
                <button
                  key={`${tag}-${index}`}
                  onClick={() => handleTagClick(tag)}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded hover:bg-gray-200 transition"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TagFilter;
