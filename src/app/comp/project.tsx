import Image from 'next/image'
import portfioliomg from '../../../public/assets/portfolio.png'
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group'
import './main.css'
export default function Project() {
  const projects = [
    {
      image:'/assets/employee.png',
      name: 'Employee Management App',
      description:'',
      tags: ['React', 'CSS','Node.js','Express','MongoDb'],
      type:''
    },
    {
      image:'/assets/portfolio.png',
      name: 'Personal Portfolio',
      description:'',
      tags: ['Next.js', 'Tailwind CSS', 'JavaScript'],
      type:''
    },
    {
      image:'',
      name: 'Employee Management App',
      description:'',
      tags: ['Next.js', 'Tailwind CSS', 'JavaScript'],
      type:''
    }
  ]
  return (
    <div className="project-wrapper">
      <div className="project-header text-5xl relative text-custom-offwhite after:content-[''] after:bg-custom-bit-green after:w-52 after:h-3 after:absolute after:left-0 after:bottom-0 after:-z-50 after:opacity-70">My Work</div>
      <div className="project-list text-custom-offwhite py-10">
      <ul className="project py-2 list-none flex gap-14 flex-wrap items-center justify-center">
        {projects.map((project, index) => (
          <li key={index} className="item bg-custom-light-blue rounded-lg hover:cursor-pointer hover:-translate-y-2 transition-all duration-200 linear">
            <div className="box">
              <div className="image-container p-2">
              <Image
                    src={project.image}
                    alt={project.name}
                    layout='fixed'
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
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}