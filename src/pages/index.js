import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <div className="banner-container" 
      // id="index"
      >
        <StaticImage className="banner-image" src="../images/iStock-1091721046.webp" alt="All in One Education Banner" />
      </div>

      <section className="content-box" id="yellow">

        <div className="pitch-box">
          <div className="tag1"><h1 >Education Done. All in One.</h1></div>
          <div className="tag2"><h1>The history of Britain is complex and diverse - and our education system should reflect this.</h1></div>
        </div>

        <div className="paragraph-box" id="white">
          <p>Our mission is to encourage and enhance intersectional learning in UK classrooms, exploring a range of viewpoints on our shared past through the provision of premade, easy to use lesson plans, discussion materials, homework suggestions, and teaching aids for educators of all stages and faculties.</p>
          <p>Whether you’re covering the Tudors, WW1, Ancient Civilisations, or the 21st century, our lessons consider BIPOC, Female, LGBTQIA+, differently abled, colonial, environmental and other perspectives as a matter of course, enabling you to teach the intersectional realities of British Social Studies more effectively within our nations’ curriculums today.</p>
        </div>

        <div className="link-container">
        <a className="link-box" href="https://www.gofundme.com/f/all-in-one-education-a-reformative-resource" target="_blank" rel="noreferrer">Donate</a>
        </div>
      </section>


      <section className="content-box" id="white">
        <h1>What we do</h1>

        <div className="content-overlay-box">
          <StaticImage src="../images/42401748_m.jpg" alt="enhance-learning" />
          <div className="paragraph-box paragraph-right" id="pink">
            <h1>Enhance learning, for life in modern Britain</h1>
            <p>By enabling our nations’ educators to teach the intersectional realities of British History through engaging, representative, and accessible materials, we help equip young learners to acknowledge and address multiple perspectives across education and society as a whole, creating exceptional critical thinkers and future global leaders.</p>
          </div>
        </div>

        <div className="content-overlay-box">
          <StaticImage className="img-right" src="../images/96254573_m.jpg" alt="provide resources" />
          <div className="paragraph-box paragraph-left" id="yellow">
            <h1>Provide easy to use resources, from grassroots sources</h1>
            <p>The All in One resource gateway contains outstanding History lesson materials designed to correspond to and integrate seamlessly into the existing curriculum and examination requirements for every UK nation. All resource materials are made in partnership with existing expert organisations, academics, and UK teachers working currently.</p>
          </div>

        </div>

        <div className="content-overlay-box">
          <StaticImage src={"../images/127784687_m.jpg"} alt="support-change" />
          <div className="paragraph-box paragraph-right" id="pink">
            <h1>Support lasting change</h1>
            <p>Our approach to educaton reform is two-pronged, encompassing both content creation, and reform lobbying of UK governments to include All In One as a recommended teaching aid for university and college PGCE/PDGE courses, so that a greater consistency in inclusive teaching methods can be achieved across schools/educators.</p>
            
            <div className="link-container">
            <a className="link-box" href="/about-us">Learn more about All in One</a>
            </div>


          </div>
        </div>

      </section>
    </Layout>
  )
}

export default IndexPage
