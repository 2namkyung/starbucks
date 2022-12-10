import Button from './Button';

export default function PickYourFavorite() {
  return (
    <div className="bg-[url('/img/favorite_bg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="relative w-[1100px] p-[110px] m-auto">
        <div className="w-[362px] ml-[100px] flex flex-wrap justify-end">
          <img src="/img/favorite_text1.png" alt="" className="mb-[40px]" />
          <img src="/img/favorite_text2.png" alt="" className="mb-[40px]" />
          <Button type="white" title="자세히 보기" />
        </div>
      </div>
    </div>
  );
}
