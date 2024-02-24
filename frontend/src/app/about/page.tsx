
const Page = async () => {

  return (
    <>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 antialiased">
    {/* // stole from https://flowbite.com/blocks/publisher/blog-templates/ */}
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
        {/* using flowbite typography through the format class */}
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <h1>About Me</h1>
          <h2>TL;DR</h2>
          <p>
            At the time of this writing I am in my second year of studying computer science. I am a believer in life long learning and always looking to expand my skill set. Apart from my studies I dabble with music from time to time experimenting with different sounds. 
          </p>
          <h2>Experience</h2>
          <a href="/RESUME.pdf" target="*">My Resume</a>
          <p>
            I worked as a web developer at OneHSN solving different kinds of problems. I mainly focused bugs, database changes, and features within the ASP.NET framework. I also had to the opportunity to learn and build with low code no code platforms such as Power Automate, Power BI, and Power Apps.
          </p>
        </article>
      </div>
    </main>
    </>
  )
}

export default Page;
