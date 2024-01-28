import { useState } from "react";
import { Toggle } from "./ui/toggle.tsx";
export function Front() {
	const [onClick, setOnClick] = useState(false);
	function Butt() {
		if (!onClick) {
			setOnClick(true);
		} else {
			setOnClick(false);
		}
	}
	return (
		<>
			<div className="text-center text-2xl md:text-3xl lg:w-[760px] md:m-auto">
				hello there! i'am miloua mokhtar, a frontend developer with a problem
				solving mindset and making things work. take a look at my projects or
				<Toggle
					className="disabled mx-1 text-2xl md:text-3xl hover:bg-gray-100 text-gray-800 h-8 pb-1 md:h-9 md:pb-2 px-1 border border-gray-400 rounded-lg shadow"
					type="button"
					onClick={Butt}
				>
					contact
				</Toggle>
				me to work on yours.
				<hr className="lg:w-[760px] m-auto border-gray-400 my-4" />
				<div
					className={`transition-all ease-out ${
						onClick ? "duration-200" : "duration-500 delay-500 -mb-28 sm:-mb-16"
					}`}
				>
					<div
						className={`transition-all duration-500 ${
							onClick
								? "ease-out opacity-100 translate-y-0 delay-100"
								: "ease-in -translate-y-4 opacity-0 pointer-events-none"
						}`}
					>
						<div className="w-full grid md:flex gap-2 md:gap-28">
							<div className="w-full grid grid-flow-col justify-items-center md:flex md:justify-between">
								<a
									className=" text-lg"
									href="mailto:miloua23@gmail.com"
									target="_blank"
									rel="noreferrer"
								>
									ceo@mokhincode.com
								</a>
								<a
									href="https://www.upwork.com/freelancers/~01075155f047bedf73"
									target="_blank"
									rel="noreferrer"
								>
									<img src="/upwork.svg" width={96} height={96} alt="upwork" />
								</a>
							</div>
							<div className="w-full grid grid-cols-3  justify-items-center md:flex md:justify-between">
								<a
									href="https://www.linkedin.com/in/mokhtar-miloua/"
									target="_blank"
									rel="noreferrer"
								>
									{" "}
									<img
										src="/linkedin.svg"
										alt="LinkedIN"
										width={32}
										height={32}
									/>
								</a>
								<a
									href="https://github.com/Miloua91"
									target="_blank"
									rel="noreferrer"
								>
									{" "}
									<img
										src="/github.svg"
										width={32}
										height={32}
										alt="GitHub"
									/>{" "}
								</a>
								<a
									href="https://www.instagram.com/miloua191"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src="/instagram.svg"
										width={32}
										height={32}
										alt="Instagram"
									/>
								</a>
							</div>
						</div>
					</div>
					<hr
						className={`transition-all duration-500 ${
							onClick
								? "opacity-100 ease-out translate-y-0"
								: "ease-in -translate-y-4 opacity-0"
						} lg:w-[760px] m-auto border-gray-400 my-4`}
					/>
				</div>
			</div>
		</>
	);
}
