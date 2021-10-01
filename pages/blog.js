import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Header from '../components/header'
import Footer from '../components/footer'

export default function Blog() {


  return (
    <div className={styles.container}>
      <Head>
        <meta httpEquiv="content-type" content="text/html; charset=utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Trilon.ng | About Us</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon"></link>
        <script src="https://idealswift.com/trilon-ng/assets/js/jquery-3.5.1.min.js" type="text/javascript"></script>
    		<script src="https://idealswift.com/trilon-ng/assets/js/third-party-scripts.min.js" type="text/javascript"></script>
    		<script src="https://idealswift.com/trilon-ng/assets/js/scripts.js" type="text/javascript"></script>
      </Head>

      <div id="wrapper">

        <Header active="about-us" />

        <div id="core">
          <div className="core__inner">
              <div className="page-header">
                  <div className="page-header__inner">
                      <div className="lsvr-container">
                          <div className="page-header__content">
                              <h1 className="page-header__title">Blog</h1>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="core__columns">
                  <div className="core__columns-inner">
                      <div className="lsvr-container">
                          <main id="main">
                              <div className="main__inner">
                                  <div className="page blog-post-page blog-post-archive">
                                      <div className="page__content">
                                          <div className="post-archive-categories">
                                              <h6 className="screen-reader-text">Categories:</h6>
                                              <ul className="post-archive-categories__list">
                                                  <li className="post-archive-categories__item post-archive-categories__item--all post-archive-categories__item--active">All</li>
                                                  <li className="post-archive-categories__item post-archive-categories__item--category">
                                                      <a href="#" className="post-archive-categories__item-link">Spa Treatments</a>
                                                  </li>
                                                  <li className="post-archive-categories__item post-archive-categories__item--category">
                                                      <a href="#" className="post-archive-categories__item-link">Hair Care</a>
                                                  </li>
                                                  <li className="post-archive-categories__item post-archive-categories__item--category">
                                                      <a href="#" className="post-archive-categories__item-link">Makeup Tips</a>
                                                  </li>
                                              </ul>
                                          </div>
                                          <div className="post-archive__list lsvr-grid lsvr-grid--masonry lsvr-grid--3-cols lsvr-grid--md-2-cols lsvr-grid--sm-1-cols">
                                              <div className="lsvr-grid__col">
                                                  <article className="post blog-post post--has-thumbnail">
                                                      <div className="post__inner">
                                                          <p className="post__thumbnail">
                                                              <a href="blog-single.html" className="post__thumbnail-link">
                                                                  <img src="images/blog_01.jpg" className="post__thumbnail-img" alt="A spa is a location where mineral-rich spring water" />
                                                              </a>
                                                          </p>
                                                          <header className="post__header">
                                                              <h2 className="post__title">
      																		<a href="blog-single.html" className="post__title-link">A spa is a location where mineral-rich spring water</a>
      																	</h2>

                                                              <p className="post__meta">

                                                                  <span className="post__meta-date">August 23, 2020</span>

                                                                  <span className="post__meta-categories">
      																			in <a href="blog-archive.html" className="post__meta-link">Spa Treatments</a>
      																		</span>

                                                              </p>

                                                          </header>
                                                          <div className="post__content">

                                                              <p>The term is derived from the name of the town of Spa, Belgium, whose name is known back from Roman times, when the location was called Aquae Spadanae, sometimes incorrectly.</p>

                                                              <p className="post__permalink">
                                                                  <a href="blog-single.html" className="post__permalink-link">Read More</a>
                                                              </p>

                                                          </div>
                                                      </div>
                                                  </article>
                                              </div>
                                              <div className="lsvr-grid__col">
                                                  <article className="post blog-post post--has-thumbnail">
                                                      <div className="post__inner">
                                                          <p className="post__thumbnail">
                                                              <a href="blog-single.html" className="post__thumbnail-link">
                                                                  <img src="images/blog_02.jpg" className="post__thumbnail-img" alt="The main professionals that provide therapeutic" />
                                                              </a>
                                                          </p>
                                                          <header className="post__header">

                                                              <h2 className="post__title">
      																		<a href="blog-single.html" className="post__title-link">The main professionals that provide therapeutic</a>
      																	</h2>

                                                              <p className="post__meta">

                                                                  <span className="post__meta-date">July 18, 2020</span>

                                                                  <span className="post__meta-categories">
      																			in <a href="blog-archive.html" className="post__meta-link">Spa Treatments</a>
      																		</span>

                                                              </p>

                                                          </header>
                                                          <div className="post__content">

                                                              <p>Many types of practices are associated with massage and include bodywork, manual therapy, energy medicine, neural mobilization and breathwork. Other names for massage.</p>

                                                              <p className="post__permalink">
                                                                  <a href="blog-single.html" className="post__permalink-link">Read More</a>
                                                              </p>

                                                          </div>
                                                      </div>
                                                  </article>
                                              </div>
                                              <div className="lsvr-grid__col">
                                                  <article className="post blog-post post--has-thumbnail">
                                                      <div className="post__inner">
                                                          <p className="post__thumbnail">
                                                              <a href="blog-single.html" className="post__thumbnail-link">
                                                                  <img src="images/blog_03.jpg" className="post__thumbnail-img" alt="The dyeing of hair is an ancient art that involves" />
                                                              </a>
                                                          </p>
                                                          <header className="post__header">
                                                              <h2 className="post__title">
      																		<a href="blog-single.html" className="post__title-link">The dyeing of hair is an ancient art that involves</a>
      																	</h2>
                                                              <p className="post__meta">
                                                                  <span className="post__meta-date">July 5, 2020</span>
                                                                  <span className="post__meta-categories">
      																			in <a href="blog-archive.html" className="post__meta-link">Hair Care</a>
      																		</span>
                                                              </p>
                                                          </header>
                                                          <div className="post__content">
                                                              <p>In ancient times, the dyes were obtained from plants. Some of the most well known are henna (Lawsonia inermis), indigo, Cassia obovata, senna, turmeric and amla.</p>
                                                              <p className="post__permalink">
                                                                  <a href="blog-single.html" className="post__permalink-link">Read More</a>
                                                              </p>
                                                          </div>
                                                      </div>
                                                  </article>
                                              </div>
                                              <div className="lsvr-grid__col">
                                                  <article className="post blog-post post--has-thumbnail">
                                                      <div className="post__inner">
                                                          <p className="post__thumbnail">
                                                              <a href="blog-single.html" className="post__thumbnail-link">
                                                                  <img src="images/blog_04.jpg" className="post__thumbnail-img" alt="Beauty salons have proven to be a recession-proof industry" />
                                                              </a>
                                                          </p>
                                                          <header className="post__header">
                                                              <h2 className="post__title">
      																		<a href="blog-single.html" className="post__title-link">Beauty salons have proven to be a recession-proof industry</a>
      																	</h2>
                                                              <p className="post__meta">
                                                                  <span className="post__meta-date">June 25, 2020</span>
                                                                  <span className="post__meta-categories">
      																			in <a href="blog-archive.html" className="post__meta-link">Makeup Tips</a>
      																		</span>
                                                              </p>
                                                          </header>
                                                          <div className="post__content">
                                                              <p>Although sales had declined from 2008 highs due to the Great Recession, they remain robust with long term positive forecast. Even though during recessions, consumers tend.</p>
                                                              <p className="post__permalink">
                                                                  <a href="blog-single.html" className="post__permalink-link">Read More</a>
                                                              </p>
                                                          </div>
                                                      </div>
                                                  </article>
                                              </div>
                                              <div className="lsvr-grid__col">
                                                  <article className="post blog-post post--has-thumbnail">
                                                      <div className="post__inner">
                                                          <p className="post__thumbnail">
                                                              <a href="blog-single.html" className="post__thumbnail-link">
                                                                  <img src="images/blog_05.jpg" className="post__thumbnail-img" alt="Cosmetics that are meant to be used on the face and eye" />
                                                              </a>
                                                          </p>
                                                          <header className="post__header">
                                                              <h2 className="post__title">
      																		<a href="blog-single.html" className="post__title-link">Cosmetics that are meant to be used on the face and eye</a>
      																	</h2>
                                                              <p className="post__meta">
                                                                  <span className="post__meta-date">June 19, 2020</span>
                                                                  <span className="post__meta-categories">
      																			in <a href="blog-archive.html" className="post__meta-link">Makeup Tips</a>
      																		</span>
                                                              </p>
                                                          </header>
                                                          <div className="post__content">
                                                              <p>Abrasive exfoliants include gels, creams or lotions, as well as physical objects. Loofahs, microfiber cloths, natural sponges, or brushes may be used to exfoliate skin simply by rubbing them over
                                                                  the face.</p>
                                                              <p className="post__permalink">
                                                                  <a href="blog-single.html" className="post__permalink-link">Read More</a>
                                                              </p>
                                                          </div>
                                                      </div>
                                                  </article>
                                              </div>
                                              <div className="lsvr-grid__col">
                                                  <article className="post blog-post post--has-thumbnail">
                                                      <div className="post__inner">
                                                          <p className="post__thumbnail">
                                                              <a href="blog-single.html" className="post__thumbnail-link">
                                                                  <img src="images/blog_06.jpg" className="post__thumbnail-img" alt="Aromatherapists, people who specialize in the practice" />
                                                              </a>
                                                          </p>
                                                          <header className="post__header">
                                                              <h2 className="post__title">
      																		<a href="blog-single.html" className="post__title-link">Aromatherapists, people who specialize in the practice</a>
      																	</h2>
                                                              <p className="post__meta">
                                                                  <span className="post__meta-date">June 6, 2020</span>
                                                                  <span className="post__meta-categories">
      																			in <a href="blog-archive.html" className="post__meta-link">Spa Treatments</a>
      																		</span>
                                                              </p>
                                                          </header>
                                                          <div className="post__content">
                                                              <p>Oils are described by Dioscorides, along with beliefs of the time regarding their healing properties, in his De Materia Medica, written in the first century. Distilled essential oils have been employed.</p>
                                                              <p className="post__permalink">
                                                                  <a href="blog-single.html" className="post__permalink-link">Read More</a>
                                                              </p>
                                                          </div>
                                                      </div>
                                                  </article>
                                              </div>
                                          </div>
                                          <nav className="pagination">
                                              <h2 className="screen-reader-text">Pagination</h2>
                                              <ul className="pagination__list">
                                                  <li className="pagination__item pagination__item--prev">
                                                      <a href="#" className="pagination__item-link">Previous</a>
                                                  </li>
                                                  <li className="pagination__item">
                                                      <a href="#" className="pagination__item-link">1</a>
                                                  </li>
                                                  <li className="pagination__item pagination__item--current">
                                                      <span className="pagination__item-link">2</span>
                                                  </li>
                                                  <li className="pagination__item">
                                                      <a href="#" className="pagination__item-link">3</a>
                                                  </li>
                                                  <li className="pagination__item pagination__item--dots" aria-hidden="true">...</li>
                                                  <li className="pagination__item">
                                                      <a href="#" className="pagination__item-link">10</a>
                                                  </li>

                                                  <li className="pagination__item pagination__item--next">
                                                      <a href="#" className="pagination__item-link">Next</a>
                                                  </li>

                                              </ul>
                                          </nav>
                                      </div>
                                  </div>
                              </div>
                          </main>
                      </div>
                  </div>
              </div>
          </div>
        </div>

        <Footer />

      </div>

    </div>

  )
}
