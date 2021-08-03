import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Footer({}) {
  return (
    <footer id="footer">
        <div className="footer__inner">
            <div className={`footer-widgets ${styles.footer_widgets}`}>
                <div className="footer-widgets__inner">
                    <div className="lsvr-container">
                        <div className="footer-widgets__grid lsvr-grid">
                            <div className="footer-widgets__grid-col lsvr-grid__col lsvr-grid__col--span-8 lsvr-grid__col--md-span-12">
                                <div className="widget lsvr-text-widget">
                                    <div className="widget__inner">
                                        <h3 className="widget__title">About Trilon.ng</h3>
                                        <div className="widget__content">
                                            <p>Trilon.ng is a collection of certified and best salon service providers across the country. From SPA, to Beauty salon, to Barbing, Cosmetics, and so on. Trilon.ng is the best place for you to select a service provider for your next beauty session.</p>
                                            <p>You can book and review appointments from your <Link href="/login"><a>customer dashboard</a></Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-widgets__grid-col lsvr-grid__col lsvr-grid__col--span-4 lsvr-grid__col--md-span-12">
                                <div className="widget lsvr-image-grid-widget">
                                    <div className="widget__inner">

                                        <h3 className="widget__title">We Endorse These Brands</h3>
                                        <div className="widget__content">

                                            <div className="lsvr-images-widget__grid lsvr-grid lsvr-grid--4-cols lsvr-grid--sm-2-cols">

                                                <div className="lsvr-grid__col">
                                                    <p>
                                                        <img src="images/brand_01.png" alt="Brand 1" />
                                                    </p>
                                                </div>

                                                <div className="lsvr-grid__col">
                                                    <p>
                                                        <img src="images/brand_02.png" alt="Brand 2" />
                                                    </p>
                                                </div>

                                                <div className="lsvr-grid__col">
                                                    <p>
                                                        <img src="images/brand_03.png" alt="Brand 3" />
                                                    </p>
                                                </div>

                                                <div className="lsvr-grid__col">
                                                    <p>
                                                        <img src="images/brand_04.png" alt="Brand 4" />
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
            <div className="footer-bottom">
                <div className="lsvr-container">
                    <div className="footer-bottom__inner">
                        <nav className="footer-menu">
                            <ul className="footer-menu__list">
                                <li className="footer-menu__item">
                                    <Link href="/"><a>Home</a></Link>
                                </li>
                                <li className="footer-menu__item">
                                    <Link href="/faqs"><a>FAQs</a></Link>
                                </li>
                                <li className="footer-menu__item">
                                    <Link href="/terms"><a>Terms of Use</a></Link>
                                </li>
                                <li className="footer-menu__item">
                                    <Link href="/privacy"><a>User Privacy</a></Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="footer-text">
                            <p>
                                <a href="/">Trilon.ng</a> - That special salon
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
