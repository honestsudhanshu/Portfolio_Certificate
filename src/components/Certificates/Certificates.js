// import React from "react";

import bitsandbytes from './image/bitsandbytes.png';
import gfg from './image/gfg.png';
import nodejs from './image/nodejs.png';
import nptel from './image/nptel.png';

import './Certificates.css';



const Certificates = () => {
    const certificateData = [
      {
        title: "Design & Implementation of Human-Computer Interfaces | NPTEL",
        tags: ["HCI", "UI/UX", "Design", "NPTEL", "User Experience"],
        description:
          "This certificate signifies completion of a detailed academic course focused on the principles and practices of Human-Computer Interaction (HCI). The course explored the design and development of user-centric interfaces, usability engineering, interaction design, cognitive models, prototyping, and evaluation techniques. Emphasizing both theoretical foundations and practical implementation, it prepared learners to build accessible, efficient, and user-friendly digital systems.",
        image: nptel,
        pdfLink: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs126/Course/NPTEL24CS126S75690021304338901.pdf",
      },
      {
        title: "Data structures and algorithms – self paced | GFG",
        tags: ["DSA", "Algorithms", "Data Structures", "Problem Solving"],
        description:
          "This certificate reflects comprehensive understanding and practice of data structures and algorithms, covering topics like arrays, strings, linked lists, stacks, queues, trees, graphs, hashing, recursion, dynamic programming, greedy algorithms, and more. Designed and delivered by industry experts at GeeksforGeeks, the course combines theory with coding exercises, helping learners strengthen their problem-solving skills for competitive programming and technical interviews.",
        image: gfg,
        pdfLink: "https://media.geeksforgeeks.org/courses/certificates/b9b571c0b7f7f15891aa6f8a9475b0fd.pdf",
      },
      {
        title: "Server side JavaScript with Node.js",
        tags: ["Node.js", "Express", "Backend", "API", "JavaScript"],
        description:
          "This certificate demonstrates a strong foundation in backend development using Node.js. The course covered essential Node.js concepts such as asynchronous programming, event-driven architecture, working with file systems, creating RESTful APIs, handling databases, and using Express.js for building scalable server-side applications. The program also emphasized real-world project development, debugging practices, and deploying Node apps to cloud platforms.",
        image: nodejs,
        pdfLink: "https://coursera.org/verify/V2XTBY5CAZD4",
      },
      {
        title: "The Bits and Bytes of Computer Networking | Google",
        tags: ["Networking", "Protocols", "TCP/IP", "DNS", "Internet"],
        description:
          "This certificate was awarded upon successful completion of an in-depth course on computer networking fundamentals. The course covered the core principles of how computer networks operate, including protocols like TCP/IP, DNS, HTTP/HTTPS, and concepts like routing, switching, IP addressing, and packet analysis. It provided hands-on experience with real-world networking scenarios and tools, enhancing both theoretical and practical understanding of internet architecture.",
        image: bitsandbytes,
        pdfLink: "https://coursera.org/verify/ULZW55A9KJZN",
      },
    ];
  
    return (
      <div className="certificates-section">
        <div className="heading">
          <div className="hl">
            <h1>Certificates</h1>
            <div className="pline"></div>
          </div>
        </div>
  
        {certificateData.map((cert, index) => (
          <div className="project_div" key={index}>
            <div className="project-info">
              <h2 className="project-info-heading">{cert.title}</h2>
  
              <div className="project-info-technologyuSED">
                <div className="p-list">
                  {cert.tags.map((tag, i) => (
                    <span className="p-list-name" key={i}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
  
              <div className="project-details">{cert.description}</div>
  
              <a href={cert.pdfLink} download target="_blank" rel="noopener noreferrer">
                <button className="project-button" style={{ marginTop: "20px" }}>
                  Download Certificate
                </button>
              </a>
            </div>
  
            <div className="project-image">
              <img src={cert.image} alt={`${cert.title} Preview`} />
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Certificates;
  