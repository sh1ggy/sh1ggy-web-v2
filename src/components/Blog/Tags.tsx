interface Props {
  tags: string[];
}
export default function Tags({ tags }: Props) {
  return (
    <div className="flex flex-row justify-center gap-3 rounded-lg mt-3">
      {
        tags.map((tag: string) => (
          <div className="bg-container rounded-lg p-2">{tag}</div>
        ))
      }
    </div>
  )
}
