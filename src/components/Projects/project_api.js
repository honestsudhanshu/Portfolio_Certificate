import FrontEnd_List from '../Skills/frontEnd_List';
import Language_list from '../Skills/language_list';
import Other_List from '../Skills/other_list';

import project1 from '../Images/fd.jpg';
import project2 from '../Images/fs.png';
import project3 from '../Images/Lai.png';
import project3_1 from '../Images/Lais.png';
// import project2 from '../Images/portfolio.png';

const Project_list = [
	{
		id: 1,

		name: 'MCS Event Management website ',


		techUsed: [...FrontEnd_List.filter((item) => ['Html' , 'Css' , 'Javascript', 'React'].includes(item.name))],

		details:"Built a dynamic and scalable event management platform for the Moot Court Society using React.js, featuring role-based access control for secure admin operations. The system supports anonymous feedback submission to ensure user privacy and promote honest engagement. Designed for responsiveness and smooth performance, it enables seamless event creation and management.",
		photo: project1,
		photo_large: project1,
		ddesc_long:"Built a dynamic and scalable event management platform for the Moot Court Society using React.js, featuring role-based access control for secure admin operations. The system supports anonymous feedback submission to ensure user privacy and promote honest engagement. Designed for responsiveness and smooth performance, it enables seamless event creation and management. The platform allows users to easily browse upcoming events, register for participation, and view event details. Admins have full control to manage events, view feedback, and maintain system integrity. Optimized for both desktop and mobile devices, ensuring a consistent experience across all platforms.",
				codeLink: 'https://github.com/honestsudhanshu/mcs',
		LiveApp: 'https://mcs-five.vercel.app/',
	},

	{
		id: 2,

		name: 'Ideal Store(e-commerce website)',
		

		techUsed: [...FrontEnd_List.filter((item) => ['Html' , 'Css' , 'Javascript', ].includes(item.name))],
		

		details:
			'Created Ideal Store, an intuitive e-commerce platform featuring secure payment integration, cart management, and a 24-hour refund policy to ensure smooth and trustworthy transactions. Utilized LocalStorage to maintain persistent user sessions and cart data. Designed a clean, user-friendly interface for effortless navigation and product browsing, enhancing the overall shopping experience.',

		photo: project2,
		photo_large: project2,
		ddesc_long:'Created Ideal Store, an intuitive and responsive e-commerce platform featuring secure payment integration, cart management, and a 24-hour refund policy to ensure smooth and trustworthy transactions. The platform uses LocalStorage to maintain persistent user sessions and cart data, providing a seamless shopping experience. Designed with a clean, user-friendly interface, it allows easy navigation and clear product displays. Dynamic product listings with filtering and sorting options help users find items quickly, while performance optimization and strong security measures ensure fast, reliable, and safe usage across all devices.',
		codeLink: 'https://github.com/honestsudhanshu/Ideal-Store',
		LiveApp: 'https://ideal-store.onrender.com/',
	},
	{
		id: 3,

		name: 'To-Do List',

		techUsed: [...FrontEnd_List.filter((item) => ['Html' , 'Css' , 'Javascript', ].includes(item.name))],

		details:'Developed a user-friendly To-Do List app featuring both predefined and customizable task management to enhance daily productivity tracking. Integrated localStorage to persist task status across sessions, ensuring users never lose progress. The app includes an intuitive UI with real-time task updates and dynamic additions. Deployed on Render for easy, installation-free access from any device, offering a smooth and responsive user experience.',
		photo: project3_1,
		photo_large: project3,
		ddesc_long:'Developed a user-friendly To-Do List app featuring both predefined and customizable task management to enhance daily productivity tracking. Integrated localStorage to persist task status across sessions, ensuring users never lose progress. The app includes an intuitive and responsive UI with real-time task updates, dynamic additions, and smooth transitions for a seamless user experience. Deployed the application on Render, allowing instant access from any device without manual installations. The project emphasizes simplicity, performance, and accessibility, making daily task management efficient and enjoyable.',
				codeLink: 'https://github.com/honestsudhanshu/to-do-list',
		LiveApp: 'https://todoideal.onrender.com/',
	}
];

export default Project_list;
