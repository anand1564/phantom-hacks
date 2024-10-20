import React, { useState } from 'react'
import { Skull, Menu, X, Ghost, Bookmark, Home } from 'lucide-react'
import PlaySound from './PlaySound'

const NavItem = ({ Icon, text, onClick }) => (
  <div
    onClick={onClick}
    className="flex items-center px-4 py-2 text-gray-300 hover:bg-purple-900 hover:text-orange-500 transition-colors duration-200 cursor-pointer"
  >
    <Icon className="w-5 h-5 mr-2" />
    <span>{text}</span>
  </div>
);


export default function SpookyNavbar({handleScroll,aboutRef,storiesRef,quizRef}){
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-900 shadow-lg z-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0">
              <Skull className="h-8 w-8 text-orange-500" />
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavItem Icon={Home} text="Quiz" onClick={()=>handleScroll(quizRef)}/>
                <NavItem Icon={Ghost} text="Significance" onClick={()=>handleScroll(aboutRef)}/>
                <NavItem Icon={Bookmark} text="Scary Stories" onClick={()=>handleScroll(storiesRef)}/>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <PlaySound />
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavItem Icon={Quiz} text="Quiz" onClick={handleScroll(quizRef)}/>
            <NavItem Icon={Ghost} onClick={()=>handleScroll(aboutRef)} text="Significance" />
            <NavItem Icon={Bookmark} text="Scary Stories" />
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <PlaySound />
          </div>
        </div>
      )}
    </nav>
  )
}