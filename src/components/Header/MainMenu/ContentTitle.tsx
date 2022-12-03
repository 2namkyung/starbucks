type ContentTitleProps = {
  title: string;
};

export default function ContentTitle({ title }: ContentTitleProps) {
  return <h4 className="pt-[3px] pb-[12px] text-[14px] text-white">{title}</h4>;
}
