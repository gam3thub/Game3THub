const BottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-around items-center bg-black/80 backdrop-blur-md p-4">
      <a href="#home" className="text-white hover:text-orange">Home</a>
      <a href="#quest" className="text-white hover:text-orange">Quest</a>
      <a href="#profile" className="text-white hover:text-orange">Profile</a>
    </div>
  );
};

export default BottomBar;
