import './App.css';
import GlassyLogo from "./components/GlassyLogo";
import BackgroundText from "./components/BackgroundText";

function App() {
  return (
        <div className="page-container">
            <div className="content-wrapper">
            <BackgroundText /> 
            <GlassyLogo />
            </div>
        </div>
  );
}

export default App;
