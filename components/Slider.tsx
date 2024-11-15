const Slider = () => {
  const slides = ['/images/slider1.jpg', '/images/slider2.jpg', '/images/slider3.jpg', '/images/slider4.jpg', '/images/slider5.jpg'];

  return (
    <div className="flex overflow-x-scroll gap-4 p-4">
      {slides.map((slide, index) => (
        <div key={index} className="flex-shrink-0 w-full max-w-4xl">
          <img
            src={slide}
            alt={`Slide ${index + 1}`}
            className="rounded-lg shadow-lg object-cover aspect-video"
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;
