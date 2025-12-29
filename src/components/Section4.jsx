import { useState } from 'react'
import './Section4.css'
import indiaMartIcon from '../images/IndiaMART Icon.png'

function Section4() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      text: "Source Central cut our sourcing time by over 80%. We found reliable suppliers in Vietnam and Mexico within days—saving time, avoiding tariffs, and winning more deals",
      author: "Evan Rosenberg",
      company: "PHPrints",
      logo: "https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682bf92747b07210cc2144fe_customer_logo_01.avif",
      colorClass: "color-01"
    },
    {
      id: 2,
      text: "Source Central helped us diversify beyond China, speed up our RFQ process, and generate fresh product ideas. We've grown from 3 to 12 seats in just three months—it's now an essential part of our workflow.",
      author: "Ben Zhang",
      company: "Greater Pacific",
      logo: "https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682bf9288e001ea58de50bae_customer_logo_02.avif",
      colorClass: "color-02"
    },
    {
      id: 3,
      text: "Source Central makes sourcing in hard-to-navigate regions like Cambodia seamless. It's helped us vet low-MOQ suppliers faster and laid the groundwork to scale our services for D2C and SMB clients.",
      author: "Jessica",
      company: "Li & Fung",
      logo: "https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682bf92734a7233a5bf6165c_customer_logo_04.avif",
      colorClass: "color-03"
    },
    {
      id: 4,
      text: "I found Source Central a great tool to enhance our sourcing efforts with highly reliable data, multiple ways to query data and find the right vendors in the right locations. The AI image functions very beneficial to insure we were comparing apples to apples.",
      author: "Chris Rork",
      company: "Muev Brand",
      logo: "https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682bf927daf20f287581ae2c_customer_logo_03.avif",
      colorClass: "color-04"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="section-4">
      <div className="div-block-2809">
        <h2 className="heading-9-copy">Transform How Your Procurement Teams Operates</h2>
        
        <div className="div-block-2817">
          <img 
            src="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/68216030172a418ac866134c_d23a3df3010eac5d2d34e7e657ec81e3_section-bg-yellow.avif" 
            loading="lazy" 
            alt="" 
            className="image-56"
          />
          <img 
            src="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/68216030bb7ec9a01da932c1_5e33e52720970793ec84d07075b579b5_section-br-green.avif" 
            loading="lazy" 
            sizes="(max-width: 3560px) 100vw, 3560px" 
            alt="" 
            srcSet="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/68216030bb7ec9a01da932c1_5e33e52720970793ec84d07075b579b5_section-br-green-p-500.png 500w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/68216030bb7ec9a01da932c1_5e33e52720970793ec84d07075b579b5_section-br-green-p-800.png 800w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/68216030bb7ec9a01da932c1_5e33e52720970793ec84d07075b579b5_section-br-green-p-1080.png 1080w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/68216030bb7ec9a01da932c1_5e33e52720970793ec84d07075b579b5_section-br-green.avif 3560w" 
            className="image-54"
          />
          <img 
            src="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/68216030a937523ab8c262dd_690e35d60c3a050c4c3c9c386eb62c5c_section-bg-blue.avif" 
            loading="lazy" 
            sizes="(max-width: 2558px) 100vw, 2558px" 
            alt="" 
            srcSet="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/68216030a937523ab8c262dd_690e35d60c3a050c4c3c9c386eb62c5c_section-bg-blue-p-500.png 500w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/68216030a937523ab8c262dd_690e35d60c3a050c4c3c9c386eb62c5c_section-bg-blue-p-800.png 800w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/68216030a937523ab8c262dd_690e35d60c3a050c4c3c9c386eb62c5c_section-bg-blue.avif 2558w" 
            className="image-55"
          />
          
          <div className="div-block-2818">
            <div className="div-block-2819">
              <div className="text-block-138">Before Source Central</div>
              <div className="div-block-2820">
                <div className="div-block-2821">
                  <div className="text-block-139">Supplier listings</div>
                  <img src="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/681db9b7000e9d619457c6ef_Frame%2033533.avif" loading="lazy" alt="" />
                  <img src={indiaMartIcon} loading="lazy" alt="IndiaMART" className="india-mart-icon" />
                </div>
                <div className="div-block-2821">
                  <div className="text-block-139">Competitor Research</div>
                  <img src="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/681db9b75f19d47c7299fd10_Frame%2033534.avif" loading="lazy" alt="" />
                </div>
              </div>
              <div className="div-block-2820">
                <div className="div-block-2821">
                  <div className="text-block-139">Tariff & Compliance Research</div>
                  <img src="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/681db9b716b1e2e6be0a99ec_Frame%2033535.avif" loading="lazy" alt="" />
                </div>
                <div className="div-block-2821">
                  <div className="text-block-139">RFQ Management</div>
                  <img src="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/681db9b76da9f7df4923e18f_Frame%2033536.avif" loading="lazy" alt="" />
                </div>
              </div>
              <div className="div-block-2821">
                <div className="text-block-139">Supplier Communication</div>
                <img 
                  src="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/681db9b8fd0dc8622173e477_Frame%2033537.avif" 
                  loading="lazy" 
                  sizes="(max-width: 1488px) 100vw, 1488px" 
                  alt="" 
                  srcSet="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/681db9b8fd0dc8622173e477_Frame%2033537-p-500.avif 500w, https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/681db9b8fd0dc8622173e477_Frame%2033537.avif 1488w"
                />
              </div>
            </div>
            
            <div className="div-block-2819 after-section">
              <div className="text-block-138">After Source Central</div>
              <div className="ai-agent-container">
                <div className="feature-bubbles">
                  <div className="feature-bubble bubble-1">Custom Questions</div>
                  <div className="feature-bubble bubble-2">Product Ideation</div>
                  <div className="feature-bubble bubble-3">Supplier Discovery</div>
                  <div className="feature-bubble bubble-4">Auto Followup</div>
                  <div className="feature-bubble bubble-5">Auto Translation</div>
                  <div className="feature-bubble bubble-6">Supplier Outreach</div>
                  <div className="feature-bubble bubble-7">Quote Intelligence</div>
                  <div className="feature-bubble bubble-8">Tariff Analysis</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      {/* <div className="div-block-2744">
        <div className="div-block-2747 left">
          <h2 className="heading-3 country left">Trusted by Procurement Leaders</h2>
          <div className="container-5">
            <div 
              className="slider01_comp w-slider" 
              data-delay="4000" 
              data-animation="slide" 
              data-autoplay="false" 
              data-easing="ease-in-out-quad" 
              data-hide-arrows="false" 
              data-disable-swipe="false" 
              data-autoplay-limit="0" 
              data-nav-spacing="4" 
              data-duration="500" 
              data-infinite="false" 
              role="region" 
              aria-label="carousel"
            >
              <div className="slider01_mask for-customer w-slider-mask" id="w-slider-mask-0">
                {testimonials.map((testimonial, index) => {
                  const slideClass = index === 0 ? 'slider-1 for-customer w-slide' : index === 1 ? 'slide-3 w-slide' : index === 2 ? 'slide-4 w-slide' : 'slide-5 w-slide'
                  const isActive = index === currentSlide
                  const translateX = (index - currentSlide) * 100
                  
                  return (
                    <div
                      key={testimonial.id}
                      className={slideClass}
                      aria-label={`${index + 1} of ${testimonials.length}`}
                      role="group"
                      aria-hidden={!isActive}
                      style={{
                        transition: 'all, transform 500ms cubic-bezier(0.455, 0.03, 0.515, 0.955)',
                        transform: `translateX(${translateX}%)`,
                        opacity: 1
                      }}
                    >
                      <div className={`div-block-2830 ${testimonial.colorClass}`} aria-hidden={!isActive}>
                        <img
                          src="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/682bf19d51f8663f794f9f16_quotation_mark.svg"
                          loading="lazy"
                          alt=""
                          className="image-63"
                          aria-hidden={!isActive}
                        />
                        <div className="text-block-144" aria-hidden={!isActive}>
                          {testimonial.text}
                        </div>
                        <div className="div-block-2851" aria-hidden={!isActive}>
                          <div className="div-block-2850" aria-hidden={!isActive}>
                            <div className="text-block-145" aria-hidden={!isActive}>
                              {testimonial.author}
                            </div>
                            <div className="text-block-146" aria-hidden={!isActive}>
                              {testimonial.company}
                            </div>
                          </div>
                          <img
                            src={testimonial.logo}
                            loading="lazy"
                            alt={`${testimonial.company} logo`}
                            className={`image-58 ${index === 1 ? '_02' : index === 2 ? '_03' : index === 3 ? '_04' : ''}`}
                            aria-hidden={!isActive}
                          />
                        </div>
                      </div>
                    </div>
                  )
                })}
                <div aria-live="off" aria-atomic="true" className="w-slider-aria-label" data-wf-ignore="">
                  Slide {currentSlide + 1} of {testimonials.length}.
                </div>
              </div>
              <div
                className="slider_arrow is-left w-slider-arrow-left"
                role="button"
                tabIndex={0}
                aria-controls="w-slider-mask-0"
                aria-label="previous slide"
                onClick={prevSlide}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    prevSlide()
                  }
                }}
              >
                <div className="testimonial20_arrow-icon w-embed">
                  <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.31066 8.75001L9.03033 14.4697L7.96967 15.5303L0.439339 8.00001L7.96967 0.469676L9.03033 1.53034L3.31066 7.25001L15.5 7.25L15.5 8.75L3.31066 8.75001Z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
              <div
                className="slider_arrow w-slider-arrow-right"
                role="button"
                tabIndex={0}
                aria-controls="w-slider-mask-0"
                aria-label="next slide"
                onClick={nextSlide}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    nextSlide()
                  }
                }}
              >
                <div className="testimonial20_arrow-icon w-embed">
                  <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6893 7.25L6.96967 1.53033L8.03033 0.469666L15.5607 8L8.03033 15.5303L6.96967 14.4697L12.6893 8.75H0.5V7.25H12.6893Z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Section4

