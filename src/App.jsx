import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Batch2025 from "./Pages/Batch2025";
import Devs from "./Pages/Devs";
import AnimatedCursor from "react-animated-cursor"
function App() {
  return (
    <>
<AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='255, 0, 0'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
          target: '.custom',
          options: {
            innerSize: 12,
            outerSize: 12,
            color: '255, 255, 255',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}
    />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/batch-2025" element={<Batch2025 />} />
          <Route path="/devs" element={<Devs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
