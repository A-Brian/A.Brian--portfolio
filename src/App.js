import React, { useState, useEffect } from 'react';
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/footer"
import Intro from "./components/Intro/intro"
import Navbar from "./components/NavBar/navbar"
import Skills from "./components/Skills/skills"
import Projects from "./components/Projects/projects"
 



function App() {
  const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);
  return (
 

    <div>
			<button
				type="button"
				onClick={handleThemeSwitch}
				className="fixed z-2 right-6 top-6 bg-black text-lg p-1 rounded-md"
			>
				{theme === 'dark' ? '🌙' : '🌞'}
			</button>
			<div className=" dark:bg-[rgb(30,_30,_30)] text-white overflow-hidden h-screen overflow-y-scroll">
				<div>
        <Navbar/>
        <Intro/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
				</div>
			</div>
  
      

      </div>
  );
}




export default App;
