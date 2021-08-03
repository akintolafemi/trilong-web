import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Header({active}) {
  return (
    <header id="header" className="header--has-languages header header--has-search header--has-cta header--has-contact header--has-social-links header--has-collision-detection header--has-expanded-panel" className={styles.header}>
        <div className="header__inner">
            <div className="header__content">
                <div className="header-branding">
                    <div className="header-branding__inner">
                        <div className="header-logo">
                            <a href="/" className="header-logo__link">
                                <img src="https://demo.lsvr.sk/html/beautyspot/images/logo.png" className="header-logo__image" alt="Logo"></img>
                            </a>
                        </div>
                        <div className="header-title-tagline">
                            <div className="header-title">
                                <a href="/" className="header-title__link">Trilon.ng</a>
                            </div>
                            <p className="header-tagline">
                                Find and Book Services
                            </p>
                        </div>
                    </div>
                </div>
                <nav className="header-menu" aria-label="Header menu">
                    <ul className="header-menu__list" role="menu">
                        <li className={active==="home" ? ("header-menu__item header-menu__item--current"):("header-menu__item")}>
                            <span className="header-menu__item-link-wrapper">
                              <a href="/" className="header-menu__item-link">Home</a>
                            </span>
                        </li>
                        <li className={active=="services" ? ("header-menu__item header-menu__item--current"):("header-menu__item")}>
                            <span className="header-menu__item-link-wrapper">
                              <a href="/services" className="header-menu__item-link">Our Services</a>
                            </span>
                        </li>
                        <li className={active=="salons" ? ("header-menu__item header-menu__item--has-children header-menu__item--current"):("header-menu__item header-menu__item--has-children")}>
                            <span className="header-menu__item-link-wrapper">
                              <a href="/salons" className="header-menu__item-link">Salons</a>
                            </span>
                            <button type="button" className="header-menu__submenu-toggle" title="Expand submenu">
                                <span className="header-menu__submenu-toggle-icon" aria-hidden="true"></span>
                            </button>
                            <ul className="header-menu__submenu">
                                <li className="header-menu__item">
                                    <a href="/salons/barbing" className="header-menu__item-link" role="menuitem">Barbing</a>

                                </li>
                                <li className="header-menu__item">
                                    <a href="/salons/hair-salon" className="header-menu__item-link" role="menuitem">Hair Salon</a>

                                </li>
                                <li className="header-menu__item">
                                    <a href="/salons/spa" className="header-menu__item-link" role="menuitem">SPA</a>

                                </li>
                            </ul>
                        </li>
                        <li className={active=="about-us" ? ("header-menu__item header-menu__item--has-children header-menu__item--current"):("header-menu__item header-menu__item--has-children")}>
                            <span className="header-menu__item-link-wrapper">
                              <a href="/blog" className="header-menu__item-link">About Us</a>
                            </span>
                            <button type="button" className="header-menu__submenu-toggle" title="Expand submenu">
                                <span className="header-menu__submenu-toggle-icon" aria-hidden="true"></span>
                            </button>
                            <ul className="header-menu__submenu">
                                <li className="header-menu__item">
                                    <a href="/blog" className="header-menu__item-link" role="menuitem">Blog</a>

                                </li>
                                <li className="header-menu__item">
                                    <a href="/gallery" className="header-menu__item-link" role="menuitem">Galleries</a>

                                </li>
                                <li className="header-menu__item">
                                    <a href="/testimonials" className="header-menu__item-link" role="menuitem">Testimonials</a>

                                </li>
                                <li className="header-menu__item">
                                    <a href="/faqs" className="header-menu__item-link" role="menuitem">FAQ</a>

                                </li>
                            </ul>
                        </li>
                        <li className={active=="contact" ? ("header-menu__item header-menu__item--current"):("header-menu__item")}>
                            <span className="header-menu__item-link-wrapper">
                              <a href="/contact" className="header-menu__item-link">Contact</a>
                            </span>
                        </li>
                        <li className={active=="services" ? ("header-menu__item header-menu__item--has-children header-menu__item--current"):("header-menu__item header-menu__item--has-children")}>
                            <span className="header-menu__item-link-wrapper">
                              <a href="#" className="header-menu__item-link">Account</a>
                            </span>
                            <button type="button" className="header-menu__submenu-toggle" title="Expand submenu">
                                <span className="header-menu__submenu-toggle-icon" aria-hidden="true"></span>
                            </button>
                            <ul className="header-menu__submenu">
                                <li className="header-menu__item">
                                    <a href="/login" className="header-menu__item-link" role="menuitem">Login</a>

                                </li>
                                <li className="header-menu__item">
                                    <a href="/createaccount" className="header-menu__item-link" role="menuitem">Create Account</a>

                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div className="header-search">
                    <div className="header-search__form">
                        <form className="search-form" action="#" role="search">
                            <div className="search-form__inner">
                                <div className="search-form__input-holder">
                                    <input className="search-form__input" type="text" name="s" placeholder="Search..."></input>
                                    <button className="search-form__button" type="submit" title="Search">
                                        <span className="search-form__button-icon" aria-hidden="true"></span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <button type="button" className="header-search__toggle" title="Search">
                        <span className="header-search__toggle-icon" aria-hidden="true"></span>
                    </button>
                </div>
                <div className="header-panel">
                    <div className="header-panel__inner">
                        <div className="header-panel__top">
                            <div className="header-panel__top-inner">
                                <div className="header-cta">
                                    <a href="contact.html" className="header-cta__button">Book An Appointment</a>
                                </div>
                                <div className="header-contact">
                                    <div className="header-contact__inner">
                                        <ul className="header-contact__list">
                                            <li className="header-contact__item header-contact__item--has-icon">
                                                <span className="header-contact__item-icon icon-phone" aria-hidden="true"></span>
                                                <a href="tel:12346789">+(234) 810 013 1944</a>
                                            </li>
                                            <li className="header-contact__item header-contact__item--has-icon">
                                                <span className="header-contact__item-icon icon-envelope-o" aria-hidden="true"></span>
                                                <a href="mailto:example@example.com">appointment@trilong.ng</a>
                                            </li>
                                            <li className="header-contact__item header-contact__item--has-icon">
                                                <span className="header-contact__item-icon icon-map-marker" aria-hidden="true"></span>
                                                <p>
                                                    University of Ibadan
                                                    <br></br>
                                                    Ibadan, Nigeria
                                                    <br></br>
                                                    200222
                                                </p>
                                            </li>
                                            <li className="header-contact__item header-contact__item--has-icon">
                                                <span className="header-contact__item-icon icon-clock-o" aria-hidden="true"></span>
                                                <dl>
                                                    <dt>Mo. - Fr.:</dt>
                                                    <dd>08am - 09pm</dd>
                                                    <dt>Sa.:</dt>
                                                    <dd>9am - 8pm</dd>
                                                    <dt>Su.:</dt>
                                                    <dd>Closed</dd>
                                                </dl>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-panel__bottom">
                            <div className="header-panel__bottom-inner">
                                <div className="header-social">
                                    <ul className="header-social__list">
                                        <li className="header-social__item header-social__item--facebook">
                                            <a className="header-social__item-link" href="#facebook" target="_blank" title="Facebook" target="_blank">
                                                <span className="header-social__icon icon-facebook" aria-hidden="true"></span>
                                            </a>
                                        </li>
                                        <li className="header-social__item header-social__item--instagram">
                                            <a className="header-social__item-link" href="#instagram" target="_blank" title="Instagram" target="_blank">
                                                <span className="header-social__icon icon-instagram" aria-hidden="true"></span>
                                            </a>
                                        </li>
                                        <li className="header-social__item header-social__item--twitter">
                                            <a className="header-social__item-link" href="#twitter" target="_blank" title="Twitter" target="_blank">
                                                <span className="header-social__icon icon-twitter" aria-hidden="true"></span>
                                            </a>
                                        </li>
                                        <li className="header-social__item header-social__item--youtube">
                                            <a className="header-social__item-link" href="#youtube" target="_blank" title="YouTube" target="_blank">
                                                <span className="header-social__icon icon-youtube" aria-hidden="true"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <span className="header-panel__bottom-decor" aria-hidden="true"></span>

                            </div>
                        </div>
                    </div>
                    <button type="button" className="header-panel__toggle">
                        <span className="header-panel__toggle-icon" aria-hidden="true"></span>
                    </button>
                </div>
                <button type="button" className="header-mobile-toggle">
                    <span className="header-mobile-toggle__icon" aria-hidden="true"></span>
                </button>
            </div>
        </div>
    </header>
  )
}
