type ButtonType = 'primary' | 'reverse' | 'brown' | 'gold' | 'white';

type ButtonProps = {
  type: ButtonType;
  title: string;
  width?: string;
  styles?: string;
};

function hoverStyleOnButtonType(type: string) {
  switch (type) {
    case 'primary':
      return 'border-[#333] hover:bg-[#333] hover:text-white';
    case 'reverse':
      return 'bg-[#333] text-white hover:transparent hover:text-[#333]';
    case 'brown':
      return 'text-[#592B18] border-[#592B18] hover:text-white hover:bg-[#592B18]';
    case 'gold':
      return 'text-[#D9AA8A] border-[#D9AA8A] hover:text-white hover:bg-[#D9AA8A]';
    case 'white':
      return 'text-white border-white hover:text-[#333] hover:bg-white';
    default:
      return 'hover:bg-[#333] hover:text-white';
  }
}

export default function Button({ type, title, width, styles }: ButtonProps) {
  return (
    <button
      type="button"
      className={`block w-[${width}] p-[10px] border-2 rounded-[4px] 
        text-[16px] font-bold text-center 
        cursor-pointer box-border ${hoverStyleOnButtonType(type)} ${styles}`}
    >
      {title}
    </button>
  );
}

Button.defaultProps = {
  width: '130px',
  styles: '',
};
