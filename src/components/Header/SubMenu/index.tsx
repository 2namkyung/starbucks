import Search from './Search';
import SubMenuLink from './SubMenuLink';

export default function SubMenu() {
  return (
    <div className="flex">
      <ul className="flex absolute top-[10px] right-0">
        <SubMenuLink to="/" title="Sign In" />
        <SubMenuLink to="/" title="My Starbucks" />
        <SubMenuLink to="/" title="Customer Service & Ideas" />
        <SubMenuLink to="/" title="Find a Store" />
        <Search />
      </ul>
    </div>
  );
}
