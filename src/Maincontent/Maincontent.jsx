import React from 'react'
import './Maincontent.css'
import items from './Bloginfo'

export const Maincontent = () => {
  return (
    <div className='Main-content'>
        <div className="Main-content-blog">
        <div className="Main-content-blog-inner">
            <div className="Main-content-heading"><p>TRAIN OF THOUGHT</p></div>
            <div className="Main-content-blog-grid">
            
                {items.map((item) => (
                <div className="Main-content-blog-div" key={item.id}>
                  <div className="Main-content-blog-div-image">

                  </div>
                  <div className="Main-content-blog-div-content">
                      <div className="Main-content-blog-div-content-time">
                          <p>{item.Month} {item.Date} . 1 min</p>
                      </div>
                      <div className="Main-content-blog-div-content-about">
                            <div className="Main-content-blog-div-content-about-title"><p>{item.Title}</p></div>
                            <div className="Main-content-blog-div-content-about-description"><p>{item.Description}</p></div>
                      </div>
                      <div className="Main-content-blog-div-content-likes">
                      3,212 views    0 comments
                      </div>

                  </div>
                  </div>
                 ))}
                        
                
            </div>
            </div>
        </div>
        <div className="Main-content-about">
            <div className="Main-content-heading"><p>ABOUT US</p></div>

        </div>
     
    </div>
  )
}

export default Maincontent