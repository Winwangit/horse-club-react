import '../css/Blog.css'

function Blog() {
  return (
    <section className="blog-section" id="blog">
      <div className="title">
        <p className="title-sub">latest from our blog</p>
        <h2 className="title-main">our blog</h2>
      </div>
      <div className="blog-cards-container">

        <div className="blog-card">
          <div className="blog-card-img-wrapper">
            <img src="/images/blog-img-1.jpg" alt="featured image" className="blog-card-featured-image"/>
          </div>
          <div className="blog-card-chips-container">
            <a href="#" className="blog-card-chip">travel</a>
            <a href="#" className="blog-card-chip">lifestyle</a>
          </div>
          <a href="#" className="blog-card-title">
            <h3 className="blog-card-title-title">Lorem ipsum dolor sit amet.</h3>
          </a>
          <p className="blog-synopsis">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="blog-card-meta-information">
            <div className="blog-card-meta">
              <i className="fa-solid fa-calendar-days"></i>
              <p>31<sup>st</sup> September 2025</p>
            </div>
            <div className="blog-card-meta">
              <i className="fa-solid fa-user"></i>
              <a href="#">john doe</a>
            </div>
          </div>
        </div>

        <div className="blog-card">
          <div className="blog-card-img-wrapper">
            <img src="/images/blog-img-2.jpg" alt="featured image" className="blog-card-featured-image"/>
          </div>
          <div className="blog-card-chips-container">
            <a href="#" className="blog-card-chip">travel</a>
            <a href="#" className="blog-card-chip">lifestyle</a>
            <a href="#" className="blog-card-chip">animals</a>
            <a href="#" className="blog-card-chip">accommodation</a>
          </div>
          <a href="#" className="blog-card-title">
            <h3 className="blog-card-title-title">amet consectetur adipisicing elit</h3>
          </a>
          <p className="blog-synopsis">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="blog-card-meta-information">
            <div className="blog-card-meta">
              <i className="fa-solid fa-calendar-days"></i>
              <p>30<sup>th</sup> September 2025</p>
            </div>
            <div className="blog-card-meta">
              <i className="fa-solid fa-user"></i>
              <a href="#">emma clerk</a>
            </div>
          </div>
        </div>

        
        <div className="blog-card">
          <div className="blog-card-img-wrapper">
            <img src="/images/blog-img-3.jpg" alt="featured image" className="blog-card-featured-image"/>
          </div>
          
        </div>

        <div className="blog-card">
          <div className="blog-card-img-wrapper">
            <img src="/images/blog-img-4.jpg" alt="featured image" className="blog-card-featured-image"/>
          </div>
        </div>

        <div className="blog-card">
          <div className="blog-card-img-wrapper">
            <img src="/images/blog-img-5.jpg" alt="featured image" className="blog-card-featured-image"/>
          </div>
        </div>

        <div className="blog-card">
          <div className="blog-card-img-wrapper">
            <img src="/images/blog-img-6.jpg" alt="featured image" className="blog-card-featured-image"/>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Blog;
