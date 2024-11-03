import Tags from "./Blog/Tags";

interface Job {
  roleName: string;
  company: string;
  location: string;
  link: string;
  date: string;
  bio: string;
  tags: string[];
  colour: string;
  imagePath: string;
}

export default function Experience() {
  const BIO: string =
    "I am currently working at Sonic IT as a Fullstack Software Engineer based in Brisbane, having completed my Bachelor in Computer Science at QUT at the start of 2022 and currently having working rights as an Australian citizen. I have accumulated 3 years of industry experience working in IT, starting in support and now settling in development";

  const JOBS: Job[] = [
    {
      roleName: "Software Engineer",
      company: "Sonic IT",
      location: "Brisbane CBD",
      link: "sonichealthcare.com",
      date: "Nov 2023 - Current",
      bio: "Spearheaded the E2E development of a front-end for a Client administrative portal built with React + Vite, TailwindCSS & React Router",
      tags: ["React", "TypeScript", ".NET"],
      colour: "#12316e",
      imagePath: "../sonic.svg",
    },
    {
      roleName: "Systems Support",
      company: "Sonic IT",
      location: "Brisbane CBD",
      link: "sonichealthcare.com",
      date: "May 2022 - Nov 2023",
      bio: "Responsible for troubleshooting medical software supported by Sonic IT, thorough communication with users & internal teams",
      tags: ["MySQL", "Troubleshooting", "Documentation"],
      colour: "#12316e",
      imagePath: "../sonic.svg",
    },
    {
      roleName: "IT Supervisor & SM Designer",
      company: "Wings Education",
      location: "Fortitude Valley",
      link: "wingseducation.com.au",
      date: "Aug 2021 - May 2022",
      bio: "Led development on an LMS using Moodle (PHP) & SQL, managed company social media platforms as well as composed major pieces of internal documentation.",
      tags: ["MySQL", "PHP", "Design", "Training"],
      colour: "#ff5252",
      imagePath: "../wings.svg",
    },
  ];

  return (
    <div className="flex flex-col space-y-6 rounded-2xl mx-10 lg:mx-24">
      <div className="flex flex-col w-full">
        <h1 className="text-primary drop-shadow-lg mb-12 text-5xl text-center w-full lg:text-6xl">
          Experience
        </h1>
        <ul className="timeline timeline-snap-icon timeline-vertical">
          {JOBS.map((j, i: number) => {
            const isEven = i % 2 == 0;
            return (
              <li>
                <hr className="bg-primary" />
                <div className="timeline-middle">
                  <div className="w-5 h-5 bg-primary rounded-lg" />
                </div>
                <div
                  className={`${
                    isEven
                      ? "timeline-start text-right"
                      : "timeline-end text-left"
                  } h-full rounded-md border-card flex flex-col mx-12 gap-2`}
                >
                  <p className="transition-colors text-lg duration-200">
                    {j.roleName}{" "}
                    <a
                      href={`https://www.${j.link}`}
                      className="text-primary hover:text-link transition-colors duration-200"
                    >
                      @ {j.company}
                    </a>
                  </p>
                  <p className="font-mono text-sm">{j.date}</p>
                  <p className="mt-auto">{j.bio}</p>
                  <div className="mt-auto">
                    <Tags tags={j.tags} isDark />
                  </div>
                </div>
                <hr className="bg-primary" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
