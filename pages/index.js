import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Header from '../components/header'
import Footer from '../components/footer'

export default function Home() {


  return (
    <div className={styles.container}>
      <Head>
        <meta httpEquiv="content-type" content="text/html; charset=utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Trilon.ng | Bringing salons closer to you</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon"></link>
        <script src="https://idealswift.com/trilon-ng/assets/js/jquery-3.5.1.min.js" type="text/javascript"></script>
    		<script src="https://idealswift.com/trilon-ng/assets/js/third-party-scripts.min.js" type="text/javascript"></script>
    		<script src="https://idealswift.com/trilon-ng/assets/js/scripts.js" type="text/javascript"></script>
      </Head>

      <div id="wrapper">

        <Header active="home" />

        <div id="core" className="core--fullwidth">
            <div className="core__inner">
                <div className="core__columns">
                    <div className="core__columns-inner">
                        <main id="main">
                            <div className="main__inner">
                                <div className="page">
                                    <div className="page__content">
                                        <section className="lsvr-slide-list">
                                            <div className="lsvr-slide-list__bg">
                                                <div className="lsvr-slide-list__inner">
                                                    <div className="lsvr-slide-list__list">
                                                        <div className="lsvr-slide-list__item">
                                                            <div className={`lsvr-slide-list__item-bg ${styles.lsvr_slide_list__item_bg}`}>
                                                                <div className="lsvr-slide-list__item-inner">
                                                                    <div className="lsvr-slide-list__item-content-wrapper">
                                                                        <div className="lsvr-slide-list__item-content">
                                                                            <div className="lsvr-container">
                                                                                <div className="lsvr-slide-list__item-content-inner">
                                                                                    <h2 className="lsvr-slide-list__item-title">Welcome to Trilon.ng</h2>
                                                                                    <div className="lsvr-slide-list__item-text">
                                                                                        <p>
                                                                                            The trusted place for Beauty Salons, Hairdressers, Wellness or Spa you can trust
                                                                                        </p>
                                                                                    </div>
                                                                                    <p className="lsvr-slide-list__item-button">
                                                                                        <a href="./services" className="lsvr-button lsvr-slide-list__item-button-link">See Our Services</a>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="lsvr-slide-list__item">
                                                            <div className={`lsvr-slide-list__item-bg ${styles.lsvr_slide_list__item_bg_2}`}>
                                                                <div className="lsvr-slide-list__item-inner">
                                                                    <div className="lsvr-slide-list__item-content-wrapper">
                                                                        <div className="lsvr-slide-list__item-content">
                                                                            <div className="lsvr-container">
                                                                                <div className="lsvr-slide-list__item-content-inner">

                                                                                    <h2 className="lsvr-slide-list__item-title">Book Session</h2>

                                                                                    <div className="lsvr-slide-list__item-text">
                                                                                        <p>
                                                                                            Book session with your trusted service provider and get notifications
                                                                                        </p>
                                                                                    </div>

                                                                                    <p className="lsvr-slide-list__item-button">
                                                                                        <a href="/createaccount" className="lsvr-button lsvr-slide-list__item-button-link">Get Started</a>
                                                                                    </p>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="lsvr-slide-list__item">
                                                            <div className={`lsvr-slide-list__item-bg ${styles.lsvr_slide_list__item_bg_3}`}>
                                                                <div className="lsvr-slide-list__item-inner">
                                                                    <div className="lsvr-slide-list__item-content-wrapper">
                                                                        <div className="lsvr-slide-list__item-content">
                                                                            <div className="lsvr-container">
                                                                                <div className="lsvr-slide-list__item-content-inner">

                                                                                    <h2 className="lsvr-slide-list__item-title">Hundreds of Happy Customers</h2>

                                                                                    <div className="lsvr-slide-list__item-text">
                                                                                        <p>
                                                                                            Sign up as a service provider today to get more customers at your place
                                                                                        </p>
                                                                                    </div>

                                                                                    <p className="lsvr-slide-list__item-button">
                                                                                        <a href="/testimonial" className="lsvr-button lsvr-slide-list__item-button-link">See Our Testimonials</a>
                                                                                    </p>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="lsvr-slide-list__nav">
                                                <button type="button" className="lsvr-slide-list__nav-button lsvr-slide-list__nav-button--prev">
                                                    <span className="lsvr-slide-list__nav-button-icon" aria-hidden="true"></span>
                                                </button>
                                                <button type="button" className="lsvr-slide-list__nav-button lsvr-slide-list__nav-button--next">
                                                    <span className="lsvr-slide-list__nav-button-icon" aria-hidden="true"></span>
                                                </button>
                                            </div>
                                        </section>
                                        <section className="lsvr-services lsvr-services--has-dark-background">
                                            <div className="lsvr-services__inner">
                                                <div className="lsvr-services__content">
                                                    <div className="lsvr-services__header-wrapper">
                                                        <div className="lsvr-container">
                                                            <header className="lsvr-services__header">

                                                                <h2 className="lsvr-services__title">
                                                                  <a href="service-archive.html" className="lsvr-services__title-link">Our Services</a>
                                                                </h2>

                                                                <h3 className="lsvr-services__subtitle">Our salon offers a wide variety of beauty services</h3>

                                                            </header>
                                                        </div>
                                                    </div>
                                                    <div className="lsvr-services__list-wrapper">
                                                        <div className="lsvr-container">
                                                            <div className="lsvr-services__list lsvr-grid lsvr-grid--3-cols lsvr-grid--md-2-cols lsvr-grid--sm-1-cols">
                                                                <div className="lsvr-services__item lsvr-grid__col lsvr-services__item--has-thumbnail">
                                                                    <article className="lsvr-beautyspot-services__post">
                                                                        <div className={`lsvr-services__post-bg ${styles.lsvr_slide_list__item_bg_4}`}>
                                                                            <div className="lsvr-services__post-inner">
                                                                                <header className="lsvr-services__post-header">
                                                                                    <div className="lsvr-services__post-header-inner">

                                                                                        <span className="lsvr-services__post-icon icon-powder-brush" aria-hidden="true"></span>

                                                                                        <h3 className="lsvr-services__post-title">
                                                                                            <a href="service-single.html" className="lsvr-services__post-title-link">Cosmetics</a>
                                                                                        </h3>

                                                                                    </div>
                                                                                </header>
                                                                                <div className="lsvr-services__post-description">
                                                                                    <div className="lsvr-services__post-description-inner">
                                                                                        <p>Cosmetics are substances or products used to enhance or alter the appearance of the face or fragrance and texture of the body.</p>
                                                                                    </div>
                                                                                </div>
                                                                                <a href="service-single.html" className="lsvr-services__post-overlay-link">
                                                                                    <span className="screen-reader-text">More Info</span>
                                                                                </a>

                                                                            </div>
                                                                        </div>
                                                                    </article>
                                                                </div>
                                                                <div className="lsvr-services__item lsvr-grid__col lsvr-services__item--has-thumbnail">
                                                                    <article className="lsvr-beautyspot-services__post">
                                                                        <div className={`lsvr-services__post-bg ${styles.lsvr_slide_list__item_bg_5}`}>
                                                                            <div className="lsvr-services__post-inner">

                                                                                <header className="lsvr-services__post-header">
                                                                                    <div className="lsvr-services__post-header-inner">

                                                                                        <span className="lsvr-services__post-icon icon-hair-dryer" aria-hidden="true"></span>

                                                                                        <h3 className="lsvr-services__post-title">
                                                                                  <a href="service-single.html" className="lsvr-services__post-title-link">Hairdressing</a>
                                                                              </h3>

                                                                                    </div>
                                                                                </header>
                                                                                <div className="lsvr-services__post-description">
                                                                                    <div className="lsvr-services__post-description-inner">
                                                                                        <p>Hairdressing as an occupation dates back thousands of years. Ancient art drawings and paintings have been discovered.</p>
                                                                                    </div>
                                                                                </div>

                                                                                <a href="service-single.html" className="lsvr-services__post-overlay-link">
                                                                                    <span className="screen-reader-text">More Info</span>
                                                                                </a>

                                                                            </div>
                                                                        </div>
                                                                    </article>
                                                                </div>
                                                                <div className="lsvr-services__item lsvr-grid__col lsvr-services__item--has-thumbnail">
                                                                    <article className="lsvr-beautyspot-services__post">
                                                                        <div className={`lsvr-services__post-bg ${styles.lsvr_slide_list__item_bg_6}`}>
                                                                            <div className="lsvr-services__post-inner">

                                                                                <header className="lsvr-services__post-header">
                                                                                    <div className="lsvr-services__post-header-inner">

                                                                                        <span className="lsvr-services__post-icon icon-beard" aria-hidden="true"></span>

                                                                                        <h3 className="lsvr-services__post-title">
                                                                                  <a href="service-single.html" className="lsvr-services__post-title-link">Barber</a>
                                                                              </h3>

                                                                                    </div>
                                                                                </header>
                                                                                <div className="lsvr-services__post-description">
                                                                                    <div className="lsvr-services__post-description-inner">
                                                                                        <p>A barber is a person whose occupation is mainly to cut, dress, groom, style and shave men’s and boys’ hair. Most barbers now specialize.</p>
                                                                                    </div>
                                                                                </div>
                                                                                <a href="service-single.html" className="lsvr-services__post-overlay-link">
                                                                                    <span className="screen-reader-text">More Info</span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </article>
                                                                </div>
                                                                <div className="lsvr-services__item lsvr-grid__col lsvr-services__item--has-thumbnail">
                                                                    <article className="lsvr-beautyspot-services__post">
                                                                        <div className={`lsvr-services__post-bg ${styles.lsvr_slide_list__item_bg_7}`}>
                                                                            <div className="lsvr-services__post-inner">
                                                                                <header className="lsvr-services__post-header">
                                                                                    <div className="lsvr-services__post-header-inner">

                                                                                        <span className="lsvr-services__post-icon icon-spa-lotion" aria-hidden="true"></span>

                                                                                        <h3 className="lsvr-services__post-title">
                                                                                  <a href="service-single.html" className="lsvr-services__post-title-link">Massages</a>
                                                                              </h3>

                                                                                    </div>
                                                                                </header>
                                                                                <div className="lsvr-services__post-description">
                                                                                    <div className="lsvr-services__post-description-inner">
                                                                                        <p>Massage is the manipulation of soft tissues in the body. Massage techniques are commonly applied with hands, fingers, elbows.</p>
                                                                                    </div>
                                                                                </div>
                                                                                <a href="service-single.html" className="lsvr-services__post-overlay-link">
                                                                                    <span className="screen-reader-text">More Info</span>
                                                                                </a>

                                                                            </div>
                                                                        </div>
                                                                    </article>
                                                                </div>
                                                                <div className="lsvr-services__item lsvr-grid__col lsvr-services__item--has-thumbnail">
                                                                    <article className="lsvr-beautyspot-services__post">
                                                                        <div className={`lsvr-services__post-bg ${styles.lsvr_slide_list__item_bg_8}`}>
                                                                            <div className="lsvr-services__post-inner">
                                                                                <header className="lsvr-services__post-header">
                                                                                    <div className="lsvr-services__post-header-inner">

                                                                                        <span className="lsvr-services__post-icon icon-lotus-flower" aria-hidden="true"></span>

                                                                                        <h3 className="lsvr-services__post-title">
                                                                                  <a href="service-single.html" className="lsvr-services__post-title-link">Body Treatments</a>
                                                                              </h3>

                                                                                    </div>
                                                                                </header>
                                                                                <div className="lsvr-services__post-description">
                                                                                    <div className="lsvr-services__post-description-inner">
                                                                                        <p>A manicure is a cosmetic beauty treatment for the fingernails and hands performed at home or in a nail salon.</p>
                                                                                    </div>
                                                                                </div>
                                                                                <a href="service-single.html" className="lsvr-services__post-overlay-link">
                                                                                    <span className="screen-reader-text">More Info</span>
                                                                                </a>

                                                                            </div>
                                                                        </div>
                                                                    </article>
                                                                </div>
                                                                <div className="lsvr-services__item lsvr-grid__col lsvr-services__item--has-thumbnail">
                                                                    <article className="lsvr-beautyspot-services__post">
                                                                        <div className={`lsvr-services__post-bg ${styles.lsvr_slide_list__item_bg_9}`}>
                                                                            <div className="lsvr-services__post-inner">
                                                                                <header className="lsvr-services__post-header">
                                                                                    <div className="lsvr-services__post-header-inner">

                                                                                        <span className="lsvr-services__post-icon icon-essence-candle-1" aria-hidden="true"></span>

                                                                                        <h3 className="lsvr-services__post-title">
                                                                                  <a href="service-single.html" className="lsvr-services__post-title-link">Aromatherapy</a>
                                                                              </h3>

                                                                                    </div>
                                                                                </header>
                                                                                <div className="lsvr-services__post-description">
                                                                                    <div className="lsvr-services__post-description-inner">
                                                                                        <p>Aromatherapy uses aromatic materials, including essential oils, and other aroma compounds, with claims for improving.</p>
                                                                                    </div>
                                                                                </div>
                                                                                <a href="service-single.html" className="lsvr-services__post-overlay-link">
                                                                                    <span className="screen-reader-text">More Info</span>
                                                                                </a>

                                                                            </div>
                                                                        </div>
                                                                    </article>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="lsvr-posts">
                                            <div className="lsvr-posts__inner">
                                                <div className="lsvr-posts__content">

                                                    <div className="lsvr-posts__header-wrapper">
                                                        <div className="lsvr-container">
                                                            <header className="lsvr-posts__header">

                                                                <h2 className="lsvr-posts__title">
                                                  <a href="blog-archive.html" className="lsvr-posts__title-link">Latest Blog Posts</a>
                                                </h2>

                                                                <h3 className="lsvr-posts__subtitle">Read our tips about makeup, hairdressing and body treatments</h3>

                                                            </header>
                                                        </div>
                                                    </div>
                                                    <div className="lsvr-posts__list-wrapper">
                                                        <div className="lsvr-container">
                                                            <div className="lsvr-posts__list lsvr-grid lsvr-grid--masonry lsvr-grid--3-cols lsvr-grid--md-2-cols lsvr-grid--sm-1-cols">

                                                                <div className="lsvr-posts__item lsvr-grid__col">
                                                                    <article className="lsvr-posts__post">
                                                                        <div className="lsvr-posts__post-inner">
                                                                            <p className="lsvr-posts__post-thumbnail">
                                                                                <a href="blog-single.html" className="lsvr-posts__post-thumbnail-link">
                                                                                    <img src="images/blog_01.jpg" className="lsvr-posts__post-thumbnail-img" alt="A spa is a location where mineral-rich spring water"></img>
                                                                                </a>
                                                                            </p>
                                                                            <header className="lsvr-posts__post-header">

                                                                                <h3 className="lsvr-posts__post-title">
                                                                            <a href="blog-single.html" className="lsvr-posts__post-title-link">A spa is a location where mineral-rich spring water</a>
                                                                        </h3>

                                                                                <p className="lsvr-posts__post-meta">

                                                                                    <span className="lsvr-posts__post-meta-date">
                                                                                    August 23, 2020
                                                                                </span>

                                                                                    <span className="lsvr-posts__post-meta-categories">
                                                                                    in <a href="blog-archive.html" className="lsvr-posts__post-meta-link">Spa Treatments</a>
                                                                                </span>

                                                                                </p>

                                                                            </header>

                                                                            <p className="lsvr-posts__post-permalink">
                                                                                <a href="blog-single.html" className="lsvr-posts__post-permalink-link">Read More</a>
                                                                            </p>

                                                                        </div>
                                                                    </article>
                                                                </div>
                                                                <div className="lsvr-posts__item lsvr-grid__col">
                                                                    <article className="lsvr-posts__post">
                                                                        <div className="lsvr-posts__post-inner">
                                                                            <p className="lsvr-posts__post-thumbnail">
                                                                                <a href="blog-single.html" className="lsvr-posts__post-thumbnail-link">
                                                                                    <img src="images/blog_02.jpg" className="lsvr-posts__post-thumbnail-img" alt="The main professionals that provide therapeutic" />
                                                                                </a>
                                                                            </p>
                                                                            <header className="lsvr-posts__post-header">

                                                                                <h3 className="lsvr-posts__post-title">
                                                                            <a href="blog-single.html" className="lsvr-posts__post-title-link">The main professionals that provide therapeutic</a>
                                                                        </h3>

                                                                                <p className="lsvr-posts__post-meta">

                                                                                    <span className="lsvr-posts__post-meta-date">
                                                                                    August 20, 2020
                                                                                </span>

                                                                                    <span className="lsvr-posts__post-meta-categories">
                                                                                    in <a href="blog-archive.html" className="lsvr-posts__post-meta-link">Spa Treatments</a>
                                                                                </span>

                                                                                </p>

                                                                            </header>

                                                                            <p className="lsvr-posts__post-permalink">
                                                                                <a href="blog-single.html" className="lsvr-posts__post-permalink-link">Read More</a>
                                                                            </p>

                                                                        </div>
                                                                    </article>
                                                                </div>
                                                                <div className="lsvr-posts__item lsvr-grid__col">
                                                                    <article className="lsvr-posts__post">
                                                                        <div className="lsvr-posts__post-inner">
                                                                            <p className="lsvr-posts__post-thumbnail">
                                                                                <a href="blog-single.html" className="lsvr-posts__post-thumbnail-link">
                                                                                    <img src="images/blog_03.jpg" className="lsvr-posts__post-thumbnail-img" alt="The dyeing of hair is an ancient art that involves" />
                                                                                </a>
                                                                            </p>
                                                                            <header className="lsvr-posts__post-header">

                                                                                <h3 className="lsvr-posts__post-title">
                                                                            <a href="blog-single.html" className="lsvr-posts__post-title-link">The dyeing of hair is an ancient art that involves</a>
                                                                        </h3>

                                                                                <p className="lsvr-posts__post-meta">

                                                                                    <span className="lsvr-posts__post-meta-date">
                                                                                    August 18, 2020
                                                                                </span>

                                                                                    <span className="lsvr-posts__post-meta-categories">
                                                                                    in <a href="blog-archive.html" className="lsvr-posts__post-meta-link">Hair Care</a>
                                                                                </span>

                                                                                </p>

                                                                            </header>
                                                                            <p className="lsvr-posts__post-permalink">
                                                                                <a href="blog-single.html" className="lsvr-posts__post-permalink-link">Read More</a>
                                                                            </p>

                                                                        </div>
                                                                    </article>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="lsvr-testimonials lsvr-testimonials--has-dark-background">
                                            <div className="lsvr-testimonials__inner">
                                                <div className="lsvr-testimonials__content">
                                                    <div className="lsvr-testimonials__header-wrapper">
                                                        <div className="lsvr-container">
                                                            <header className="lsvr-testimonials__header">

                                                                <h2 className="lsvr-testimonials__title">
                                                            <a href="testimonial-archive" className="lsvr-testimonials__title-link">Our Clients Testimonials</a>
                                                        </h2>

                                                                <h3 className="lsvr-testimonials__subtitle">What our customers are saying about us</h3>

                                                            </header>
                                                        </div>
                                                    </div>
                                                    <div className="lsvr-testimonials__list-wrapper">
                                                        <div className="lsvr-container">
                                                            <div className="lsvr-testimonials__list lsvr-grid lsvr-grid--masonry lsvr-grid--2-cols lsvr-grid--sm-1-cols">
                                                                <div className="lsvr-testimonials__item lsvr-grid__col">
                                                                    <div className="lsvr-testimonials__post">
                                                                        <div className="lsvr-testimonials__post-inner">
                                                                            <div className="lsvr-testimonials__post-content-wrapper">
                                                                                <blockquote className="lsvr-testimonials__post-quote">

                                                                                    <p>Eye shadow is a pigmented powder/cream or substance used to accentuate the eye area, traditionally on, above, and under the eyelids. Many colours may be used at once and blended
                                                                                        together to create different effects using a blending brush.</p>

                                                                                    <footer className="lsvr-testimonials__post-footer lsvr-testimonials__post-footer--has-thumbnail">

                                                                                        <p className="lsvr-testimonials__post-thumbnail">
                                                                                            <a href="testimonial-single.html" className="lsvr-testimonials__post-thumbnail-link">
                                                                                                <img src="images/client_01.jpg" className="lsvr-testimonials__post-thumbnail-img" alt="Sandra Olson" />
                                                                                            </a>
                                                                                        </p>

                                                                                        <cite className="lsvr-testimonials__post-title">
                                                                                        <a href="testimonial-single.html" className="lsvr-testimonials__post-title-link">Sandra Olson</a>
                                                                                        <span className="lsvr-testimonials__post-title-description">Pharmacist</span>
                                                                                      </cite>

                                                                                    </footer>

                                                                                </blockquote>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="lsvr-testimonials__item lsvr-grid__col">
                                                                    <div className="lsvr-testimonials__post">
                                                                        <div className="lsvr-testimonials__post-inner">
                                                                            <div className="lsvr-testimonials__post-content-wrapper">

                                                                                <blockquote className="lsvr-testimonials__post-quote">

                                                                                    <p>Bronzer gives skin a bit of color and contours the face for a sharper definition or creates a tan-look. Bronzer is considered to be more of a natural look and can be used
                                                                                        for everyday wear. Bronzer enhances the color of the face. It comes in either matte, semi-matte/satin, or shimmer finishes.</p>

                                                                                    <footer className="lsvr-testimonials__post-footer lsvr-testimonials__post-footer--has-thumbnail">

                                                                                        <p className="lsvr-testimonials__post-thumbnail">
                                                                                            <a href="testimonial-single.html" className="lsvr-testimonials__post-thumbnail-link">
                                                                                                <img src="images/client_02.jpg" className="lsvr-testimonials__post-thumbnail-img" alt="Donna Kittrell" />
                                                                                            </a>
                                                                                        </p>

                                                                                        <cite className="lsvr-testimonials__post-title">
                                                                                        <a href="testimonial-single.html" className="lsvr-testimonials__post-title-link">Donna Kittrell</a>
                                                                                        <span className="lsvr-testimonials__post-title-description">Receptionist</span>
                                                                                      </cite>

                                                                                    </footer>

                                                                                </blockquote>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="lsvr-testimonials__item lsvr-grid__col">
                                                                    <div className="lsvr-testimonials__post">
                                                                        <div className="lsvr-testimonials__post-inner">
                                                                            <div className="lsvr-testimonials__post-content-wrapper">
                                                                                <blockquote className="lsvr-testimonials__post-quote">

                                                                                    <p>Face powder sets the foundation and under eye concealer, giving it a matte finish while also concealing small flaws or blemishes. It can also be used to bake the foundation,
                                                                                        so that it stays on longer and create a matte finish.</p>

                                                                                    <footer className="lsvr-testimonials__post-footer lsvr-testimonials__post-footer--has-thumbnail">

                                                                                        <p className="lsvr-testimonials__post-thumbnail">
                                                                                            <a href="testimonial-single.html" className="lsvr-testimonials__post-thumbnail-link">
                                                                                                <img src="images/client_03.jpg" className="lsvr-testimonials__post-thumbnail-img" alt="Angela Chambers" />
                                                                                            </a>
                                                                                        </p>

                                                                                        <cite className="lsvr-testimonials__post-title">
                                                                                        <a href="testimonial-single.html" className="lsvr-testimonials__post-title-link">Angela Chambers</a>
                                                                                        <span className="lsvr-testimonials__post-title-description">Computer analyst</span>
                                                                                      </cite>

                                                                                    </footer>

                                                                                </blockquote>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="lsvr-testimonials__item lsvr-grid__col">
                                                                    <div className="lsvr-testimonials__post">
                                                                        <div className="lsvr-testimonials__post-inner">
                                                                            <div className="lsvr-testimonials__post-content-wrapper">
                                                                                <blockquote className="lsvr-testimonials__post-quote">

                                                                                    <p>Most modern barbershops have special barber chairs, and special equipment for rinsing and washing hair. In some barbershops, people can read magazines or watch TV while the
                                                                                        barber works.</p>

                                                                                    <footer className="lsvr-testimonials__post-footer lsvr-testimonials__post-footer--has-thumbnail">

                                                                                        <p className="lsvr-testimonials__post-thumbnail">
                                                                                            <a href="testimonial-single.html" className="lsvr-testimonials__post-thumbnail-link">
                                                                                                <img src="images/client_04.jpg" className="lsvr-testimonials__post-thumbnail-img" alt="Thomas Wadsworth" />
                                                                                            </a>
                                                                                        </p>

                                                                                        <cite className="lsvr-testimonials__post-title">
                                                                                        <a href="testimonial-single.html" className="lsvr-testimonials__post-title-link">Thomas Wadsworth</a>
                                                                                        <span className="lsvr-testimonials__post-title-description">Librarian</span>
                                                                                      </cite>

                                                                                    </footer>

                                                                                </blockquote>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="lsvr-cta lsvr-cta--has-button">
                                            <div className="lsvr-cta__inner">
                                                <div className="lsvr-container">
                                                    <div className="lsvr-cta__content">
                                                        <h3 className="lsvr-cta__title">Trilon.ng</h3>
                                                        <div className="lsvr-cta__text">
                                                            <p>Download our mobile apps</p>
                                                        </div>
                                                        <p className="lsvr-cta__button">
                                                            <a href="#" className="lsvr-cta__button-link lsvr-button" target="_blank">Apple Store</a>
                                                            <a href="#" className="lsvr-cta__button-link lsvr-button" target="_blank">Play Store</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
