import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {

  return (
    <Layout>
      {/* <SEO title="Home" /> */}
      <div className="banner-container">
        <StaticImage src="../images/42271167_m.jpg" alt="All in One Education Banner" />
      </div>

      <section className="content-box" id="yellow">

        <div className="pitch-box">
          <div className="tag1"><h1 >EDUCATION DONE - ALL IN ONE.</h1></div>
          <div className="tag2"><h1>THE HISTORY OF BRITAIN IS COMPLEX AND DIVERSE - AND OUR EDUCATION SYSTEM SHOULD REFLECT THIS.</h1></div>
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
        <h1>WHAT WE DO</h1>

        <div className="content-overlay-box">
          <StaticImage src="../images/42401748_m.jpg" alt="enhance-learning" />
          <div className="paragraph-box paragraph-right" id="pink">
            <h1>ENHANCE LEARNING, FOR LIFE IN MODERN BRITAIN</h1>
            <p>By enabling our nations’ educators to teach the intersectional realities of British History through engaging, representative, and accessible materials, we help equip young learners to acknowledge and address multiple perspectives across education and society as a whole, creating exceptional critical thinkers and future global leaders.</p>
          </div>
        </div>

        <div className="content-overlay-box">
          <StaticImage className="img-right" src="../images/96254573_m.jpg" alt="provide resources" />
          <div className="paragraph-box paragraph-left" id="green">
            <h1>PROVIDE EASY TO USE RESOURCES, FROM GRASSROOTS SOURCES</h1>
            <p>The All in One resource gateway contains outstanding History lesson materials designed to correspond to and integrate seamlessly into the existing curriculum and examination requirements for every UK nation. All resource materials are made in partnership with existing expert organisations, academics, and UK teachers working currently.</p>
          </div>

        </div>

        <div className="content-overlay-box">
          <StaticImage src={"../images/127784687_m.jpg"} alt="support-change" />
          <div className="paragraph-box paragraph-right" id="yellow">
            <h1>SUPPORT LASTING CHANGE </h1>
            <p>Our approach to educaton reform is two-pronged, encompassing both content creation, and reform lobbying of UK governments to include All In One as a recommended teaching aid for university and college PGCE/PDGE courses, so that a greater consistency in inclusive teaching methods can be achieved across schools/educators.</p>
            
            <div className="link-container">
            <a className="link-box" href="/about-us">Learn More</a>
            </div>


          </div>
        </div>

      </section>
    </Layout>
  )
}

export default IndexPage
