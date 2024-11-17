const Skills = () => {
  return (
    <section id="skills" className=" py-10 px-4 md:px-10 lg:px-20">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-red-500">SKILLS</h2>
      </div>

      <p className="w-full mt-8 md:w-3/4 lg:w-2/3 mx-auto my-5 text-center text-slate-300 text-base md:text-xl">
        Hi, I’m Syed Muhammad Suleman, a passionate Front-end Developer with a
        strong command over modern web technologies and design principles. I
        specialize in crafting customized portfolio and ecommerce websites that
        not only look visually appealing but are also highly responsive and
        user-friendly. My focus is on delivering solutions that align with
        clients’ unique needs, whether it’s building a personal brand portfolio
        or creating a robust ecommerce platform for a startup. I understand that
        every project is unique, and I’m committed to ensuring that each website
        is a perfect fit for the intended audience and business goals. If you’re
        interested in having a customized website created, feel free to get in
        touch! I’m happy to provide a demo and discuss how we can bring your
        vision to life. Let’s create something amazing together!
      </p>

      <div className="mx-auto w-full md:w-3/4 lg:w-2/3 mt-12">
        {[
          { skill: "HTML5", level: "90%" },
          { skill: "Tailwind CSS", level: "70%" },
          { skill: "JavaScript", level: "75%" },
          { skill: "TypeScript", level: "80%" },
          { skill: "Shadcn", level: "70%" },
          { skill: "Next.js", level: "60%" },
        ].map((item, index) => (
          <div key={index} className="mb-5">
            <div className="flex justify-between items-center text-xl font-semibold space-y-8 text-white">
              <span>{item.skill}</span>
              <span>{item.level}</span>
            </div>
            <div className="relative h-4 w-full bg-[#3b3d3c] rounded-full overflow-hidden mt-2">
              <div
                className="absolute top-0 left-0 h-full bg-blue-600"
                style={{ width: item.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
