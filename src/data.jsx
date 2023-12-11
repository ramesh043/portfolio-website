import { nanoid } from "nanoid";
import { FaHtml5,FaJs,FaReact  } from "react-icons/fa";
export const links = [
    {
        id: nanoid(), href: "#home", title: "home"
    },
    ,
    {
        id: nanoid(), href: "#skills", title: "skills"
    },
    {
        id: nanoid(), href: "#about", title: "about"
    },
    {
        id: nanoid(), href: "#projects", title: "project"
    }
      
];

export const skills = [{

    id: nanoid(),
    icon: <FaHtml5 className="h-24 w-24" />,
    title: "HTML&CSS",
    text: "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed. HTML is the markup language that you surround content with, to tell browsers about headings, lists, tables",
    
    
},
    {
        id: nanoid(),
        icon: <FaJs  className="h-24 w-24" />,
        title: "HTML&CSS",
        text: "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed. HTML is the markup language that you surround content with, to tell browsers about headings, lists, tables",
    },
    {
        id: nanoid(),
        icon: <FaReact className="h-24 w-24" />,
        title: "HTML&CSS",
        text: "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed. HTML is the markup language that you surround content with, to tell browsers about headings, lists, tables",
    }]





export const projects = [{

    id: nanoid(),
    img: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "First Project",
    text:"adipisicing elit. Accusantium deserunt fugadoloremque perspiciatis, voluptatem corporis architecto neque atdignissimo",
    github: "https://github.com/ramesh043",
url:"https://github.com/ramesh043"                
        
}, {
    id: nanoid(),
    img: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "First Project",
    text:"adipisicing elit. Accusantium deserunt fugadoloremque perspiciatis, voluptatem corporis architecto neque atdignissimo",
    github: "https://github.com/ramesh043",
url:"https://github.com/ramesh043"  
        
    }, {
        id: nanoid(),
    img: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "First Project",
    text:"adipisicing elit. Accusantium deserunt fugadoloremque perspiciatis, voluptatem corporis architecto neque atdignissimo",
    github: "https://github.com/ramesh043",
url:"https://github.com/ramesh043" 
        
    }]