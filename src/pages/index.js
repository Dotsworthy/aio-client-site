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
        <StaticImage className="banner-image" src="../images/iStock-1091721046.jpg" alt="All in One Education Banner" />
      </div>

      <section className="content-box" id="yellow">

        <div className="pitch-box">
          <div className="tag1">
            <h1>Education Done.</h1>
            <h1>All in One.</h1>
          </div>
          <div className="tag2"><h1>The history of Britain is complex and diverse - and our education system should reflect this.</h1></div>
        </div>

        <div className="paragraph-box" id="white">
          <div className="space-break"></div>
          <p>Our mission is to enhance the teaching of British History in UK classrooms via intersectional approaches to curriculum topics, to bring greater representation, tangibility, and understanding of our shared past to all of our young learners.</p>
          <p>Whether you're studying the Romans, the Tudors, WW1, or the 21st Century, our lessons help teachers explore a range of interconnected, intersectional viewpoints via premade, easy to use lesson plans, discussion materials, homework suggestions, and teaching aids for all stages and faculties.</p>
          <div className="space-break"></div>
        </div>

        <div className="link-container">
        <a className="link-box" href="https://www.gofundme.com/f/all-in-one-education-a-reformative-resource" target="_blank" rel="noreferrer">Donate</a>
        </div>
      </section>


      <section className="content-box" id="white">
        <h1>What we do</h1>

        <div className="content-overlay-box">
          <StaticImage className="img" src="../images/42401748_m.jpg" alt="enhance-learning" />
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
          <StaticImage className="img" src={"../images/127784687_m.jpg"} alt="support-change" />
          <div className="paragraph-box paragraph-right" id="pink">
            <h1>Support lasting change</h1>
            <p>Our approach to educaton reform encompasses both content creation and lobbying, We encourage UK governments to include All in One as a recommended teaching aid in PCGE/PGDE courses, so that greater consistencty in inclusive reaching methods can be achieved across schools and educators.</p>
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
