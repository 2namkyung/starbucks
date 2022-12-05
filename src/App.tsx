import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Visual from './components/Visual';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Visual />
    </BrowserRouter>
  );
}

export default App;
