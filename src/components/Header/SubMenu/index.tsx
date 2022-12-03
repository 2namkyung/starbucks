import Search from './Search';
import SubMenuLink from './SubMenuLink';

export default function SubMenu() {
  return (
    <div className="flex">
      <ul className="flex absolute top-[10px] right-0">
        <SubMenuLink to="/" subMenu="Sign In" />
        <SubMenuLink to="/" subMenu="My Starbucks" />
        <SubMenuLink to="/" subMenu="Customer Service & Ideas" />
        <SubMenuLink to="/" subMenu="Find a Store" />
        <Search />
      </ul>
    </div>
  );
}
