import React from "react";
import Layout from "../components/layout";
import emailjs from "emailjs-com";
import SEO from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const ContactUs = () => {

    const handleSubmit = e => {
        e.preventDefault()
        const button = document.getElementById('button')
        const form = document.getElementById('form')

        const confirm = document.getElementById('confirm')
        const error = document.getElementById('error')

        const serviceID = 'default_service';
        const templateID = 'template_9zre86c';
        const userID = 'user_kZjiOtT1DMzkYvEKUyuPV';

        button.value = 'Sending...'

        emailjs.sendForm(serviceID, templateID, form, userID)
            .then(() => {
                confirm.style.display = "block";
                button.style.display = "none";
            }, (err) => {
                error.style.display = "block";
                button.style.display = "none";
            });
    }

    return (
        <Layout siteType={"client"}>
            <SEO title="Contact Us"/>
            <div className="banner-container-2" id="yellow">
                <div className="paragraph-box" id="white">
                    <h1>Contact us</h1>
                </div>
            </div>

            <div className="content-box-variable">

                <div className="paragraph-box box1" id="white">
                    <p>Contact us to learn more about our mission and work, or get involved yourself.</p>
                    <p>enquiries@allinoneeducation.co.uk</p>
                    <StaticImage src="../images/iStock-1091721518.jpg" alt="contact-us"/>
                </div>

                <div className="paragraph-box box2" id="white">
                    <form id="form" onSubmit={handleSubmit} className="contact-us-form">
                        <input type="text" name="first_name" placeholder="First Name" />
                        <input type="text" name="last_name" placeholder="Last Name" />
                        <input type="text" name="reply_to" placeholder="Email" />
                        <textarea type="text" name="message" placeholder="Message"/>
                        <div id="confirm"><p>Thanks! We will reply to your enquiry ASAP.</p></div>
                        <div id="error"><p>Oh No! It appears there was an error. Please try emailing us directly at enquiries@allinoneeducation.co.uk.</p></div>
                        <div className="button-container">
                        <input type="submit" id="button" value="Send Email" />
                        </div>
                    </form>
                </div>

            </div>

        </Layout>
    )
}

export default ContactUs