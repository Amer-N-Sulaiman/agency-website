/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import {useState} from 'react'
import Head from 'next/head'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


// components

import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import Booking from "../components/Booking.js"

import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

import axios from 'axios';

import Button from 'react-bootstrap/Button'

export default function Landing() {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');



  function sendMessage(e){
	  e.preventDefault();
    var url = 'https://amerns.pythonanywhere.com/customerMessages/addMessage/'
    var data = {
      "fullName": fullName,
      "email": email,
      "message": message
    }
    axios.post(url, JSON.stringify(data), {
        headers: {
          'content-type': 'text/json'
        }
      });
    setFullName('');
    setEmail('');
    setMessage('');
	}


  return (
    <>
      <Head>
        <title>
          M-ZEIT
        </title>
        <meta name="description" content="A digital marketing agency that helps businesses grow their brand and increase their sales top notch email marketing at the lowest fees possible"/>
      </Head>
      <NavBar />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="">
                  <h1 className="text-white font-semibold">
                    Grow Your Brand With Top Notch Email Marketing
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Stop leaving so much money on the table by not implementing the most effective email flows and campaigns.
                  </p>
                  <a href="#booking">
                    <button
                          className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          style={{
                            border: 'solid'
                          }}
                          >
                            
                      <p style={{fontSize: '1.2em', fontWeight: 'bold', marginBottom: '0', color: '#f1f1f1'}}>Speak To Our Team</p>
                      
                        Schedule Your Free Audit Call
                      </button>
                  </a>
                  

                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Increase Your Overall ROI</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      We help you turn the customers you gain from paid ads into repeat customers by keeping them engaged with consistent very personalized emails.
                      <br/>
                      We also turn your website visitors into buying customers, such as visitors with abandoned carts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Gain Loyal Customers</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      We focus on building good relationships between our clients brands and their customers, by sending consistent personalized Emails.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Establish Your Brand Image</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      We craft Emails with a consistent design to keep your customers reminded of your brand until an powerful image of your brand is established in the customers mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl">
                    <MiscellaneousServicesIcon fontSize='large' color='primary' />
                  </i>
                </div>
                <h4>What We Offer</h4>
                <h3 className="text-3xl mb-2 font-semibold leading-normal" style={{color: '#1976D2'}}>
                  Top Notch Email Marketing
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  We implement Email flows that get triggered automatically to send customers corresponding, highly personalized, emails. These Email flows will continue earning you money even after finishing working with us.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                   We craft consistent Email campaigns to remind your customers of your brand and harness the events that are going on in the world to give the customers very tempting offers.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  We will also work with you, totally for free, on some issues you might be facing, like domain blacklisting and others.
                </p>
                {/* <Link href="/">
                  <a href="#" className="font-bold text-blueGray-700 mt-8">
                    Read more about our services in detail.
                  </a>
                </Link> */}
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blueGray-700 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold">
                      Third World Talents To Offer You The Best Results at The Lowest Prices
                    </h4>
                    <p className="text-md mt-2">
                      Most of our team members are professionals from 3rd world countries, where the cost of living is low. That allows us to charge you very low prices for the excellent results we bring.
                    </p>
                    {/* <br />
                    <Link href="/">
                      <a href="#pablo" className="font-bold text-blueGray-700 mt-8" style={{color: 'gray'}}>
                        Read more about the pricing of our services
                      </a>
                    </Link> */}
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div id="low-prices" className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  
                  <h3 className="text-3xl font-semibold" style={{marginTop: '30px'}}>Low cost and maximum results</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Our core business model is to focus on generating the best results for our clients while cutting down on unnecessary expenses so we can offer our clients our services for the lowest fees in the industry.
                  </p>
                  <br/>
                  <h4>How do we cut down on the service cost?</h4>
                  <List dense={true}>
                    <ListItem>
                      <ListItemIcon>
                        <CheckBoxIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText>
                        Almost all of our team members from 3rd world countries demanding relatively low wages to live a high-standards life.
                      </ListItemText>
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CheckBoxIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText>
                        No offices, virtual meetings only.
                      </ListItemText>
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <CheckBoxIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText>
                        Almost all of our profit is a percentage of the profit we bring to our clients.
                      </ListItemText>
                    </ListItem>
                  </List>

                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section id="booking">
          <Booking />
        </section> */}

        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white" style={{marginTop: '60px'}}>
                  Work with us for a brighter future for your business
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Our main objective is that our customers will be, at the very least, better off working with us than they were before. And they will know that they have made the correct decision.
                </p>
              </div>
            </div>
            {/* <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Build credibility
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  For example, our SEO service will build so much credibility to your brand name.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Gain Loyal Customers
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Our email marketing service will make sure your customers are receiving follow up email that they will find attractive. And that will build a good image of your brand in their mind.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Increase your conversion rate
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  By added credibility of the SEO campaigns we perform and the many rewards of email marketing, the conversion rate of your business will increase exponentially
                </p>
              </div>
            </div> */}
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              {/* <div className="w-full lg:w-6/12 px-4"> */}
              <div className="w-full px-4">
                <iframe id="booking" src="https://koalendar.com/e/meet-with-amer-sulaiman?embed=true" width="100%" height="800px" frameborder="0"></iframe>
                {/* <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Have Any Questions?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
	  		value = {fullName}
	  		onChange = {(e)=>{setFullName(e.target.value)}}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
	  		value = {email}
	  		onChange = {(e)=>{setEmail(e.target.value)}}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
	  		value = {message}
	  		onChange = {(e)=>{setMessage(e.target.value)}}
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
	  		onClick = {(e) => {sendMessage(e)}}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />

    </>
  );
}
