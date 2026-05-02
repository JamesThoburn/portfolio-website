import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
    {
        url: "https://www.linkedin.com/in/jamesthoburn/",
        icon: <FaLinkedin />,
        color: "#0A66C2"
    },
    {
        url: "https://github.com/JamesThoburn",
        icon: <FaGithub />,
        color: "#171515"
    }
]

export default function Hero() {
  return (
    <section className="mt-10 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">Hi, I'm James Thoburn.</h1>
            <h2 className="text-gray-600">Mathematics student at Durham University.</h2>
            <ul className="flex gap-1">
                {socialLinks.map((social, index) => (
                    <li key={index}>
                        <a 
                            href={social.url}
                            target="_blank"
                            style={{color: social.color, fontSize: "2rem"}}
                            className="transition-opacity duration-300 hover:opacity-[0.7]"
                        >
                            {social.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        <p>
            I'm a 2nd year Mathematics student at Durham University with a strong interest in software engineering and data science. My academic focus for 3rd and 4th year covers machine learning, statistics and data science. Alongside my studies, I've built frontend web development skills through self-study and I am currently expanding into backend technologies. I'm currently seeking internship experience and career opportunities in software engineering or data science.
        </p>
    </section>
  )
}
