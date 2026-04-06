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
    <section className="mt-20 flex flex-col p-2 gap-4">
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
            I'm a 2nd year Mathematics student at Durham University with a deep interest in both software engineering and data science. I have technical skills in both of these fields, and I am currently seeking experience opportunities in either area.
        </p>
        <p>
            So far in my studies, I have developed a strong foundation in mathematical concepts, with my focus for 3rd and 4th year being on machine learning, data science and statistics.
        </p>
        <p>
            I have also developed my web development skills through personal study, and I am currently focusing my efforts on learning some backend technologies, of which I will use to add to my currently frontend-focused set of technical skills.
        </p>
    </section>
  )
}
