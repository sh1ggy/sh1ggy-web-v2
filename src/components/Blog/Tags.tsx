interface Props {
  tags: string[];
}
export default function Tags({ tags }: Props) {
  return (
    <div className="flex gap-3 flex-wrap">
      {tags &&
        tags.map((tag: string, i: number) => (
          <div
            key={i}
            className="bg-[#565b68] hover:bg-[#777d8e] text-body text-xs cursor-default flex items-center justify-center text-center transition-colors h-full rounded-lg py-1 px-2 flex-grow"
          >
            {tag}
          </div>
        ))}
    </div>
  );
}
