import ContentTitle from './ContentTitle';
import ContentItem from './ContentItem';

export default function CoffeeContents() {
  return (
    <div className="w-full fixed left-0">
      <div className="bg-[#2c2a29]">
        <ul className="relative w-[1100px] m-auto flex py-[20px]">
          <li className="w-[220px]">
            <ContentTitle title="커피" />
            <ul>
              <ContentItem name="스타벅스 원두" />
              <ContentItem name="스타벅스 비아" />
              <ContentItem name="스타벅스 오리가미" />
            </ul>
          </li>
          <li className="w-[220px]">
            <ContentTitle title="에스프레소 음료" />
            <ul>
              <ContentItem name="도피오" />
              <ContentItem name="에스프레소 마키아또" />
              <ContentItem name="아메리카노" />
              <ContentItem name="마키아또" />
              <ContentItem name="라떼" />
              <ContentItem name="모카" />
              <ContentItem name="리스트레또 비안코" />
            </ul>
          </li>
          <li className="w-[220px]">
            <ContentTitle title="커피 이야기" />
            <ul>
              <ContentItem name="스타벅스 로스트 스팩트럼" />
              <ContentItem name="최상의 아라비카 원두" />
              <ContentItem name="한 잔의 커피가 완성되기까지" />
              <ContentItem name="클로버® 커피 추출 시스템" />
            </ul>
          </li>
          <li className="w-[220px]">
            <ContentTitle title="최상의 커피를 즐기는 법" />
            <ul>
              <ContentItem name="커피 프레스" />
              <ContentItem name="푸어 오버" />
              <ContentItem name="아이스 푸어 오버" />
              <ContentItem name="커피 메이커" />
              <ContentItem name="리저브를 매장에서 다양하게 즐기는 법" />
            </ul>
          </li>
        </ul>
      </div>
      <div className="py-[26px] text-[12px] text-[#999] font-bold bg-[url('/img/main_menu_pattern.jpg')]">
        <div className="relative w-[1100px] m-auto">
          <h4>나와 어울리는 커피 찾기</h4>
          <p className="text-[#669900] mb-2">
            스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.
          </p>
          <h4>최상의 커피를 즐기는 법</h4>
          <p className="text-[#669900] mb-2">
            여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.
          </p>
        </div>
      </div>
    </div>
  );
}
