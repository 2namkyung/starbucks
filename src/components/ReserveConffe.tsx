import Button from './Button';

export default function ReserveConffe() {
  return (
    <div className="bg-[url('/img/reserve_bg.jpg')]">
      <div className="relative w-[1100px] h-[400px] m-auto">
        <img
          src="/img/reserve_logo.png"
          alt=""
          className="absolute top-[110px] left-0"
        />
        <div className="absolute top-[124px] left-[208px]">
          <img src="/img/reserve_text.png" alt="" />
          <Button type="gold" title="자세히 보기" />
        </div>
        <img
          src="/img/reserve_image.png"
          alt=""
          className="absolute top-0 right-0"
        />
      </div>
    </div>
  );
}
