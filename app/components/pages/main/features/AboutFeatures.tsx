import Image from "next/image";

export const AboutImage = () => {
  return (
    <div className="relative overflow-hidden rounded-l-[500px]
    max-md:-rotate-90
    xl:w-[70%]
    w-full
    max-md:mt-16
    shadow-md shadow-main-blue
    ">
      <div
        className="overflow-hidden
      rounded-l-[500px] relative"
      >
        <Image
          className="shadow-xl shadow-main-blue object-cover w-full max-h-[500px] max-md:rotate-90"
          src="/juro1.png"
          alt="juro1"
          width={500}
          height={500}
        />
        <div className="bg-gradient-heading absolute grid grid-rows-7 text-center p-2 top-0 right-0 text-white h-full z-50 *:max-md:rotate-90 *:max-md:mt-3
        *:flex *:items-center *:justify-center">
          <span>w</span>
          <span>e</span>
          <span>l</span>
          <span>c</span>
          <span>o</span>
          <span>m</span>
          <span>e</span>
        </div>
      </div>
      <div className="absolute inset-0 ">
        <div className="absolute w-full h-full bg-gradient-to-l
        to-main-blue/80 from-main-purple/20 z-40        "></div>
        {/* <div
          className="overflow-hidden max-md:w-[300px] max-md:h-[300px]
          md:w-[250px] md:h-[250px]
      rounded-tl-[500px]
      rounded-br-[500px] max-md:rotate-90
      "
        >
          <Image
            className="shadow-xl shadow-main-blue"
            src="/juro2.jpg"
            alt="juro1"
            width={500}
            height={500}
          />
        </div>
        <div
          className="overflow-hidden max-md:w-[300px] max-md:h-[300px]
          md:w-[250px] md:h-[250px]
      rounded-tr-[500px]
      rounded-bl-[500px]
      "
        >
          <Image
            className="shadow-xl shadow-main-blue"
            src="/mern.jpg"
            alt="juro1"
            width={500}
            height={500}
          />
        </div> */}
      </div>
    </div>
  );
};

export const AboutDetails=()=>{
  return (<>I’m Youssif Ali Salama, a passionate and results-driven Full Stack MERN Developer based in Egypt. With hands-on experience in designing and developing scalable, secure, and real-time web applications, I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js). My skill set includes building robust backend systems, intuitive user interfaces, and integrating third-party services such as payment gateways, real-time chat, and authentication protocols.
  <br/>
  <br/>

Over the years, I’ve developed and deployed complex applications—from real estate management systems and secure payment platforms to educational tools and eCommerce apps. I have a solid grasp of both SQL and NoSQL databases, API development, middleware structuring, and DevOps fundamentals. I’m also experienced in teaching backend and frontend technologies, helping others grow in their tech careers.

I thrive on solving problems, collaborating with teams, and pushing products from idea to production with high performance and maintainability in mind.</>)
}
