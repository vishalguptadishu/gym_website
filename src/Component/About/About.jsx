import "./About.css"
const About =()=>{
    return (
        <div className="About">
          <div className="div1">
           <div className="videoSection1">
           <iframe width="480" height="315" 
           src="https://www.youtube.com/embed/jk6MeLeoPAI" 
           title="YouTube video player"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>   
            </iframe> 
           </div>
           <div className="aboutSection1">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, iste veritatis! Facere alias velit harum ducimus. Omnis velit temporibus cupiditate voluptate perspiciatis veritatis qui aperiam corrupti, necessitatibus molestias beatae. Perspiciatis.</p>
            <button onClick={()=>{alert("click from About page")}} >Lerrn More</button>
           </div>
          </div>

          <div className="div2">
          <div className="aboutSection2">
            <h1>Why Chose Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, iste veritatis! Facere alias velit harum ducimus. Omnis velit temporibus cupiditate voluptate perspiciatis veritatis qui aperiam corrupti, necessitatibus molestias beatae. Perspiciatis.</p>
          </div>
            <div className="videoSection2">
            <iframe width="480" height="315" 
                src="https://www.youtube.com/embed/jk6MeLeoPAI" 
                title="YouTube video player"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>   
            </iframe>
            </div>
          </div>
        </div>
    )
}

export default About;