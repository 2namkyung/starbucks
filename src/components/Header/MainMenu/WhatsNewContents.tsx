import ContentTitle from './ContentTitle';
import ContentItem from './ContentItem';

export default function WhatsNewContents() {
  return (
    <div className="w-full fixed left-0">
      <div className="bg-[#2c2a29]">
        <ul className="relative w-[1100px] m-auto flex py-[20px]">
          <li className="w-[220px]">
            <ContentTitle title="프로모션 & 이벤트" />
            <ul>
              <ContentItem name="전체" />
              <ContentItem name="스타벅스 카드" />
              <ContentItem name="마이 스타벅스 리워드" />
              <ContentItem name="온라인" />
              <ContentItem name="2022 스타벅스 플래너" />
            </ul>
          </li>
          <li className="w-[220px]">
            <ContentTitle title="새소식" />
            <ul>
              <ContentItem name="전체" />
              <ContentItem name="상품 출시" />
              <ContentItem name="스타벅스의 문화" />
              <ContentItem name="스타벅스 사회공헌" />
              <ContentItem name="스타벅스 카드출시" />
            </ul>
          </li>
          <li className="w-[220px]">
            <ContentTitle title="매장별 이벤트" />
            <ul>
              <ContentItem name="일반 매장" />
              <ContentItem name="신규 매장" />
            </ul>
          </li>
        </ul>
      </div>
      <div className="py-[26px] text-[12px] text-[#999] font-bold bg-[url('/img/main_menu_pattern.jpg')]">
        <div className="relative w-[1100px] m-auto">
          <h4>매장별 이벤트</h4>
          <p className="text-[#669900] mb-2">
            스타벅스의 매장 이벤트 정보를 확인 하실 수 있습니다.
          </p>
          <h4>소셜 스타벅스</h4>
          <p className="text-[#669900] mb-2">
            다양한 스타벅스 SNS 채널을 통해 스타벅스를 만나보세요!
          </p>
        </div>
      </div>
    </div>
  );
}
