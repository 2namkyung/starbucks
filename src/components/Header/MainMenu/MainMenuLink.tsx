import React, { useCallback, useState } from 'react';

type MainMenuLinkProps = {
  mainMenu: string;
  mainMenuContent: React.ReactNode | undefined;
};

export default function MainMenuLink({
  mainMenu,
  mainMenuContent,
}: MainMenuLinkProps) {
  const [isHover, setIsHover] = useState<boolean>(false);

  const onMouseOver = useCallback(() => {
    setIsHover(true);
  }, []);

  const onMouseOut = useCallback(() => {
    setIsHover(false);
  }, []);

  return (
    <li
      className="hover:bg-[#2c2a29] hover:text-[#669900] rounded-t-lg"
      onMouseOver={onMouseOver}
      onFocus={onMouseOver}
      onMouseOut={onMouseOut}
      onBlur={onMouseOut}
    >
      <div className="pt-[10px] pr-[20px] pb-[34px] pl-[20px] text-[13px]">
        {mainMenu}
      </div>
      {isHover && mainMenuContent}
    </li>
  );
}
