import React from 'react'

const Footer = () => { 
    return (
        <footer className="text-card-foreground shadow-md">
            <h2 className="pt-5 text-xl">The Garbage Dump</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-12">
                <div className="flex flex-col items-center sm:items-start">
                    <ul>
                        <li><a href="mailto:steven.uy10@gmail.com">steven.uy10@gmail.com</a></li>
                    </ul>
                </div>
                <div className="flex flex-col items-center">
                    <ul>
                        <li>
                            <a href="https://github.com/Steven-UY" className="flex items-center gap-2">
                                <img 
                                    src="/assets/Github_Light.png" 
                                    alt="GitHub"
                                    width={20}
                                    height={20}
                                />
                                <span>Steven Uy</span>
                            </a>
                        </li>
                        <li><a></a></li>
                    </ul>
                </div>
                <div className="flex flex-col items-center sm:items-end">
                    <p>A page for my terribly thought out ideas</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
