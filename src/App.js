import './App.css';
import DentalHead from './components/DentalHead';
import ExperiencedDoctors from './components/ExperiencedDoctors';
import IntroSection from './components/IntroSection';
import OurServiceHeader from './components/OurServiceHeader';

const App = () => (
  <div className="App">
    <IntroSection />
    <OurServiceHeader />
    <DentalHead />
    <ExperiencedDoctors />
  </div>
);

export default App;
