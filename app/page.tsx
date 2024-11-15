import Slider from '../components/Slider';
import GameGallery from '../components/GameGallery';
import BottomBar from '../components/BottomBar';

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto">
      <Slider />
      <h2 className="text-xl font-bold p-4">Play Now 🎮</h2>
      <GameGallery />
      <BottomBar />
    </main>
  );
}
