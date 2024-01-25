interface Details {
	title: string; // title of the project.
	image: string; // image for destop or large size screens, the image should be small, 350 by 197 px.
	imageSet: string; // image for smaller screens, i used 950 in width images.
	description: string; // description of the project.
	link: string; // url to the project, website or code.
	style: string; // to style the project like color or margins.
	date: string; // project publication date.
	githubLink: string; // github url of the project.
	postLink: string; // url to the blog post about the project.
	// project stack badges and links from shieldio.
	badgeI: string;
	badgeII: string;
	badgeIII: string;
	badgeIV: string;
	badgeV: string;
	badgeVI: string;
	stackI: string;
	stackII: string;
	stackIII: string;
	stackIV: string;
	stackV: string;
	stackVI: string;
	stackLinkI: string;
	stackLinkII: string;
	stackLinkIII: string;
	stackLinkIV: string;
	stackLinkV: string;
	stackLinkVI: string;
}

export function Project(Project: Details) {
	return (
		<div className={`my-6 lg:w-[760px] m-auto ${Project.style}`}>
			<div className="text-xl font-semibold flex justify-between">
				<a href={Project.link} target="_blank" rel="noreferrer">
					{Project.title}
				</a>
				<time>{Project.date}</time>
			</div>
			<div className="flex flex-col md:flex-row md:gap-10">
				<a href={Project.link} target="_blank" rel="noreferrer">
					<picture>
						<source media="(max-width: 767px)" srcSet={Project.imageSet} />
						<source media="(min-width: 768px)" srcSet={Project.image} />
						<img
							className="w-full hover:shadow  hover:opacity-90 md:w-[350px] md:h-[197px] m-auto"
							src={Project.image}
							width={350}
							height={197}
							alt={Project.title}
						/>
					</picture>
				</a>
				<div className="md:w-1/2 text-xl flex flex-col justify-evenly">
					<div> {Project.description} </div>
					<div className="flex flex-wrap gap-2 mt-2">
						<a href={Project.stackLinkI} target="_blank" rel="noreferrer">
							<img
								src={Project.badgeI}
								alt={Project.stackI}
								className="rounded"
							/>
						</a>
						<a href={Project.stackLinkII} target="_blank" rel="noreferrer">
							<img
								src={Project.badgeII}
								alt={Project.stackII}
								className="rounded"
							/>
						</a>
						<a href={Project.stackLinkIII} target="_blank" rel="noreferrer">
							{" "}
							<img
								src={Project.badgeIII}
								alt={Project.stackIII}
								className="rounded"
							/>
						</a>
						<a href={Project.stackLinkIV} target="_blank" rel="noreferrer">
							{" "}
							<img
								src={Project.badgeIV}
								alt={Project.stackIV}
								className="rounded"
							/>
						</a>
						<a href={Project.stackLinkV} target="_blank" rel="noreferrer">
							<img
								src={Project.badgeV}
								alt={Project.stackV}
								className="rounded"
							/>
						</a>
						<a href={Project.stackLinkVI} target="_blank" rel="noreferrer">
							<img
								src={Project.badgeVI}
								alt={Project.stackVI}
								className="rounded"
							/>
						</a>
					</div>
					<div className="flex flex-col md:flex-row md:justify-between my-4 md:text-[16px]">
						<a
							className="my-2 text-center hover:bg-gray-100 text-gray-800  md:pb-1 px-1 border border-gray-400 rounded-lg shadow"
							href={Project.link}
							target="_blank"
							rel="noreferrer"
						>
							Check the Site
						</a>
						<a
							className="my-2 text-center hover:bg-gray-100 text-gray-800  md:pb-1 px-1 border border-gray-400 rounded-lg shadow"
							href={Project.githubLink}
							target="_blank"
							rel="noreferrer"
						>
							Check the Code
						</a>
						<a
							className="my-2 text-center hover:bg-gray-100 text-gray-800  md:pb-1 px-1 border border-gray-400 rounded-lg shadow"
							href={Project.postLink}
						>
							Check my Post
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
