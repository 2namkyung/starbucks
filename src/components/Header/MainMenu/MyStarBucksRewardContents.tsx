import ContentTitle from './ContentTitle';
import ContentItem from './ContentItem';

export default function MyStarBucksRewardContents() {
  return (
    <div className="w-full fixed left-0">
      <div className="bg-[#2c2a29]">
        <ul className="relative w-[1100px] m-auto flex py-[20px]">
          <li className="w-[220px]">
            <ContentTitle title="마이 스타벅스 리워드" />
            <ul>
              <ContentItem name="마이 스타벅스 리워드 소개" />
              <ContentItem name="등급 및 혜택" />
              <ContentItem name="스타벅스 별" />
              <ContentItem name="자주하는 질문" />
            </ul>
          </li>
          <li className="w-[220px]">
            <ContentTitle title="스타벅스 카드" />
            <ul>
              <ContentItem name="스타벅스 카드 소개" />
              <ContentItem name="스타벅스 카드 갤러리" />
              <ContentItem name="등록 및 조회" />
              <ContentItem name="충전 및 이용안내" />
              <ContentItem name="분실신고/환불신청" />
              <ContentItem name="자주하는 질문" />
            </ul>
          </li>
          <li className="w-[220px]">
            <ContentTitle title="스타벅스 카드 e-Gift" />
            <ul>
              <ContentItem name="스타벅스 카드 e-Gift 소개" />
              <ContentItem name="이용안내" />
              <ContentItem name="선물하기" />
              <ContentItem name="자주하는 질문" />
            </ul>
          </li>
        </ul>
      </div>
      <div className="py-[26px] text-[12px] text-[#999] font-bold bg-[url('/img/main_menu_pattern.jpg')]">
        <div className="relative w-[1100px] m-auto">
          <h4>스타벅스 카드 등록하기</h4>
          <p className="text-[#669900] mb-2">
            카드 등록 후 리워드 서비스를 누리고 사용내역도 조회해보세요.
          </p>
        </div>
      </div>
    </div>
  );
}
