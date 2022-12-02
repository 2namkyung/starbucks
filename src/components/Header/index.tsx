import { Link } from 'react-router-dom';
import SubMenu from './SubMenu';

export default function Header() {
  return (
    <header className="bg-[#f6f5f0] border-b-[1px] border-[#c8c8c8]">
      <div className="relative w-[1100px] h-[120px] m-auto">
        <Link to="/">
          <img
            className="h-[75px] absolute top-0 bottom-0 m-auto"
            src="/img/starbucks_logo.png"
            alt="STARBUCKS LOGO"
          />
        </Link>
        <SubMenu />
      </div>
    </header>
  );
}
