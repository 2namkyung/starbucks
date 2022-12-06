import { useCallback, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

import Button from './Button';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

export default function Notice() {
  const [togglePromotion, setTogglePromotion] = useState(false);

  const onToggle = useCallback(() => {
    setTogglePromotion((prev) => !prev);
  }, []);

  return (
    <div>
      <div className="relative">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-[#333]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f6f5ef]" />
        <div className="relative flex w-[1100px] h-[62px] m-auto">
          <div className="flex items-center w-[60%] h-full bg-[#333]">
            <h2 className="text-white text-[17px] font-bold mr-[20px]">
              공지사항
            </h2>
            <div className="relative grow h-[62px]">
              <Swiper
                className="h-[62px]"
                modules={[Autoplay]}
                direction="vertical"
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                loop
              >
                <SwiperSlide className="flex items-center text-white">
                  크리스마스 & 연말연시 스타벅스 매장 영업시간 변경 안내
                </SwiperSlide>
                <SwiperSlide className="flex items-center text-white">
                  [당첨자 발표] 2022 스타벅스 플래너 영수증 이벤트
                </SwiperSlide>
                <SwiperSlide className="flex items-center text-white">
                  스타벅스커피 코리아 애플리케이션 버전 업데이트 안내
                </SwiperSlide>
                <SwiperSlide className="flex items-center text-white">
                  [당첨자 발표] 뉴이어 전자영수증 이벤트
                </SwiperSlide>
              </Swiper>
            </div>
            <button
              type="button"
              className="w-[62px] h-[62px] flex justify-center items-center"
            >
              <div className="material-icons text-white text-[30px]">
                add_circle
              </div>
            </button>
          </div>
          <div className="flex justify-end items-center w-[40%] h-full">
            <h2 className="text-[17px] font-bold">스타벅스 프로모션</h2>
            <button
              type="button"
              className="w-[62px] h-[62px] flex justify-center items-center"
              onClick={onToggle}
            >
              <div className="material-icons text-[30px]">upload</div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`relative h-[593px] bg-[#f6f5ef] overflow-hidden transition-[height] duration-700 ease-in-out ${
          !togglePromotion && 'h-0'
        }`}
      >
        <Swiper
          className="promotion h-[593px] top-[40px]"
          modules={[Autoplay, Pagination]}
          slidesPerView={3}
          spaceBetween={15}
          centeredSlides
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop
        >
          <SwiperSlide>
            <img src="/img/promotion_slide1.jpg" alt="" />
            <div className="flex justify-center">
              <Button type="primary" title="자세히 보기" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/promotion_slide2.jpg" alt="" />
            <div className="flex justify-center">
              <Button type="primary" title="자세히 보기" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/promotion_slide3.jpg" alt="" />
            <div className="flex justify-center">
              <Button type="primary" title="자세히 보기" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/promotion_slide4.jpg" alt="" />
            <div className="flex justify-center">
              <Button type="primary" title="자세히 보기" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/promotion_slide5.jpg" alt="" />
            <div className="flex justify-center">
              <Button type="primary" title="자세히 보기" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
