const GameGallery = () => {
  const games = [
    {
      name: "Game 1",
      developer: "Developer 1",
      genre: "Action",
      chainLogo: "/chain-logo.png",
      image: "/images/game1.jpg",
      url: "https://example.com/play/game1", // URL for the "Play Now" button
    },
    {
      name: "Game 2",
      developer: "Developer 2",
      genre: "Adventure",
      chainLogo: "/chain-logo.png",
      image: "/images/game2.jpg",
      url: "https://example.com/play/game2", // URL for the "Play Now" button
    },
    // Add more games as needed
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {games.map((game, index) => (
        <div
          key={index}
          className="bg-black border border-white rounded-lg overflow-hidden"
        >
          <div className="aspect-square">
            <img
              src={game.image}
              alt={game.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-2">
            <div className="flex items-center gap-2">
              <img
                src={game.chainLogo}
                alt="Chain Logo"
                className="w-4 h-4"
              />
              <h3 className="text-white text-sm font-bold">{game.name}</h3>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div>
                <p className="text-gray-400 text-xs">{game.developer}</p>
                <p className="text-gray-400 text-xs">{game.genre}</p>
              </div>
              {/* Play Button with URL */}
              <a
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange text-black font-bold text-sm px-6 py-2 rounded"
              >
                Play
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameGallery;
