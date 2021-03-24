import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import downloadFile from "../images/All-In-One-Education-Our-Mission.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { StaticImage } from "gatsby-plugin-image";
import annaMayhew from "../images/anna-mayhew.jpg";
import zoDaniels from "../images/zo-daniels.jpeg";
import ginaLorenzetti from "../images/gina-lorenzetti.jpg";
import nikhatYusaf from "../images/nikhat-yusef.jpeg";
import henryLampitt from "../images/henry-lampitt.jpeg";
import christinePont from "../images/christine-pont.png";
import lizzieRiungu from "../images/lizzie-riungu.png";

const AboutUs = () => {
    const triggerProfile = (pictureID, paragraphID) => {
        const picture = document.getElementById(pictureID)
        const paragraph = document.getElementById(paragraphID)
        const numOfEmployees = 7;
        let i = 1;

        if (picture.className === "employee-picture-transparent") {
            picture.className = "employee-picture"

            paragraph.style.opacity = "0";
            paragraph.style.height = "0";
            paragraph.style.visibility = "hidden";

        } else {
            while (i < numOfEmployees) {
                const picture = document.getElementById(`img-${i}`)
                const paragraph = document.getElementById(`employee-${i}`)
                console.log(picture);
                console.log(paragraph);

                picture.className = "employee-picture"
                // picture.style.opacity = "1";
                // picture.style.visibility = "visible";
                // picture.style.height = "100%";
                // picture.style.width = "100%";

                paragraph.style.opacity = "0";
                paragraph.style.height = "0";
                paragraph.style.visibility = "hidden";

                i++
            }

            picture.className = "employee-picture-transparent"
            // picture.style.opacity = "0";
            // picture.style.visibility = "hidden";
            // picture.style.height = "0%";
            // picture.style.width = "0%";

            paragraph.style.opacity = "1";
            paragraph.style.height = "100%";
            paragraph.style.visibility = "visible";

        }
    }

    return (
        <Layout siteType={"client"}>
            <SEO title="About Us" />
            <div className="banner-container">
                <StaticImage className="banner-image" src="../images/79574096_m.jpg" />
                <div className="banner-box" id="white">
                    <h1>About Us</h1>
                </div>
            </div>

            <div className="content-box" id="pink">
                <h1>We are:</h1>
                <div className="content-box-horizontal">

                    <div className="paragraph-box-horizontal" id="white">
                        <StaticImage src="../images/iStock-653000086.jpg" alt="inclusive" />
                        <h1>Inclusive</h1>
                        <p>We believe that every child should be able to see themselves in their school books, and that every classroom experience should empower them to explore and engage meaningfully with the world they live in. We want to make the UK’s curriculums world-leading by enabling inclusive, intersectional history to be taught easily and effectively, greatly benefiting every young learners’ academic and social development.</p>
                    </div>

                    <div className="paragraph-box-horizontal" id="white">
                        <StaticImage src="../images/121432034_m.jpg" alt="grassroots" />
                        <h1>Grassroots</h1>
                        <p>All of our teams work on a volunteer basis, and we are dedicated to being led from the bottom up, with educators at the forefront. Content is produced entirely by teachers working in the UK today, and in partnership with organisations with lived experience/expertise, to ensure that materials are appropriate, representative, and legitimate. </p>
                    </div>

                    <div className="paragraph-box-horizontal" id="white">
                        <StaticImage src="../images/54852849_m.jpg" alt="accessible" />
                        <h1>Accessible</h1>
                        <p>All in One materials are not simply supplementary, and we do not seek to compete with existing curriculums; rather, All in One lessons are designed to enhance current topics so that they become more diverse, tangible, and engaging for all of our young learners. Resources are demarcated by year group, stage, and national curriculum, and can also be used more individually to enhance preparation for national examinations at every level.</p>
                    </div>

                    <div className="paragraph-box-horizontal" id="white">
                        <StaticImage src="../images/119580500_m.jpg" alt="evolutionary" />
                        <h1>Evolutionary</h1>
                        <p>We remain mindful of broadening horizons in Education services, technologies, and methods, and update content regularly to ensure continued ease of use and relevance. We employ a robust feedback loop of trialling, research, and case studies from teachers and classrooms in the UK right now to inform our development as an organisation and as a learning service.</p>
                    </div>

                    <div className="paragraph-box-horizontal" id="white">
                        <StaticImage src="../images/38079971_m.jpg" alt="advocates" />
                        <h1>Advocates</h1>
                        <p>We recognise that education is vital for building exceptional global citizens and for alleviating social injustice. Our Campaigns team raises awareness of the important work of our partner organisations through events and marketing, and lobbies UK governments and educational institutions to include All in One as a recommended teaching aid in university and college PGCE/PDGE course syllabuses.</p>
                    </div>

                    <div className="paragraph-box-horizontal paragraph-small" id="white">
                        <p>Read our full mission statement to find out more:</p>

                        <div className="link-container">
                            <a className="link-box" href={downloadFile} target="_blank" rel="noreferrer" download>Mission Statement </a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="content-box" id="blue">
                <div className="title-box">
                <h1>Meet us:</h1>
                <p>(Press i to view bio)</p>
                </div>
                <div className="content-box-horizontal">
                    <div className="profile-box" id="white">
                        <h2>Anna Ploszajski Mayhew - Chair</h2>
                        <img className="employee-picture" src={annaMayhew} alt="inclusive" id="img-1" />
                        <div className="employee-blurb" id="employee-1">
                            <p>Anna has a background in heritage learning, working for some of Scotland's biggest heritage organisations, including Historic Environment Scotland, and the National Galleries of Scotland. She currently coordinates the regional delivery of public music, arts, and heritage programmes across Falkirk, and oversees AIO’s strategic plan and mission as Chair of the Board. When not dreaming up new ways to get people excited about History, she is playing traditional music, losing at board games, and tending to her massive guinea pig, Angus.</p>
                            <br></br>
                            <p>To contact please email enquiries@allinoneeducation.co.uk</p>
                        </div>
                        <div className="corner-button-container">
                        <div name="see bio" role="button" className="corner-button" tabIndex="0"
                        onClick={() => triggerProfile("img-1", "employee-1")} 
                        onKeyDown={() => triggerProfile("img-1", "employee-1")}
                        >
                        <FontAwesomeIcon className="more-info-icon" icon={faInfo} size="2x" />
                        </div>
                        </div>
                    </div>
                    <div className="profile-box" id="white">
                        <h2>Zo Daniels - Vice Chair</h2>
                        <img className="employee-picture" src={zoDaniels} alt="inclusive" id="img-2" />
                        <div className="employee-blurb" id="employee-2">
                            <p >Zo is a jack of all trades who has worked in various events and marketing roles in education and entertainment charities around London. An intersectional activist, and founding member of social activism group Collective Action For Black Matters, she has a thirst for knowledge and loves creating engaging and inspiring content. As AIO’s vice-chair, she directs strategy and oversees operations in England, and when she’s not working, you’ll probably find her hiding in a cinema somewhere.
                        </p>
                            <br></br>
                            <p>To contact please email enquiries@allinoneeducation.co.uk</p>
                        </div>
                        <div className="corner-button-container">
                        <div role="button" className="corner-button" tabIndex="0"
                        onClick={() => triggerProfile("img-2", "employee-2")} 
                        onKeyDown={() => triggerProfile("img-2", "employee-2")}
                        >
                        <FontAwesomeIcon className="more-info-icon" icon={faInfo} size="2x" />
                        </div>
                        </div>
                    </div>

                    <div className="profile-box" id="white"
                    >
                        <h2>Gina Lorenzetti - Treasurer</h2>
                        <img className="employee-picture" src={ginaLorenzetti} alt="inclusive" id="img-3" />
                        <div className="employee-blurb" id="employee-3">
                            <p>Originally from Washington, DC, Gina moved to Scotland in 2011, and has a background working in environmental justice and educational charities. She currently works in Admissions at the University of Edinburgh, and when she is not busy overseeing AIO’s Finance and Corporate wing, you will find her in the middle of Lidl, co-parenting Angus the guinea pig, or watching her favourite TV show Avatar: The Legend of Korra.
                            </p>
                        </div>
                        <div className="corner-button-container">
                        <div role="button" className="corner-button" tabIndex="0"
                        onClick={() => triggerProfile("img-3", "employee-3")} 
                        onKeyDown={() => triggerProfile("img-3", "employee-3")}
                        >
                        <FontAwesomeIcon className="more-info-icon" icon={faInfo} size="2x" />
                        </div>
                        </div>
                    </div>

                    <div className="profile-box" id="white">
                        <h2>Nikhat Yusaf - Teaching Lead</h2>
                        <img className="employee-picture" src={nikhatYusaf} alt="inclusive" id="img-4" />
                        <div className="employee-blurb" id="employee-4">
                            <p>Nikhat has a background in primary education and worked as a class teacher before taking on additional training to specialise in supporting bilingual learners and learners with literacy difficulties and dyslexia. When not developing and delivering training to teachers, supporting pupils with additional support needs and being an equalities champion at the Educational Institute of Scotland, she is a serial 'hobbyist', parent of four amazing young people and bird-mum to a demanding wee cockatiel, Momo. As AIO’s Teaching Lead, she coordinates our team of teacher creators and oversees our education strategy.</p>
                            <br></br>
                            <p>To contact please email enquiries@allinoneeducation.co.uk</p>
                        </div>
                        <div className="corner-button-container">
                        <div role="button" className="corner-button" tabIndex="0"
                        onClick={() => triggerProfile("img-4", "employee-4")} 
                        onKeyDown={() => triggerProfile("img-4", "employee-4")}
                        >
                        <FontAwesomeIcon className="more-info-icon" icon={faInfo} size="2x" />
                        </div>
                        </div>
                    </div>

                    <div className="profile-box" id="white">
                        <h2>Henry Lampitt - Relationships and Advocacy Lead</h2>
                        <img className="employee-picture" src={henryLampitt} alt="inclusive" id="img-5" />
                        <div className="employee-blurb" id="employee-5">
                            <p>Henry has a background working in heritage education across the south east of England, both as an education officer and as a volunteer coordinator. As Relationships Lead, he forges bonds with our partner organisations, and works to create our education resources with AIO’s designers. If he's not spreading the word of All In One Education, you'll find him on his bike, off to find the next best place to eat or drink, or cooking at home for his friends and family.</p>
                            <br></br>
                            <p>To contact please email enquiries@allinoneeducation.co.uk</p>
                        </div>
                        <div className="corner-button-container">
                        <div role="button" className="corner-button" tabIndex="0"
                        onClick={() => triggerProfile("img-5", "employee-5")} 
                        onKeyDown={() => triggerProfile("img-5", "employee-5")}
                        >
                        <FontAwesomeIcon className="more-info-icon" icon={faInfo} size="2x" />
                        </div>
                        </div>
                    </div>

                    <div className="profile-box" id="white">
                        <h2>Christine Pont - Development Lead</h2>
                        <img className="employee-picture" src={christinePont} alt="inclusive" id="img-6" />
                        <div className="employee-blurb" id="employee-6">
                            <p>Christine is AIO’s Business Development Lead, and has a background in museum education and various roles in the charity sector including fundraising and volunteer management. When she isn’t developing AIO into an exciting, accessible organisation, she spends most of her time trying to tame her toddler - but gets the odd opportunity to hide in a corner with a book or escape to her favourite routes to try and beat her 10k PB.</p>
                            <br></br>
                            <p>To contact please email enquiries@allinoneeducation.co.uk</p>
                        </div>
                        <div className="corner-button-container">
                        <div role="button" className="corner-button" tabIndex="0"
                        onClick={() => triggerProfile("img-6", "employee-6")} 
                        onKeyDown={() => triggerProfile("img-6", "employee-6")}
                        >
                        <FontAwesomeIcon className="more-info-icon" icon={faInfo} size="2x" />
                        </div>
                        </div>
                    </div>

                    <div className="profile-box" id="white"
                    >
                        <h2>Lizzie Riungu - Advocacy Lead</h2>
                        <img className="employee-picture" src={lizzieRiungu} alt="inclusive" id="img-7" />
                        <div className="employee-blurb" id="employee-7">
                            <p>Lizzie has a background in social activism and events management, and is one of the co-founders of the Edinburgh in Solidarity with BLM activist group. She works in All In One’s Advocacy team, creating campaigns, content, and connections with educational institutes and social activism groups. Outwith this work, she is usually found walking her dog, playing board games, or learning how to make clothes.</p>
                            <br></br>
                            <p>To contact please email enquiries@allinoneeducation.co.uk</p>
                        </div>
                        <div className="corner-button-container">
                        <div role="button" className="corner-button" tabIndex="0"
                        onClick={() => triggerProfile("img-7", "employee-7")} 
                        onKeyDown={() => triggerProfile("img-7", "employee-7")}
                        >
                        <FontAwesomeIcon className="more-info-icon" icon={faInfo} size="2x" />
                        </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Needs integration with Mailchimp */}
            {/* <div className="newsletter-banner">
                <div className="paragraph-box" id="white">
                <h2>Subscribe to our newsletter</h2>
                <p>Sign up with your email address to receive news and updates.</p>
                <form className="client-form">
                <input placeholder="E-mail Address"/>
                <button>Sign Up</button>
                </form>
                </div>
            </div>  */}


        </Layout>
    )

}

export default AboutUs