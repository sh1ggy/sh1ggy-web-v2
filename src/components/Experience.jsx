export default function Experience() {
  return (
    <div className="bg-card flex flex-col space-y-6 rounded-2xl p-10 h-full justify-center mx-36">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row space-x-6 mb-9">
          <h1 className="text-primary text-9xl">Exper</h1>
          <img className="h-32" src="../placeholder.svg" />
          <h1 className="text-primary text-9xl">ence</h1>
        </div>

        <div className="flex flex-col">
          <div className="bg-primary text-right p-2 rounded-t-lg">Sonic IT</div>
          <div className="flex flex-row bg-[#838383] rounded-b-lg">
            <div className="flex flex-col rounded-br-lg text-body">
              <button className="bg-page px-24 break-normal">Wings Education</button>
            </div>
            <div className="bg-container rounded-br-lg">
              <ul className="list-disc pl-12 p-8">
                <li className="text-body">
                  Responsible for engaging with internal Sonic IT teams &
                  external vendors via thorough communication to assist with
                  incident resolution and management of critical incidents.
                </li>
                <li className="text-body">
                  Maintenance of case-by-case incident documentation and
                  team-wide knowledge articles as a part of a collaborative
                  effort to document the support process for 30+ different
                  pieces of software.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

