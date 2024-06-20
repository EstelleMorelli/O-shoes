"use client"
import { useState } from 'react';

export default function DropdownBtn({title, list}){
    const [isOpen, setIsOpen] = useState(false);
    console.log(list);
    return (
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="inline-flex justify-center w-full shadow-sm px-10 py-2 w-50 rounded text-sm hover:bg-slate-600 focus:outline-none"
              // rounded-md border border-gray-300  bg-white text-gray-700 font-medium 
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={() => setIsOpen(!isOpen)}
            >
              {title}
              <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
    
          {isOpen && (
            <div
              className="origin-top-right absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                {list.map((category) => (
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id={category.id}>{category.name}</a>
                ))}
              </div>
            </div>
          )}
        </div>
    );
      };