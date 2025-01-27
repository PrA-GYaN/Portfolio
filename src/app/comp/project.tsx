import Image from 'next/image'
// import portfioliomg from '../../../public/assets/portfolio.png'
import './main.css'

export default function Project() {
  const projects = [
    {
      image: '/assets/employee.png',
      name: 'Employee Management App',
      description: '',
      tags: ['React', 'CSS', 'Node.js', 'Express', 'MongoDb'],
      link: 'https://github.com/PrA-GYaN/Employee-Management-App',
    },
    {
      image: '/assets/student.png',
      name: 'Student DataHub',
      description: '',
      tags: ['C#','SQL','.Net Core'],
      link: 'https://github.com/PrA-GYaN/Student-DataHub',
    },
    {
      image: '/assets/hamrokitchen.png',
      name: 'Hamro Kitchen',
      description: '',
      tags: ['React.js', 'Node.js','CSS', 'Express', 'MongoDb'],
      link: 'https://github.com/PrA-GYaN/HamroKitchen',
    },
    {
      image: '/assets/bricks.png',
      name: 'Bricks',
      description: '',
      tags: ['React', 'CSS', 'JavaScript'],
      link: 'https://github.com/PrA-GYaN/architect_101', 
    },
  ]

  return (
    <div className="project-wrapper">
      <div className="project-header text-5xl relative text-custom-offwhite after:content-[''] after:bg-custom-bit-green after:w-52 after:h-3 after:absolute after:left-0 after:bottom-0 after:-z-50 after:opacity-70">
        My Work
      </div>
      <div className="project-list text-custom-offwhite py-10">
        <ul className="project py-2 list-none flex gap-14 flex-wrap items-center justify-center">
          {projects.map((project, index) => (
            <li key={index} className="item bg-custom-light-blue rounded-lg hover:cursor-pointer hover:-translate-y-2 transition-all duration-200 linear">
              {/* Wrap the project in an anchor tag */}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="box">
                  <div className="image-container p-2">
                    <Image
                      src={project.image}
                      alt={project.name}
                      layout="fixed"
                      width={420}
                      height={210}
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="text flex flex-col gap-1 p-5">
                    <span className="text-xl font-bold">{project.name}</span>
                    <h4>{project.description}</h4>
                    <p>{project.tags.join(', ')}</p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}