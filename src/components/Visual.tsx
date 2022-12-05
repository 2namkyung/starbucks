import { useEffect, useState } from 'react';
import Button from './Button';

export default function Visual() {
  const [animationOne, setAnimationOne] = useState('opacity-0');
  const [animationTwo, setAnimationTwo] = useState('opacity-0');
  const [animationThree, setAnimationThree] = useState('opacity-0');
  const [animationFour, setAnimationFour] = useState('opacity-0');

  useEffect(() => {
    setAnimationOne('ease-out opacity-100 duration-1000 delay-700');
    setAnimationTwo('ease-out opacity-100 duration-1000 delay-[1400ms]');
    setAnimationThree('ease-out opacity-100 duration-1000 delay-[2100ms]');
    setAnimationFour('ease-out opacity-100 duration-1000 delay-[2800ms]');
  }, []);

  return (
    <div className="mt-[120px] bg-[url('/img/visual_bg.jpg')] bg-center">
      <div className="relative w-[1100px] h-[646px] m-auto">
        <div className="absolute top-[88px] left-[-10px]">
          <div className={animationOne}>
            <img
              src="/img/visual_title.png"
              alt="STARBUCKS DELIGHTFUL START TO THE YEARS"
            />
            <Button type="brown" title="자세히보기" />
          </div>
        </div>
        <div className={animationTwo}>
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
        </div>
        <div className={animationThree}>
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
        </div>
        <div className={animationFour}>
          <img
            src="/img/visual_spoon.png"
            alt="Spoon"
            className="absolute bottom-0 left-[275px]"
          />
        </div>
      </div>
    </div>
  );
}
