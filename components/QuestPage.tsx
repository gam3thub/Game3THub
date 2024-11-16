"use client";

import { useState } from "react";

const QuestPage = () => {
  const [quests, setQuests] = useState([
    { id: 1, name: "Quest 1", completed: false, link: "https://example.com/quest1" },
    { id: 2, name: "Quest 2", completed: true, link: "https://example.com/quest2" },
    { id: 3, name: "Quest 3", completed: false, link: "https://example.com/quest3" },
  ]);

  const [showPopup, setShowPopup] = useState(false); // Controls popup visibility
  const [selectedQuest, setSelectedQuest] = useState<number | null>(null); // Tracks selected quest
  const [googleDriveLink, setGoogleDriveLink] = useState(""); // Input value for Google Drive link

  const handleGo = (link: string) => {
    window.open(link, "_blank"); // Opens quest link in a new tab
  };

  const handleCheck = (id: number) => {
    setSelectedQuest(id);
    setShowPopup(true); // Show popup for quest check
  };

  const handleSubmit = () => {
    alert(
      `You have submitted this quest! The admin will review and ensure you're eligible for the airdrop season.`
    );

    // Mark quest as completed
    setQuests((prevQuests) =>
      prevQuests.map((quest) =>
        quest.id === selectedQuest ? { ...quest, completed: true } : quest
      )
    );

    setShowPopup(false); // Close popup
    setGoogleDriveLink(""); // Reset input field
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setGoogleDriveLink(""); // Reset input field
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-xl font-bold text-white mb-6">Available Quests</h1>
      <ul className="space-y-4">
        {quests.map((quest) => (
          <li
            key={quest.id}
            className="bg-gray-800 text-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            {/* Quest Name */}
            <span>{quest.name}</span>

            {/* Buttons */}
            <div className="flex gap-2">
              {!quest.completed ? (
                <>
                  <button
                    onClick={() => handleGo(quest.link)}
                    className="bg-orange text-black font-bold px-4 py-2 rounded"
                  >
                    Go
                  </button>
                  <button
                    onClick={() => handleCheck(quest.id)}
                    className="bg-gray-600 text-white font-bold px-4 py-2 rounded"
                  >
                    Submit
                  </button>
                </>
              ) : (
                <span className="text-green-500 font-bold">✅ Completed</span>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-lg font-bold text-black mb-2">
              Quest {selectedQuest}: Submit Your Work
            </h2>
            <p className="text-gray-600 mb-4">
              Provide your Google Drive link below to complete the quest.
            </p>
            <input
              type="text"
              value={googleDriveLink}
              onChange={(e) => setGoogleDriveLink(e.target.value)}
              placeholder="Enter your Google Drive link"
              className="w-full bg-gray-100 text-black text-sm p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-orange"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={handleClosePopup}
                className="bg-gray-400 text-white font-bold px-4 py-2 rounded"
              >
                Close
              </button>
              <button
                onClick={handleSubmit}
                className="bg-orange text-black font-bold px-4 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestPage;