import Button from './Button';

export default function Visual() {
  return (
    <div className="mt-[120px] bg-[url('/img/visual_bg.jpg')] bg-center">
      <div className="relative w-[1100px] h-[646px] m-auto">
        <div className="absolute top-[88px] left-[-10px]">
          <img
            src="/img/visual_title.png"
            alt="STARBUCKS DELIGHTFUL START TO THE YEARS"
          />
          <Button type="brown" title="자세히보기" />
        </div>
        <img
          src="/img/visual_cup1.png"
          alt="NEW OATMEAL LATTE"
          className="absolute bottom-0 right-[-47px]"
        />
        <img
          src="/img/visual_cup1_text.png"
          alt="오트밀 라떼"
          className="absolute top-[38px] right-[171px]"
        />
        <img
          src="/img/visual_cup2.png"
          alt="NEW STARBUCKS CARAMEL CRUMBLE MOCHA"
          className="absolute bottom-0 right-[162px]"
        />
        <img
          src="/img/visual_cup2_text.png"
          alt="스타벅스 카라멜 크럼블 모카"
          className="absolute top-[321px] right-[416px]"
        />
        <img
          src="/img/visual_spoon.png"
          alt="Spoon"
          className="absolute bottom-0 left-[275px]"
        />
      </div>
    </div>
  );
}
