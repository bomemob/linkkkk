import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Shrill Active Human</title>
        <meta property="og:title" content="Shrill Active Human" />
      </Helmet>
      <div className="home-container1">
        <div className="home-container2">
          <div className="home-i-phone11-pro-profile-screen">
            <div className="home-profile-top">
              <img
                alt="image31810"
                src="/external/image31810-i1r8-200h.png"
                className="home-image3"
              />
              <img
                alt="Ellipse44249"
                src="/external/ellipse44249-mn3o.svg"
                className="home-ellipse4"
              />
              <span className="home-text">
                <span>Anna Miller</span>
              </span>
              <span className="home-text02">
                <span>edit profile</span>
              </span>
              <img
                alt="Ok483"
                src="/external/ok483-dp9-200h.png"
                className="home-ok"
              />
            </div>
            <div className="home-profile-data">
              <span className="home-text04">
                <span>Languages</span>
              </span>
              <span className="home-text06">
                <span>location</span>
              </span>
              <span className="home-text08">
                <span>member sience</span>
              </span>
              <span className="home-text10 ProfiledataText">
                <span>English, French</span>
              </span>
              <span className="home-text12 ProfiledataText">
                <span>Toronto, ON</span>
              </span>
              <span className="home-text14 ProfiledataText">
                <span>November 2020</span>
              </span>
            </div>
            <img
              alt="entypodotsthreevertical1810"
              src="/external/entypodotsthreevertical1810-jxe9.svg"
              className="home-entypodotsthreevertical"
            />
            <div className="home-frame12">
              <div className="home-text-cources">
                <span className="home-text16">
                  <span>your cources</span>
                </span>
                <span className="home-text18">
                  <span>eCources</span>
                </span>
                <span className="home-text20">
                  <span>Tutoring</span>
                </span>
                <span className="home-text22">
                  <span>edit &gt;</span>
                </span>
              </div>
              <div className="home-first-iteme-cource">
                <img
                  alt="Rectangle104310"
                  src="/external/rectangle104310-v7ii-200h.png"
                  className="home-rectangle10"
                />
                <img
                  alt="image51811"
                  src="/external/image51811-74gl-200h.png"
                  className="home-image5"
                />
                <span className="home-text24">
                  <span>
                    <span>photographing</span>
                    <br></br>
                    <span>hawaii</span>
                  </span>
                </span>
              </div>
              <div className="home-second-iteme-cource">
                <img
                  alt="Rectangle104315"
                  src="/external/rectangle104315-7dwu-200h.png"
                  className="home-rectangle101"
                />
                <img
                  alt="image61811"
                  src="/external/image61811-hz7c-200h.png"
                  className="home-image6"
                />
                <span className="home-text29">
                  <span>
                    <span>photographing</span>
                    <br></br>
                    <span>
                      Azerbaijan
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </div>
              <div className="home-third-iteme-cource">
                <img
                  alt="Rectangle104319"
                  src="/external/rectangle104319-2gv-200h.png"
                  className="home-rectangle102"
                />
                <img
                  alt="image14318"
                  src="/external/image14318-8as-200w.png"
                  className="home-image1"
                />
                <span className="home-text34">
                  <span>
                    <span>photographing</span>
                    <br></br>
                    <span>
                      iceland
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </div>
              <div className="home-first-item-tutoring">
                <img
                  alt="Rectangle104325"
                  src="/external/rectangle104325-c958-200h.png"
                  className="home-rectangle103"
                />
                <img
                  alt="image71811"
                  src="/external/image71811-wdl-200h.png"
                  className="home-image7"
                />
                <span className="home-text39">
                  <span>portret</span>
                </span>
              </div>
              <div className="home-second-item-tutoring">
                <img
                  alt="Rectangle104331"
                  src="/external/rectangle104331-h2kw-200h.png"
                  className="home-rectangle104"
                />
                <img
                  alt="image81814"
                  src="/external/image81814-gmd-200h.png"
                  className="home-image8"
                />
                <span className="home-text41">
                  <span>panorama</span>
                </span>
              </div>
              <div className="home-third-item-tutoring">
                <img
                  alt="Rectangle104335"
                  src="/external/rectangle104335-kytr-200h.png"
                  className="home-rectangle105"
                />
                <img
                  alt="image91815"
                  src="/external/image91815-yvss-200w.png"
                  className="home-image9"
                />
                <span className="home-text43">
                  <span>street</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
