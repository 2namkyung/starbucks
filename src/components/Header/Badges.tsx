import { throttle } from 'lodash';
import { useEffect, useMemo, useState } from 'react';

export default function Badges() {
  const initialIsBadge = window.scrollY < 500;

  const [isBadge, setIsBadge] = useState<boolean>(initialIsBadge);
  const isBadgeAnimation = !isBadge
    ? 'ease-out  opacity-0'
    : 'ease-out opacity-100';

  const throttledScroll = useMemo(
    () =>
      throttle(() => {
        if (window.scrollY > 700) {
          setIsBadge(false);
        } else {
          setIsBadge(true);
        }
      }, 300),
    [],
  );

  useEffect(() => {
    window.addEventListener('scroll', throttledScroll);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [throttledScroll]);

  return (
    <div
      className={`transition-opacity duration-700 ${isBadgeAnimation} absolute top-[132px] right-[12px]`}
    >
      <div className="rounded-lg overflow-hidden cursor-pointer mb-2">
        <img src="/img/badge1.jpg" alt="Badge1" />
      </div>
      <div className="rounded-lg overflow-hidden cursor-pointer">
        <img src="/img/badge2.jpg" alt="Badge2" />
      </div>
    </div>
  );
}
