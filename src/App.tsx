import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Notice from './components/Notice';
import PickYourFavorite from './components/PickYourFavorite';
import ReserveConffe from './components/ReserveConffe';
import Reward from './components/Reward';
import SeasonProduct from './components/SeasonProduct';
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
      <SeasonProduct />
      <ReserveConffe />
      <PickYourFavorite />
    </BrowserRouter>
  );
}

export default App;
