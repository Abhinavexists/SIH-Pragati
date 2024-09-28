import React, { useState } from "react";

const AddPublicationForm = ({ onAddPublication }) => {
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [journal, setJournal] = useState("");
  const [citations, setCitations] = useState("");
  const [isPatent, setIsPatent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPublication = {
      id: Date.now(), // Simple way to generate a unique ID
      title,
      authors,
      publicationDate,
      journal,
      citations: parseInt(citations, 10),
      isPatent,
    };
    onAddPublication(newPublication);
    // Clear form fields
    setTitle("");
    setAuthors("");
    setPublicationDate("");
    setJournal("");
    setCitations("");
    setIsPatent(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-semibold mb-4">Add New Publication</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          className="border border-gray-300 p-3 rounded-lg w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Authors"
          className="border border-gray-300 p-3 rounded-lg w-full"
          value={authors}
          onChange={(e) => setAuthors(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="date"
          className="border border-gray-300 p-3 rounded-lg w-full"
          value={publicationDate}
          onChange={(e) => setPublicationDate(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Journal/Conference"
          className="border border-gray-300 p-3 rounded-lg w-full"
          value={journal}
          onChange={(e) => setJournal(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Citations"
          className="border border-gray-300 p-3 rounded-lg w-full"
          value={citations}
          onChange={(e) => setCitations(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isPatent}
            onChange={() => setIsPatent(!isPatent)}
            className="mr-2"
          />
          Patent
        </label>
      </div>
      <button
        type="submit"
        className="bg-indigo-600 text-white p-3 rounded-lg"
      >
        Add Publication
      </button>
    </form>
  );
};

export default AddPublicationForm;
