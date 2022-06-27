import './App.css';
import DentalHead from './components/DentalHead';
import IntroSection from './components/IntroSection';
import OurServiceHeader from './components/OurServiceHeader';

function App() {
  return (
    <div className="App">
      <IntroSection />
      <OurServiceHeader />
      <DentalHead />
    </div>
  );
}

export default App;
