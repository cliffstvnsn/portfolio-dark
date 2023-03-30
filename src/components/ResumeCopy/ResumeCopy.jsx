import React from 'react'
import styles from "../ResumeCopy/ResumeCopy.module.css"


const ResumeCopy = () => {
    return (
        <div id="resume" className='max-w-[1040px] m-auto md:pl-20 p-4 pt-16 bg-[#1f1f1f]'>
            <h1 className='text-4xl font-bold text-center pb-8 text-[#99afe6]'>Resume</h1>
            <p className='text-center text-[#bcbcbc] pb-8'>
                Reach out to me via my <a target="_blank" href="https://www.linkedin.com/in/cliffstvnsn/" rel="noopener noreferrer" className='text-[#bfbfbf] font-bold cursor-pointer hover:text-[#99afe6]'>
                    LinkedIn</a>! <a target="_blank" href='https://drive.google.com/file/d/19ZsjOlrQat533prZ5AVfy0Wlm8x3Ff9B/view?usp=sharing' rel="noopener noreferrer" className="text-[#bfbfbf] font-bold cursor-pointer hover:text-[#99afe6]">
                    view
                </a> or <a href="Resume.CliffStevenson.March.2023.pdf" download={'Resume.CliffStevenson.March.2023.pdf'} className="text-[#bfbfbf] font-bold cursor-pointer hover:text-[#99afe6]">
                    download
                </a> the resume.
            </p>
            <div className='flex flex-row min-h-screen justify-center'>
                <iframe src="https://drive.google.com/file/d/19ZsjOlrQat533prZ5AVfy0Wlm8x3Ff9B/preview" className={styles.resumeDoc} allow="autoplay" title="Cliff's Resume 2022"></iframe>
            </div>
        </div>
    )
}

export default ResumeCopy