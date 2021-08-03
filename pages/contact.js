import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Header from '../components/header'
import Footer from '../components/footer'

export default function Contact() {


  return (
    <div className={styles.container}>
      <Head>
        <meta httpEquiv="content-type" content="text/html; charset=utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Trilon.ng | Contact Us</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon"></link>
        <script src="https://idealswift.com/trilon-ng/assets/js/jquery-3.5.1.min.js" type="text/javascript"></script>
    		<script src="https://idealswift.com/trilon-ng/assets/js/third-party-scripts.min.js" type="text/javascript"></script>
    		<script src="https://idealswift.com/trilon-ng/assets/js/scripts.js" type="text/javascript"></script>
      </Head>

      <div id="wrapper">

        <Header active="contact" />

  			<div id="core" className="core--narrow">
  				<div className="core__inner">
  					<div className="page-header">
  						<div className="page-header__inner">
  							<div className="lsvr-container">
  								<div className="page-header__content">
  									<h1 className="page-header__title">Contact</h1>
  								</div>
  							</div>
  						</div>
  					</div>
  					<div className="core__columns">
  						<div className="core__columns-inner">
  							<div className="lsvr-container">
  								<main id="main">
  									<div className="main__inner">
  										<div className="page contact-page">
  											<div className="page__content">
  												{/*<iframe src="https://maps.google.com/maps?q=34.090866,-118.388228&amp;z=15&amp;output=embed" className="google-map"></iframe>*/}
  												<hr className="lsvr-spacer" aria-hidden="true" />
  												<div className="lsvr-grid lsvr-grid--3-cols lsvr-grid--sm-1-cols">
  													<div className="lsvr-grid__col">
  														<div className="lsvr-feature lsvr-feature--has-icon">
  															<div className="lsvr-feature__inner">
  																<span className="lsvr-feature__icon icon-map-marker" aria-hidden="true"></span>
  																<h3 className="lsvr-feature__title">Address</h3>
  																<div className="lsvr-feature__text">
  																	<p>University of Ibadan, Ibadan, Nigeria<br />200222</p>
  																</div>
  															</div>
  														</div>
  													</div>
  													<div className="lsvr-grid__col">
  														<div className="lsvr-feature lsvr-feature--has-icon">
											            <div className="lsvr-feature__inner">
											                <span className="lsvr-feature__icon icon-clock-o" aria-hidden="true"></span>
											                <h3 className="lsvr-feature__title">Opening Hours</h3>
											                <div className="lsvr-feature__text">
											                    <p>Mo. – Fr.: 08am – 09pm<br />
										                    	Sa.: 9am – 8pm<br />
										                    	Su: Closed</p>
											                </div>
											            </div>
  														</div>
  													</div>
  													<div className="lsvr-grid__col">
  														<div className="lsvr-feature lsvr-feature--has-icon">
											            <div className="lsvr-feature__inner">
											                <span className="lsvr-feature__icon icon-phone" aria-hidden="true"></span>
											                <h3 className="lsvr-feature__title">Get In Touch</h3>
											                <div className="lsvr-feature__text">
											                    <p>+(234) 810 013 1944<br />
										                    	info@trilon.ng</p>
											                </div>
											            </div>
  														</div>
  													</div>
  												</div>
  												<hr className="lsvr-separator" aria-hidden="true" />
  												<h3>Make An Enquiry</h3>
  												<form className="lsvr-form lsvr-form--contact lsvr-form--ajax" action="#">
  													<input type="hidden" name="contact-form" value="true" />
  													<input className="lsvr-form__field-input-email" type="text" name="form-email" />
  													<div className="lsvr-form__message lsvr-form__message--validation-error lsvr-alert-message lsvr-alert-message--warning">
  														<span className="lsvr-alert-message__icon" aria-hidden="true"></span>
  														<p>Please make sure all required fields are filled out correctly.</p>
  													</div>
  													<div className="lsvr-form__message lsvr-form__message--connection-error lsvr-alert-message lsvr-alert-message--warning">
  														<span className="lsvr-alert-message__icon" aria-hidden="true"></span>
  														<p>There was a connection error.</p>
  													</div>
  													<div className="lsvr-form__message lsvr-form__message--success lsvr-alert-message lsvr-alert-message--success">
  														<span className="lsvr-alert-message__icon" aria-hidden="true"></span>
  														<p>Message sent successfully!</p>
  													</div>
  													<div className="lsvr-grid lsvr-grid--2-cols lsvr-grid--sm-1-cols">
  														<div className="lsvr-grid__col">
										            <p className="lsvr-form__field">
										                <label className="lsvr-form__field-label" htmlFor="contact-name">Your Name*</label>
										                <input className="lsvr-form__field-input lsvr-form__field-input--text lsvr-form__field-input--required"
										                	type="text" name="contact-name" id="contact-name" />
										            </p>

											        </div>
  														<div className="lsvr-grid__col">
											            <p className="lsvr-form__field">
											                <label className="lsvr-form__field-label" htmlFor="contact-email">Your Email*</label>
											                <input className="lsvr-form__field-input lsvr-form__field-input--text lsvr-form__field-input--email lsvr-form__field-input--required"
											                	type="text" name="contact-email" id="contact-email" />
											            </p>

											        </div>
										        </div>
  													<div className="lsvr-grid lsvr-grid--2-cols lsvr-grid--sm-1-cols">
  														<div className="lsvr-grid__col">
										            <p className="lsvr-form__field">
										                <label className="lsvr-form__field-label" htmlFor="contact-phone">Your Phone</label>
										                <input className="lsvr-form__field-input lsvr-form__field-input--text"
										                	type="text" name="contact-phone" id="contact-phone" />
										            </p>

											        </div>
  														<div className="lsvr-grid__col">
										            <p className="lsvr-form__field">
										                <label className="lsvr-form__field-label" htmlFor="contact-subject">Subject</label>
										                <input className="lsvr-form__field-input lsvr-form__field-input--text"
										                	type="text" name="contact-subject" id="contact-subject" />
										            </p>

											        </div>
										        </div>
								            <p className="lsvr-form__field">
								                <label className="lsvr-form__field-label" htmlFor="contact-message">Message*</label>
								                <textarea className="lsvr-form__field-input lsvr-form__field-input--textarea lsvr-form__field-input--required"
								                	name="contact-message" id="contact-message" cols="40" rows="10"></textarea>
								            </p>
						      	        <p>
										        	<button className="lsvr-button lsvr-form__submit" type="submit" data-loading-label="Sending...">Submit</button>
										        </p>
									      	</form>
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
