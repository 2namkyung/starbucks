import { useCallback, useState } from 'react';

export default function Search() {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const placeholder = isFocus ? '통합검색' : '';

  const onFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const onBlur = useCallback(() => {
    setIsFocus(false);
  }, []);

  return (
    <div className="relative h-[34px] my-auto">
      <input
        className="w-[36px] h-[34px] px-[4px] py-[10px] text-xs text-[#777]
          border-[1px] border-[#ccc] border-box rounded-[5px] outline-none bg-white 
          focus:w-[190px] focus:outline-[#669900] transition-[width] duration-500"
        placeholder={placeholder}
        type="text"
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <div
        className={`${
          isFocus && 'hidden'
        } material-icons absolute h-[24px] top-0 bottom-0 right-[5px] m-auto`}
      >
        search
      </div>
    </div>
  );
}
