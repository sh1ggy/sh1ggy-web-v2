interface Props {
  tags: string[];
  isDark: boolean;
}
export default function Tags({ tags, isDark }: Props) {
  return (
    <div className="flex gap-3">
      {tags &&
        tags.map((tag: string, i: number) => (
          <div
            key={i}
            className={`${isDark ? "bg-card hover:bg-[#565b68]" : "bg-[#565b68] hover:bg-[#777d8e]"} text-body text-xs cursor-default flex items-center justify-center text-center transition-colors h-full rounded-lg py-1 px-2 flex-grow`}
          >
            {tag}
          </div>
        ))}
    </div>
  );
}
