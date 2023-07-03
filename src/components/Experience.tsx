
export default function Experience() {
  const JOBS =
    [
      {
        roleName: "Systems Support",
        company: "Sonic IT",
        location: "Brisbane CBD",
        link: "sonichealthcare.com",
        date: "May 2022 - Current",
        bio: "Responsible for incident management that involves troubleshooting medical software supported by Sonic IT, thorough communication with users & internal teams",
        tags:
          [
            "MySQL",
            "Troubleshooting",
            "Documentation",
          ],
        imagePath: "../sonic.svg"
      },
      {
        roleName: "IT Supervisor & SM Designer",
        company: "Wings Education",
        location: "Fortitude Valley",
        link: "wingseducation.com.au",
        date: "August 2021 - May 2022",
        bio: "Led development on an LMS using Moodle (PHP) & SQL, managed company social media platforms as well as composed major pieces of internal documentation.",
        tags:
          [
            "MySQL",
            "PHP",
            "Design",
            "Training",
          ],
        imagePath: "../wings.svg"
      },
    ]

  return (
    <div className=" flex flex-col space-y-6 rounded-2xl mx-10 lg:mx-24">
      <div className="flex flex-col w-full">
        <div className="flex flex-col lg:flex-row mb-12 items-center space-y-8 lg:space-x-10">
          <h1 className="text-primary drop-shadow-lg text-3xl lg:text-6xl">Experience</h1>
          <p className="text-body drop-shadow-sm lg:text-right text-center">All of my current professional job experience has been in the IT Support space, with a focus on documentation, communication and adaptability. I also have a Bachelor's in IT, majoring in Computer Science @ QUT</p>
        </div>
        {/* Expandable Jobs */}
        <div className="space-y-3">
          {JOBS
            .map((j, i) => (
              <div key={i} className='collapse bg-[#484D59] group shadow-xl rounded-xl transition-transform'>
                <input type="radio" name="my-accordion-1"/>
                {/* Header */}
                <div className="collapse-title font-medium flex flex-col lg:flex-row bg-card group-hover:bg-[#2d2e36]  ease-in-out shadow-sm rounded-xl transition-colors duration-200">
                  <p>{j.roleName} <strong>@ {j.company}</strong></p>
                  <p className="lg:ml-auto">{j.date}</p>
                </div>
                {/* Content */}
                <div className="collapse-content">
                  <div className="flex flex-col lg:flex-row justify-center h-full lg:bottom-0 lg:inset-x-0 space-x-3">
                    <div className="flex flex-col rounded-br-lg">
                      <div className="lg:flex lg:flex-row lg:space-x-12 lg:space-y-0 space-y-9 px-2 py-8 justify-center">
                        <img src={j.imagePath} className="mr-auto" />
                        <div className="lg:flex lg:flex-col space-y-2">
                          <p className="font-bold italic">{j.location}</p>
                          <ul className="lg:relative list-disc">
                            {j.bio}
                          </ul>
                          <a className="text-link font-semibold hover:text-[#a9dbeb] transition-colors duration-200 text-left" href={`https://www.${j.link}`}>{j.link}</a>
                        </div>
                      </div>
                      <div className="lg:flex lg:flex-row grid grid-flow-row grid-cols-2 gap-3 items-center lg:space-x-3 justify-center">
                        {j.tags.map((t, i) => (<div key={i} className="text-body text-xs cursor-default hover:bg-[#565b68] flex items-center justify-center text-center transition-colors bg-card h-full rounded-xl p-2 flex-grow">{t}</div>))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

