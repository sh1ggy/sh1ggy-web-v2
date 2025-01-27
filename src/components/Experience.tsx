import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

interface Job {
  roleName: string;
  company: string;
  location: string;
  link: string;
  date: string;
  bio: string;
  tags: string[];
  colour: string;
  bgColour: string;
  imagePath: string;
}

const BIO: string =
  "I am currently working at Sonic IT as a Fullstack Software Engineer based in Brisbane, having completed my Bachelor in Computer Science at QUT at the start of 2022 and currently having working rights as an Australian citizen. I have accumulated 3 years of industry experience working in IT, starting in support and now settling in development";

export default function Experience() {
  const JOBS: Job[] = [
    {
      roleName: "Software Engineer",
      company: "Sonic IT",
      location: "Brisbane CBD",
      link: "sonichealthcare.com",
      date: "Nov 2023 - Current",
      bio: "Spearheaded the development of a Client administrative front-end built with React + Vite, TailwindCSS & React Router. Also led OAuth Azure integration.",
      tags: ["React", "TypeScript", ".NET", "TailwindCSS", "Azure"],
      colour: "#12316e",
      bgColour: "#4c6da9",
      imagePath: "../sonic.svg",
    },
    {
      roleName: "Systems Support",
      company: "Sonic IT",
      location: "Brisbane CBD",
      link: "sonichealthcare.com",
      date: "May 2022 - Nov 2023",
      bio: "Responsible for troubleshooting medical software supported by Sonic IT via incident management thorough communication with users & internal teams",
      tags: ["MySQL", "Troubleshooting", "Documentation"],
      colour: "#12316e",
      bgColour: "#4c6da9",
      imagePath: "../sonic.svg",
    },
    {
      roleName: "IT Supervisor & SM Designer",
      company: "Wings Education",
      location: "Fortitude Valley",
      link: "wingseducation.com.au",
      date: "Aug 2021 - May 2022",
      bio: "Led development of LMS using Moodle (PHP) & SQL, managed company social media platforms and composed key internal documentation.",
      tags: ["MySQL", "PHP", "Design", "Training", "Documentation"],
      colour: "#ff5252",
      bgColour: "#f7a1a1",
      imagePath: "../wings.svg",
    },
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto px-12 py-8">
      <Carousel
        opts={{
          align: "center",
        }}
      >
        <CarouselContent>
          {JOBS.map((j, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
              <div className="group perspective">
                <Card className="xl:w-[290px] xl:h-[420px] [transform-style:preserve-3d] transition-all duration-500 group-hover:[transform:rotateY(180deg)]">
                  <CardContent
                    style={{ backgroundColor: j.bgColour }}
                    className="absolute inset-0 [backface-visibility:hidden]  bg-gradient-to-br from-blue-300 to-blue-100 p-2 rounded-xl flex items-center justify-center"
                  >
                    <p className="flex flex-col justify-center items-center text-xl font-bold text-center text-blue-800">
                      <img src={j.imagePath} />
                    </p>
                  </CardContent>
                  <CardContent className="flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-yellow-300 to-yellow-100 p-6">
                    <CardHeader>
                      <h3
                        style={{ color: j.colour }}
                        className="text-2xl font-bold text-blue-600 mb-2"
                      >
                        {j.company}
                      </h3>
                      <p className="text-lg font-semibold text-blue-800">
                        {j.roleName}
                      </p>
                      <p className="text-sm text-gray-600 mb-4">{j.date}</p>
                      <p className="text-sm">{j.bio}</p>
                    </CardHeader>
                    <CardFooter className="mt-24">
                      <div className="flex flex-wrap gap-1 items-center justify-center">
                        {j.tags.map((skill, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="px-2 py-1 text-xs rounded"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardFooter>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
