import Button from './Button';

export default function Reward() {
  return (
    <div className="relative">
      <div className="w-1/2 h-full bg-[#272727] absolute top-0 left-0" />
      <div className="w-1/2 h-full bg-[#d5c798] absolute top-0 right-0" />
      <div className="relative w-[1100px] h-[241px] m-auto bg-[url('/img/rewards.jpg')]">
        <div className="flex flex-wrap w-[250px] absolute bottom-[24px] right-0">
          <Button type="reverse" title="회원가입" styles="mr-[10px]" />
          <Button type="primary" title="로그인" width="110px" />
          <Button type="primary" title="e-Gift 선물하기" styles="mt-[10px]" />
        </div>
      </div>
    </div>
  );
}
