import React from 'react'
import Image from 'next/image'

const Footer = () => { 
    return (
        <footer className="text-card-foreground shadow-md">
            <h2 className="pt-3 text-lg">The Garbage Dump</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
                <div className="flex flex-col items-center sm:items-start">
                    <ul className="space-y-2">
                        <p>A blog</p>
                        <li className="hover:underline">
                            <a href="mailto:steven.uy10@gmail.com">steven.uy10@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-center">
                    <ul className="space-y-2">
                        <li>
                            <a href="https://github.com/Steven-UY" 
                               className="flex items-center gap-2 hover:underline">
                                <Image 
                                    src="/assets/Github_Light.png" 
                                    alt="GitHub"
                                    width={20}
                                    height={20}
                                />
                                <span>slicko</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/steven-c-uy/" 
                               className="flex items-center gap-2 hover:underline">
                                <Image 
                                    src="/assets/linkedin.png" 
                                    alt="LinkedIn"
                                    width={20}
                                    height={20}
                                />
                                <span>Steven Uy</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-center sm:items-end text-sm">
                    <p>A home for some ideas of mine. Maybe it will be better than journaling.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
