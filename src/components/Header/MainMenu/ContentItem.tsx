type ContentItemProps = {
  name: string;
};

export default function ContentItem({ name }: ContentItemProps) {
  return (
    <li className="py-[5px] text-xs text-[#999] cursor-pointer hover:text-[#669900]">
      {name}
    </li>
  );
}
