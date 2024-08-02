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
      <div className="dark:bg-stone-700 2xl:w-1/2 text-center text-2xl md:text-3xl lg:w-[798px] md:m-auto bg-white rounded-md pt-2 border-l border-r border-t dark:border-stone-600 shadow">
        <p className="px-4">
          hello there! i'am miloua mokhtar, a software developer with a strong
          problem-solving mindset and a passion for creating functional,
          efficient, and user-friendly applications. take a look at my projects
          or
          <Toggle
            className="disabled mx-1 text-2xl md:text-3xl hover:bg-gray-100 text-gray-800 h-8 pb-1 md:h-9 md:pb-2 px-1 border border-gray-400 rounded-lg shadow bg-white"
            type="button"
            onClick={Butt}
          >
            contact
          </Toggle>
          me to collaborate on your next project.
        </p>
        <div
          className={`transition-all ease-out rounded-bl-md rounded-br-md ${onClick ? "duration-200 max-h-28 md:max-h-16" : "duration-500 delay-500 max-h-0 opacity-0"}`}
        >
          <hr className="dark:border-stone-100 2xl:w-full lg:w-[798px] m-auto border-gray-400 my-4" />

          <div>
            <div
              className={`transition-all duration-500 ${
                onClick
                  ? "ease-out opacity-100 translate-y-0 delay-100"
                  : "ease-in -translate-y-4 opacity-0 pointer-events-none"
              }`}
            >
              <div className="w-full px-2 grid md:flex gap-2 md:gap-28">
                <div className="w-full grid grid-flow-col justify-items-center md:flex md:justify-between">
                  <a
                    className=" text-lg"
                    href="mailto:miloua23@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    miloua23@gmail.com
                  </a>
                  <a
                    href="https://www.upwork.com/freelancers/~01075155f047bedf73"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="32"
                      viewBox="0 0 512 153"
                    >
                      <title>Upwork</title>
                      <path
                        fill="#6FDA44"
                        d="M140.107 96.628c-8.321 0-16.118-3.523-23.202-9.258l1.725-8.096l.075-.3c1.536-8.62 6.409-23.089 21.402-23.089c11.244 0 20.39 9.146 20.39 20.39c-.038 11.207-9.183 20.353-20.39 20.353m0-61.395c-19.154 0-33.996 12.444-40.03 32.909c-9.221-13.831-16.193-30.435-20.278-44.416H59.184v53.636c0 10.57-8.621 19.19-19.191 19.19c-10.57 0-19.19-8.62-19.19-19.19V23.726H.186v53.636c-.075 21.965 17.804 39.993 39.768 39.993c21.965 0 39.844-18.028 39.844-39.993v-8.995c4.01 8.358 8.92 16.791 14.88 24.288l-12.632 59.37h21.103l9.145-43.066c8.021 5.135 17.242 8.359 27.812 8.359c22.601 0 41.005-18.516 41.005-41.118c0-22.564-18.404-40.967-41.005-40.967"
                      />
                      <path
                        className="dark:fill-white"
                        d="m244.043 37.557l13.306 53.636l14.656-53.636h17.466l-22.526 77.512h-17.467l-13.83-53.974l-13.794 53.936h-17.466L181.86 37.52h17.467l14.655 53.636l13.306-53.636h16.754zm87.22-2.324c-22.676 0-41.042 18.403-41.042 41.042c0 22.677 18.403 41.043 41.042 41.043c22.677 0 41.08-18.366 41.08-41.043c0-22.676-18.403-41.042-41.08-41.042m0 65.218c-13.343 0-24.138-10.795-24.138-24.138c0-13.344 10.832-24.138 24.138-24.138c13.344 0 24.138 10.794 24.138 24.138c0 13.306-10.794 24.138-24.138 24.138m90.968-45.54c-11.731 0-21.214 9.52-21.214 21.214v38.906h-17.58V37.557h17.58v11.919s7.496-11.957 22.901-11.957h5.397v17.392zm58.997 18.366c12.48-7.047 20.952-20.428 20.952-35.758H484.6c0 12.931-10.494 23.426-23.425 23.426h-2.362V.15h-17.578v114.88h17.578V78.524h2.1c1.724 0 3.973 1.125 4.985 2.511l24.962 33.996h21.065z"
                      />
                    </svg>
                  </a>
                </div>
                <div className="w-full grid grid-cols-3  justify-items-center md:flex md:justify-between">
                  <a
                    href="https://www.linkedin.com/in/mokhtar-miloua/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      className="dark:fill-white"
                    >
                      <path
                        fill="currentColor"
                        d="M27.26 27.271h-4.733v-7.427c0-1.771-.037-4.047-2.475-4.047c-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739V11.999h4.552v2.083h.061c.636-1.203 2.183-2.468 4.491-2.468c4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912a2.75 2.75 0 0 1-2.751-2.756a2.753 2.753 0 1 1 2.751 2.756m2.374 17.359H4.74V12h4.749zM29.636 0H2.36C1.057 0 0 1.031 0 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307V2.307C32 1.031 30.932 0 29.631 0z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/Miloua91"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      className="dark:fill-white"
                    >
                      <title>Github</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>{" "}
                  </a>
                  <a
                    href="https://www.instagram.com/miloua191"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M7.03.084c-1.277.06-2.149.264-2.91.563a5.874 5.874 0 0 0-2.124 1.388a5.878 5.878 0 0 0-1.38 2.127C.321 4.926.12 5.8.064 7.076C.008 8.354-.005 8.764.001 12.023c.007 3.259.021 3.667.083 4.947c.061 1.277.264 2.149.563 2.911c.308.789.72 1.457 1.388 2.123a5.872 5.872 0 0 0 2.129 1.38c.763.295 1.636.496 2.913.552c1.278.056 1.689.069 4.947.063c3.257-.007 3.668-.021 4.947-.082c1.28-.06 2.147-.265 2.91-.563a5.881 5.881 0 0 0 2.123-1.388a5.881 5.881 0 0 0 1.38-2.129c.295-.763.496-1.636.551-2.912c.056-1.28.07-1.69.063-4.948c-.006-3.258-.02-3.667-.081-4.947c-.06-1.28-.264-2.148-.564-2.911a5.892 5.892 0 0 0-1.387-2.123a5.857 5.857 0 0 0-2.128-1.38c-.764-.294-1.636-.496-2.914-.55C15.647.009 15.236-.006 11.977 0C8.718.008 8.31.021 7.03.084m.14 21.693c-1.17-.05-1.805-.245-2.228-.408a3.736 3.736 0 0 1-1.382-.895a3.695 3.695 0 0 1-.9-1.378c-.165-.423-.363-1.058-.417-2.228c-.06-1.264-.072-1.644-.08-4.848c-.006-3.204.006-3.583.061-4.848c.05-1.169.246-1.805.408-2.228c.216-.561.477-.96.895-1.382a3.705 3.705 0 0 1 1.379-.9c.423-.165 1.057-.361 2.227-.417c1.265-.06 1.644-.072 4.848-.08c3.203-.006 3.583.006 4.85.062c1.168.05 1.804.244 2.227.408c.56.216.96.475 1.382.895c.421.42.681.817.9 1.378c.165.422.362 1.056.417 2.227c.06 1.265.074 1.645.08 4.848c.005 3.203-.006 3.583-.061 4.848c-.051 1.17-.245 1.805-.408 2.23c-.216.56-.477.96-.896 1.38a3.705 3.705 0 0 1-1.378.9c-.422.165-1.058.362-2.226.418c-1.266.06-1.645.072-4.85.079c-3.204.007-3.582-.006-4.848-.06m9.783-16.192a1.44 1.44 0 1 0 1.437-1.442a1.44 1.44 0 0 0-1.437 1.442M5.839 12.012a6.161 6.161 0 1 0 12.323-.024a6.162 6.162 0 0 0-12.323.024M8 12.008A4 4 0 1 1 12.008 16A4 4 0 0 1 8 12.008"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`transition-all duration-500 ${
                onClick
                  ? "opacity-100 ease-out translate-y-0"
                  : "ease-in -translate-y-4 opacity-0"
              } 2xl:w-full lg:w-[798px] m-auto border-gray-400 pb-1 my-4`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
