interface Props {
  tags: string[];
}
export default function Tags({ tags }: Props) {
  return (
    <div className="flex flex-row flex-wrap gap-3 rounded-lg mt-3">
      {
        tags.map((tag: string) => (
          <div className="bg-card rounded-lg p-2">{tag}</div>
        ))
      }
    </div>
  )
}
