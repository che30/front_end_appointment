import './App.css';
import DentalHead from './components/DentalHead';
import ExperiencedDoctors from './components/ExperiencedDoctors';
import IntroSection from './components/IntroSection';
import OurServiceHeader from './components/OurServiceHeader';

function App() {
  return (
    <div className="App">
      <IntroSection />
      <OurServiceHeader />
      <DentalHead />
      <ExperiencedDoctors />
    </div>
  );
}

export default App;
