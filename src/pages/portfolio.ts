import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  const userAgent = request.headers.get("User-Agent") || "";

  if (!userAgent.includes("curl")) {
    return new Response("This endpoint is only accessible via curl.", {
      status: 403,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
  const body = `
\x1b[1mMiloua Mokhtar Portfolio\x1b[0m
\x1b[34m=========================\x1b[0m

\x1b[1mhello there! nice seeing you in the terminal, i'm miloua mokhtar, a software developer with a strong problem-solving mindset and a passion for creating functional, efficient, and user-friendly applications.\x1b[0m

\x1b[1;4;32mI'm mainly good at these:\x1b[0m

\x1b[31mReact\x1b[0m  \x1b[36m|\x1b[0m  \x1b[31mNext.js\x1b[0m  \x1b[36m|\x1b[0m  \x1b[31mTailwindCSS\x1b[0m  \x1b[36m|\x1b[0m  \x1b[31mReact Native\x1b[0m  \x1b[36m|\x1b[0m  \x1b[31mExpo\x1b[0m  \x1b[36m|\x1b[0m  \x1b[31mPython\x1b[0m

Sometimes working on the frontend, sometimes fullstack. To build my projects, I use Next.js for fullstack apps, Astro to create content-driven websites, Expo for mobile development and style everything with Tailwind.


\x1b[1;4;32mPersonal projects I worked on:\x1b[0m

\x1b[33mClipWarp:\x1b[0m A cross-platform clipboard/links manager with a web app (Astro), mobile app (React Native), and desktop app (Python).

\x1b[37mProject's\x1b[0m
\x1b[36mDetails:\x1b[0m https://mokhincode.com/posts/clipwarp
\x1b[36mCode:\x1b[0m https://github.com/Miloua91/clipwarp

\x1b[33mLibrary Tower:\x1b[0m A minimalist library to read public domain books built with Next.js, Supabase and Tailwind.

\x1b[37mProject's\x1b[0m
\x1b[36mDetails:\x1b[0m https://mokhincode.com/posts/library-tower
\x1b[36mCode:\x1b[0m https://github.com/Miloua91/library-tower
\x1b[36mSite:\x1b[0m https://library-tower.vercel.app

\x1b[33mArtistryNest:\x1b[0m A modern e-commerce website for home furniture made with Next.js and Supabase. 

\x1b[37mProject's\x1b[0m
\x1b[36mDetails:\x1b[0m https://mokhincode.com/posts/artistrynest
\x1b[36mCode:\x1b[0m https://github.com/Miloua91/artistrynest
\x1b[36mSite:\x1b[0m https://artistrynest.vercel.app


\x1b[1;4;32mwhoami:\x1b[0m

I'm a developer from Algeria, I'm mostly into classical books, enjoy philosophy, was addicted to chess, indie music fan and retro video games enjoyer.


\x1b[1;4;32mContact:\x1b[0m

\x1b[36mEmail:\x1b[0m ceo@mokhincode.com  \x1b[31m|\x1b[0m  \x1b[36mGitHub:\x1b[0m https://github.com/Miloua91  \x1b[31m|\x1b[0m  \x1b[36mLinkedIn:\x1b[0m https://linkedin.com/in/mokhtar-miloua
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
