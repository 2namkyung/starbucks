import ContentTitle from './ContentTitle';
import ContentItem from './ContentItem';

export default function MenuContents() {
  return (
    <div className="w-full fixed left-0">
      <div className="bg-[#2c2a29]">
        <ul className="relative w-[1100px] m-auto flex py-[20px]">
          <li className="w-[220px]">
            <ContentTitle title="음료" />
            <ul>
              <ContentItem name="콜드 브루" />
              <ContentItem name="브루드 커피" />
              <ContentItem name="에스프레소" />
              <ContentItem name="프라푸치노" />
              <ContentItem name="블렌디드 음료" />
              <ContentItem name="스타벅스 피지오" />
              <ContentItem name="티(티바나)" />
              <ContentItem name="기타 제조 음료" />
              <ContentItem name="스타벅스 주스(병음료)" />
            </ul>
          </li>
          <li className="w-[220px]">
            <ContentTitle title="푸드" />
            <ul>
              <ContentItem name="베이커리" />
              <ContentItem name="케익" />
              <ContentItem name="샌드위치 & 샐러드" />
              <ContentItem name="따뜻한 푸드" />
              <ContentItem name="과일 & 요거트" />
              <ContentItem name="스낵 & 미니 디저트" />
              <ContentItem name="아이스크림" />
            </ul>
          </li>
          <li className="w-[220px]">
            <ContentTitle title="상품" />
            <ul>
              <ContentItem name="머그" />
              <ContentItem name="글라스" />
              <ContentItem name="플라스틱 텀블러" />
              <ContentItem name="스테인리스 텀블러" />
              <ContentItem name="보온병" />
              <ContentItem name="액세서리" />
              <ContentItem name="커피 용품" />
              <ContentItem name="패키지 티(티바나)" />
            </ul>
          </li>
          <li className="w-[220px]">
            <ContentTitle title="카드" />
            <ul>
              <ContentItem name="실물카드" />
              <ContentItem name="e-Gift 카드" />
            </ul>
          </li>
          <li className="w-[220px]">
            <ContentTitle title="메뉴 이야기" />
            <ul>
              <ContentItem name="콜드 브루" />
              <ContentItem name="스타벅스 티바나" />
            </ul>
          </li>
        </ul>
      </div>
      <div className="py-[26px] text-[12px] text-[#999] font-bold bg-[url('/img/main_menu_pattern.jpg')]">
        <div className="relative w-[1100px] m-auto">
          <h4>스타벅스 티바나</h4>
          <p className="text-[#669900] mb-2">
            다양한 찻잎과 향신료 등 개성있는 재료로 새로운 맛과 향의 티를
            선보입니다.
          </p>
        </div>
      </div>
    </div>
  );
}
