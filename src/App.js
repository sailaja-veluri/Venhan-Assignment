
import Sidebar from './components/Sidebar';
import FlowDiagram from './components/FlowDiagram';
import { GlobalStyles } from './styles/GlobalStyles';
import { DiagramProvider } from './context/DiagramContext';

import './index.css';

const App = () => {
  
  return (
    <DiagramProvider>
    <div className="app">
       <GlobalStyles />  {/* Apply global styles */}
      <Sidebar />
      <div className="diagram">
        <FlowDiagram />
      </div>
    </div>
    </DiagramProvider>
  );
};

export default App;
