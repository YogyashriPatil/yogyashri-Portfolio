import "../css/tech-stack.css";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", logo: "java/java-original.svg" },
      { name: "Python", logo: "python/python-original.svg" },
      { name: "C", logo: "c/c-original.svg" },
      { name: "C++", logo: "cplusplus/cplusplus-original.svg" },
      { name: "JavaScript", logo: "javascript/javascript-original.svg" },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", logo: "html5/html5-original.svg" },
      { name: "CSS3", logo: "css3/css3-original.svg" },
      { name: "React", logo: "react/react-original.svg" },
      { name: "Next.js", logo: "nextjs/nextjs-original.svg" },
      { name: "Tailwind CSS", logo: "tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", logo: "nodejs/nodejs-original.svg" },
      { name: "Express.js", logo: "express/express-original.svg" },
      { name: "Flask", logo: "flask/flask-original.svg" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", logo: "mongodb/mongodb-original.svg" },
      { name: "MySQL", logo: "mysql/mysql-original.svg" },
      { name: "PostgreSQL", logo: "postgresql/postgresql-original.svg" },
      { name: "Firebase", logo: "firebase/firebase-original.svg" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", logo: "git/git-original.svg" },
      { name: "GitHub", logo: "github/github-original.svg" },
      { name: "VS Code", logo: "vscode/vscode-original.svg" },
      { name: "Postman", logo: "postman/postman-original.svg" },
      { name: "Docker", logo: "docker/docker-original.svg" },
      { name: "Figma", logo: "figma/figma-original.svg" },
    ],
  },
  {
    title: "Cloud & Machine Learning",
    skills: [
      { name: "AWS", logo: "amazonwebservices/amazonwebservices-original.svg" },
      { name: "Azure", logo: "azure/azure-original.svg" },
      { name: "Linux", logo: "linux/linux-original.svg" },
      { name: "TensorFlow", logo: "tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", logo: "pytorch/pytorch-original.svg" },
    ],
  },
];

export default function TechStack() {
  return (
    <div className="tech-stack-container">
      {skillCategories.map((category) => (
        <section className="skill-category" key={category.title}>
          <h3 className="skill-category-title">{category.title}</h3>

          <div className="skill-grid">
            {category.skills.map((skill) => (
              <article className="skill-card" key={skill.name}>
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.logo}`}
                  alt={`${skill.name} logo`}
                  className="skill-logo"
                  loading="lazy"
                  draggable="false"
                />
                <span className="skill-name">{skill.name}</span>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
