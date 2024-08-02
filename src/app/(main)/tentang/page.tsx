import Benefit from '../components/parts/Benefit';
import HeroTentang from './components/parts/HeroTentang';
import Profile from './components/parts/Profile';
import Teacher from './components/parts/Teacher';
import VideoProfile from './components/parts/VideoProfile';

export default function Tentang() {
  return (
    <main className="flex flex-col">
      <HeroTentang />
      <Profile />
      <Benefit tentang />
      <Teacher />
      <VideoProfile />
    </main>
  );
}
