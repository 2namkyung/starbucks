import ContentTitle from './ContentTitle';
import ContentItem from './ContentItem';

export default function StoreContents() {
  return (
    <div className="w-full fixed left-0">
      <div className="bg-[#2c2a29]">
        <ul className="relative w-[1100px] m-auto flex py-[20px]">
          <li className="w-[220px]">
            <ContentTitle title="매장 찾기" />
            <ul>
              <ContentItem name="퀵 검색" />
              <ContentItem name="지역 검색" />
              <ContentItem name="My 매장" />
            </ul>
          </li>
          <li className="w-[220px]">
            <ContentTitle title="매장 이야기" />
            <ul>
              <ContentItem name="청담스타" />
              <ContentItem name="티바나 인스파이어드 매장" />
              <ContentItem name="파미에파크" />
            </ul>
          </li>
        </ul>
      </div>
      <div className="py-[26px] text-[12px] text-[#999] font-bold bg-[url('/img/main_menu_pattern.jpg')]">
        <div className="relative w-[1100px] m-auto">
          <h4>매장 찾기</h4>
          <p className="text-[#669900] mb-2">보다 빠르게 매장을 찾아보세요.</p>
          <h4>청담 스타</h4>
          <p className="text-[#669900] mb-2">
            스타벅스 1,000호점인 청담스타점을 만나보세요.
          </p>
        </div>
      </div>
    </div>
  );
}
