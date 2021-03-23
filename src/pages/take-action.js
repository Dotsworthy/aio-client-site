import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

const TakeAction = () => {


    return (
        <Layout siteType={"client"}>
            <div className="banner-container" id="take-action">
                <div className="paragraph-box" id="white"><h1>How can you get involved with All in One?</h1></div>
            </div>

            <div className="content-box" id="white">

                {/* <div className="paragraph-box" id="grey"> */}
                <h2>Whether you’re a teacher or organisation with a great idea for a lesson or content, an educator who wants to trial our lessons in their classrooms, or a citizen wanting to see real change in the UK curriculum, here are some ways you can get involved with All in One:</h2>
                {/* </div> */}

                <div className="content-overlay-box">
                    <StaticImage src="../images/42402515_m.jpg" alt="Donate" />
                    <div className="paragraph-box paragraph-right" id="pink">
                        <h1>Donate</h1>
                        <p>All In One Education is a voluntary organisation powered by collaboration, and donation. Support us via our gofundme page below - all donations go towards creating and maintaining the All in One learning platform, paying contributor fees, and running promotional events, and every penny makes a huge difference - so thank you!</p>

                    <div className="link-container">
                        <div className="link-box">
                            <a href="https://www.gofundme.com/f/all-in-one-education-a-reformative-resource">Donate</a>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="content-overlay-box">
                    <StaticImage className="img-right" src="../images/115668764_m.jpg" alt="Volunteer" />
                    <div className="paragraph-box paragraph-left" id="yellow">
                        <h1>Volunteer</h1>
                        <p>Want to volunteer with us to create amazing content for All in One? We are looking for help in the following areas:</p>

                        <p>
                            Education - assist with creating lesson plans and supporting the education department and research.
                            <br />
                            <br />
                            Marketing - assist with research for topics that aren't covered within the curriculum and creating intersectional content.
                            <br />
                            <br />
                            Advocacy - assist with planning online events and establishing new business partnerships.
                        </p>

                        <p>Click below to join the collective!</p>
                        <div className="link-container">
                        <div className="link-box">
                            <a href="mailto:enquiries@allinoneeducation.co.uk?subject=Volunteering with All In One">Volunteer</a>
                        </div>
                        </div>
                    </div>

                </div>
            </div>





        </Layout>
    )
}

export default TakeAction