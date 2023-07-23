interface Props {
  tags: string[];
}
export default function Tags({ tags }: Props) {
  return (
    <div className="flex flex-row gap-3 rounded-l">
      {
        tags.map((tag: string) => (
          <div className="bg-card rounded-lg p-2">{tag}</div>
        ))
      }
    </div>
  )
}
