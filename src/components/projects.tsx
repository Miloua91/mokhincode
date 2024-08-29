interface Details {
  projectTitle: string; // title of the project.
  image: string; // image for destop or large size screens, the image should be small, 350 by 197 px.
  imageSet: string; // image for smaller screens, i used 950 in width images.
  description: string; // description of the project.
  link: string; // url to the project, website or code.
  Pstyle: string; // to style the project like color or margins.
  date: string; // project publication date.
  githubLink: string; // github url of the project.
  postLink: string; // url to the blog post about the project.
  // Arrays for project stack badges and links
  badges: string[];
  stacks: string[];
  stackLinks: string[];
  // Array of buttons
  button1: string;
  button2: string;
  button3: string;
}

//TODO: Change badge with stack in alt

export default function Project(Project: Details) {
  return (
    <div
      className={`dark:bg-stone-600 dark:text-stone-100 dark:border-stone-500 my-6 lg:w-full m-auto ${Project.Pstyle} bg-stone-50 rounded-md px-2 py-1 border border-gray-300 shadow`}
    >
      <div className="text-xl font-semibold flex justify-between">
        <a href={Project.link} target="_blank" rel="noreferrer">
          {Project.projectTitle}
        </a>
        <time>{Project.date}</time>
      </div>
      <div className="flex flex-col md:flex-row md:gap-7">
        <a
          href={Project.link}
          className="h-fit"
          target="_blank"
          rel="noreferrer"
        >
          <picture>
            <source media="(max-width: 767px)" srcSet={Project.imageSet} />
            <source media="(min-width: 768px)" srcSet={Project.image} />
            <img
              className="w-full h-auto hover:shadow hover:opacity-90 m-auto md:w-[350px] md:h-[197px] md:max-w-none rounded-md"
              src={Project.image}
              width={350}
              height={197}
              alt={Project.projectTitle}
            />
          </picture>
        </a>
        <div className="md:w-1/2 text-xl flex flex-col justify-evenly">
          <p> {Project.description} </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {Project.badges.map((badge, index) => (
              <a
                href={Project.stackLinks[index]}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={badge}
                  alt={badge}
                  className="rounded w-auto h-[28px]"
                  width={110}
                  height={28}
                />
              </a>
            ))}
          </div>
          <div className="flex flex-col md:flex-row md:gap-2 my-4 md:text-[16px]">
            {Project.button1 && (
              <a
                className="my-2 w-full text-center text-lg bg-white hover:bg-gray-100 text-gray-800 md:pb-1 px-1 border border-gray-400 rounded-lg shadow"
                href={Project.link}
                target="_blank"
                rel="noreferrer"
              >
                {Project.button1}
              </a>
            )}

            {Project.button2 && (
              <a
                className="my-2 w-full text-center text-lg bg-white hover:bg-gray-100 text-gray-800 md:pb-1 px-1 border border-gray-400 rounded-lg shadow"
                href={Project.githubLink}
                target="_blank"
                rel="noreferrer"
              >
                {Project.button2}
              </a>
            )}
            {Project.button3 && (
              <a
                className="my-2 w-full text-center text-lg bg-white hover:bg-gray-100 text-gray-800 md:pb-1 px-1 border border-gray-400 rounded-lg shadow"
                href={Project.postLink}
              >
                {Project.button3}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
