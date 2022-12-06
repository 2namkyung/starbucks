import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Notice from './components/Notice';
import Visual from './components/Visual';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Visual />
      <Notice />
    </BrowserRouter>
  );
}

export default App;
