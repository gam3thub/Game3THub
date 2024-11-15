const GameGallery = () => {
  const games = new Array(10).fill({
    name: 'Game Name',
    developer: 'Developer',
    genre: 'Genre',
    chainLogo: '/public/chain-logo.png',
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {games.map((game, index) => (
        <div key={index} className="bg-black border border-white rounded-lg overflow-hidden">
          <div className="aspect-square">
            <img
              src="/public/game-placeholder.jpg"
              alt={game.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-2">
            <h3 className="text-white text-sm font-bold">{game.name}</h3>
            <p className="text-gray-400 text-xs">{game.developer}</p>
            <p className="text-gray-400 text-xs">{game.genre}</p>
            <div className="flex items-center gap-2 mt-2">
              <img src={game.chainLogo} alt="Chain Logo" className="w-4 h-4" />
              <button className="bg-orange text-white text-xs px-4 py-1 rounded">Play</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameGallery;
