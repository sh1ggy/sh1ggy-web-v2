import FolderStructure from "./ui/folder-structure";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center p-10 gap-12 lg:mx-14">
      <FolderStructure />

      {/* <Carousel opts={{ align: "center" }} className="max-w-full w-full">
        <CarouselContent>
          {PROJECTS.map((proj, i) => (
            <CarouselItem key={i} className="w-full">
              <div className="p-1">
                <Card className="p-12 gap-4 flex flex-col">
                  <CardHeader className="flex flex-col text-center">
                    <CardTitle>
                      <a
                        href={proj.repo}
                        className="hover:scale-110 transition-transform duration-200"
                      >
                        <h1
                          style={{ color: proj.colour }}
                          className="text-4xl hover:scale-110 transition-transform duration-200"
                        >
                          {proj.name}
                        </h1>
                      </a>
                    </CardTitle>
                    <CardDescription className="flex flex-col gap-4">
                      <p>{proj.desc}</p>
                      <div className="flex items-center justify-center gap-3">
                        {proj.tags.map((tag) => tag)}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-center p-6">
                    <img src={proj.imagePath} />
                  </CardContent>
                </Card>
              </div>
            )
          })
        }
      </div> */}
    </div>
  );
}
