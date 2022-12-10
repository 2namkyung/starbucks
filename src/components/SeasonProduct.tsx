import Button from './Button';

export default function SeasonProduct() {
  return (
    <div className="bg-[url('/img/season_product_bg.jpg')]">
      <div className="relative w-[1100px] h-[400px] m-auto">
        <img
          src="/img/floating3.png"
          alt="Icon"
          className="absolute top-[-200px] right-0"
        />
        <img src="/img/season_product_image.png" alt="season_product_image" />
        <div className="absolute top-[110px] right-[100px]">
          <img
            src="/img/season_product_text1.png"
            alt=""
            className="mb-[10px]"
          />
          <img
            src="/img/season_product_text2.png"
            alt=""
            className="mb-[15px]"
          />

          <Button type="primary" title="자세히보기" width="150px" />
        </div>
      </div>
    </div>
  );
}
