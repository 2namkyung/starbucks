import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Notice from './components/Notice';
import Reward from './components/Reward';
import Visual from './components/Visual';
import Youtube from './components/Youtube';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Visual />
      <Notice />
      <Reward />
      <Youtube />
    </BrowserRouter>
  );
}

export default App;
