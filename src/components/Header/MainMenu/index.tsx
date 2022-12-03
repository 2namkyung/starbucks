import CoffeeContents from './CoffeeContents';
import MainMenuLink from './MainMenuLink';
import MenuContents from './MenuContents';
import MyStarBucksRewardContents from './MyStarBucksRewardContents';
import ResponsibilityContents from './ResponsibilityContents';
import StoreContents from './StoreContents';
import WhatsNewContents from './WhatsNewContents';

export default function MainMenu() {
  return (
    <ul className="flex absolute bottom-0 right-0 z-1">
      <MainMenuLink mainMenu="COFFEE" mainMenuContent={<CoffeeContents />} />
      <MainMenuLink mainMenu="MENU" mainMenuContent={<MenuContents />} />
      <MainMenuLink mainMenu="STORE" mainMenuContent={<StoreContents />} />
      <MainMenuLink
        mainMenu="RESPONSIBILITY"
        mainMenuContent={<ResponsibilityContents />}
      />
      <MainMenuLink
        mainMenu="MY STARBUCKS REWARDS"
        mainMenuContent={<MyStarBucksRewardContents />}
      />
      <MainMenuLink
        mainMenu="WHAT`S NEW"
        mainMenuContent={<WhatsNewContents />}
      />
    </ul>
  );
}
