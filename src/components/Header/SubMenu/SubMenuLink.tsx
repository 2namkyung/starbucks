import { Link } from 'react-router-dom';

type SubMenuLinkProps = {
  to: string;
  subMenu: string;
};

export default function SubMenuLink({ to, subMenu }: SubMenuLinkProps) {
  return (
    <li className="relative first:before:hidden before:w-[1px] before:h-[12px] before:bg-[#e5e5e5] before:absolute before:top-0 before:bottom-0 before:m-auto">
      <Link
        className="block text-[#656565] text-xs px-[11px] py-[16px] cursor-pointer hover:text-black"
        to={to}
      >
        {subMenu}
      </Link>
    </li>
  );
}
