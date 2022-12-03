import ContentTitle from './ContentTitle';
import ContentItem from './ContentItem';

export default function ResponsibilityContents() {
  return (
    <div className="w-full fixed left-0">
      <div className="bg-[#2c2a29]">
        <ul className="relative w-[1100px] m-auto flex py-[20px]">
          <li className="w-[220px]">
            <ContentTitle title="지역 사회 참여 활동" />
            <ul>
              <ContentItem name="희망배달 캠페인" />
              <ContentItem name="재능기부 카페 소식" />
              <ContentItem name="커뮤니티 스토어" />
              <ContentItem name="청년인재 양성" />
              <ContentItem name="우리 농산물 사랑 캠페인" />
              <ContentItem name="우리 문화 지키기" />
            </ul>
          </li>
          <li className="w-[220px]">
            <ContentTitle title="환경보호 활동" />
            <ul>
              <ContentItem name="환경 발자국 줄이기" />
              <ContentItem name="일회용 컵 없는 매장" />
              <ContentItem name="커피 원두 재활용" />
            </ul>
          </li>
          <li className="w-[220px]">
            <ContentTitle title="윤리 구매" />
            <ul>
              <ContentItem name="윤리적 원두 구매" />
              <ContentItem name="공정무역 인증" />
              <ContentItem name="커피 농가 지원 활동" />
            </ul>
          </li>
          <li className="w-[220px]">
            <ContentTitle title="글로벌 사회 공헌" />
            <ul>
              <ContentItem name="윤리경영 보고서" />
              <ContentItem name="스타벅스 재단" />
              <ContentItem name="지구촌 봉사의 달" />
            </ul>
          </li>
        </ul>
      </div>
      <div className="py-[26px] text-[12px] text-[#999] font-bold bg-[url('/img/main_menu_pattern.jpg')]">
        <div className="relative w-[1100px] m-auto">
          <h4>커피원두 재활용</h4>
          <p className="text-[#669900] mb-2">
            스타벅스 커피 원두를 재활용 해보세요.
          </p>
        </div>
      </div>
    </div>
  );
}
