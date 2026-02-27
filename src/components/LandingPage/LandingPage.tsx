import { useState, useEffect } from 'react'
import styles from './LandingPage.module.css'
import brytLogo from '../../assets/415f445ba7129ab4e1ff25d33b2781129c8a6904.png'
import navLogo from '../../assets/35249ccb00c633771376e87b441582f9ba6cde24-removebg-preview.png'
import ceoImage from '../../assets/ceo.png'
import sdsImage from '../../assets/sds.png'
import daImage from '../../assets/da.png'
import {
  ArrowRightIcon,
  BadgeDotIcon,
  CheckShieldIcon,
  FacebookIcon,
  GooglePlayIcon,
  InstagramIcon,
  LocationPinIcon,
  MiniSparkIcon,
  PhoneIcon,
  StarIcon,
  StoreAppleIcon,
  TwitterIcon,
  YouTubeIcon,
  MenuIcon,
  CloseIcon,
  UserIcon,
  DocumentIcon,
  CheckIcon,
  LockIcon,
  EyeIcon,
  ShieldIcon,
  EmailIcon,
  WhatsAppIcon,
} from './icons'

type Feature = {
  title: string
  description: string
  icon: React.ReactNode
}

type Step = {
  number: string
  title: string
  description: string
}

type SafetyCard = {
  title: string
  description: string
}

const features: Feature[] = [
  {
    title: 'Real-Time Matching',
    description:
      'Connect instantly with skilled workers in your area. Our smart matching system finds the perfect fit for your job.',
    icon: <MiniSparkIcon className={styles.featureIcon} aria-hidden="true" />,
  },
  {
    title: 'Verified Workers',
    description:
      'Every worker is thoroughly vetted through our admin verification process for your peace of mind.',
    icon: <CheckShieldIcon className={styles.featureIcon} aria-hidden="true" />,
  },
  {
    title: 'Quick Turnaround',
    description:
      'Get your job faster. Workers can accept and start tasks within minutes of posting.',
    icon: <ArrowRightIcon className={styles.featureIcon} aria-hidden="true" />,
  },
  {
    title: 'Mobile Friendly',
    description:
      'Access BRYT anywhere, anytime. Our platform works seamlessly on web and mobile devices.',
    icon: <PhoneIcon className={styles.featureIcon} aria-hidden="true" />,
  },
  {
    title: 'Rating System',
    description:
      'Access BRYT anywhere, anytime. Our platform works seamlessly on web and mobile devices.',
    icon: <StarIcon className={styles.featureIcon} aria-hidden="true" />,
  },
  {
    title: 'Instant Payments',
    description:
      'Secure and fast payment processing. Workers get paid promptly upon job completion.',
    icon: <BadgeDotIcon className={styles.featureIcon} aria-hidden="true" />,
  },
]

const steps: Step[] = [
  {
    number: '1',
    title: 'Post Your Job',
    description:
      'Describe your task, set your budget, and specify your location. It takes less than 2 minutes.',
  },
  {
    number: '2',
    title: 'Get Matched',
    description:
      'Nearby verified workers receive your request and send their proposals instantly.',
  },
  {
    number: '3',
    title: 'Choose & Confirm',
    description:
      'Review worker profiles, ratings, and quotes. Select the best fit for your job.',
  },
  {
    number: '4',
    title: 'Job Complete',
    description:
      'Payment completes via the app, you review, and payment is released securely.',
  },
]

const safetyCards: SafetyCard[] = [
  {
    title: 'Identity Verification',
    description: 'All workers must provide valid government ID and proof of address.',
  },
  {
    title: 'Background Checks',
    description: 'Comprehensive background screening for criminal records and work history.',
  },
  {
    title: 'Skill Certification',
    description: 'Workers verify their skills through our certification process.',
  },
  {
    title: 'Secure Payments',
    description: 'End-to-end encryption protects all financial transactions.',
  },
  {
    title: '24/7 Monitoring',
    description: 'Our team monitors platform activity to ensure safety.',
  },
  {
    title: 'Insurance Coverage',
    description: 'Jobs are covered by our protection policy for peace of mind.',
  },
]

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const elements = document.querySelectorAll('.anim-el, .anim-el-left, .anim-el-right')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('anim-revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a className={styles.brandLink} href="#home" aria-label="BRYT home" onClick={(e) => handleNavClick(e, '#home')}>
            <img src={navLogo} alt="BRYT" className={styles.brandLogo} />
          </a>

          {/* Desktop Navigation */}
          <nav className={styles.nav} aria-label="Primary">
            <a className={styles.navLink} href="#features" onClick={(e) => handleNavClick(e, '#features')}>
              Features
            </a>
            <a className={styles.navLink} href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')}>
              How it Works
            </a>
            <a className={styles.navLink} href="#trust-safety" onClick={(e) => handleNavClick(e, '#trust-safety')}>
              Trust &amp; Safety
            </a>
            <a className={styles.navLink} href="#about" onClick={(e) => handleNavClick(e, '#about')}>
              About
            </a>
            <a className={styles.navLink} href="#team" onClick={(e) => handleNavClick(e, '#team')}>
              Our Team
            </a>
            <a className={styles.navLink} href="#get-started" onClick={(e) => handleNavClick(e, '#get-started')}>
              Contact
            </a>
          </nav>

          <div className={styles.headerCtas}>
            <a
              className={styles.primaryCta}
              href="https://forms.gle/MxF9KPtLSQDTwo4h7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register as a Worker
            </a>
            <a className={styles.secondaryCta} href="#download" onClick={(e) => handleNavClick(e, '#download')}>
              Download App
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={styles.mobileMenuToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <nav className={styles.mobileNav} aria-label="Mobile primary">
              <a
                className={styles.mobileNavLink}
                href="#features"
                onClick={(e) => handleNavClick(e, '#features')}
              >
                Features
              </a>
              <a
                className={styles.mobileNavLink}
                href="#how-it-works"
                onClick={(e) => handleNavClick(e, '#how-it-works')}
              >
                How it Works
              </a>
              <a
                className={styles.mobileNavLink}
                href="#trust-safety"
                onClick={(e) => handleNavClick(e, '#trust-safety')}
              >
                Trust &amp; Safety
              </a>
              <a
                className={styles.mobileNavLink}
                href="#about"
                onClick={(e) => handleNavClick(e, '#about')}
              >
                About
              </a>
              <a
                className={styles.mobileNavLink}
                href="#team"
                onClick={(e) => handleNavClick(e, '#team')}
              >
                Our Team
              </a>
              <a
                className={styles.mobileNavLink}
                href="#get-started"
                onClick={(e) => handleNavClick(e, '#get-started')}
              >
                Contact
              </a>
              <a
                className={styles.mobileNavLink}
                href="#download"
                onClick={(e) => handleNavClick(e, '#download')}
              >
                Download App
              </a>
              <a
                className={styles.mobileNavLink}
                href="https://forms.gle/MxF9KPtLSQDTwo4h7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register as a Worker
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section className={styles.hero} id="home">
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>
                <BadgeDotIcon className={styles.badgeDot} aria-hidden="true" />
                Now Available in Your Area
              </div>

              <h1 className={styles.heroTitle}>
                Connect with Skilled <span className={styles.heroTitleAccent}>Workers</span>{' '}
                in Real Time
              </h1>

              <p className={styles.heroLead}>
                BRYT bridges the gap between clients and verified skilled workers, Post jobs,
                find talent, and get work done — all in one secure platform.
              </p>

              <div className={styles.storeButtons} id="download">
                <a className={styles.storeButton} href="#" aria-label="Get it on Google Play">
                  <GooglePlayIcon className={styles.storeIcon} aria-hidden="true" />
                  <span className={styles.storeButtonText}>
                    <span className={styles.storeButtonSmall}>GET IT ON</span>
                    <span className={styles.storeButtonLarge}>Google Play</span>
                  </span>
                </a>

                <a className={styles.storeButton} href="#" aria-label="Download on the App Store">
                  <StoreAppleIcon className={styles.storeIcon} aria-hidden="true" />
                  <span className={styles.storeButtonText}>
                    <span className={styles.storeButtonSmall}>Download on the</span>
                    <span className={styles.storeButtonLarge}>App Store</span>
                  </span>
                </a>
              </div>
            </div>

            <div className={styles.heroCardWrap}>
              <article className={styles.jobCard} aria-label="New Job Request">
                <div className={styles.jobCardHeader}>
                  <div>
                    <div className={styles.jobCardLabel}>New Job Request</div>
                    <div className={styles.jobCardDate}>2 min ago</div>
                  </div>
                  <div className={styles.jobCardIcon} aria-hidden="true">
                    <LocationPinIcon className={styles.jobCardIconSvg} />
                  </div>
                </div>

                <div className={styles.jobCardBody}>
                  <div className={styles.jobCardTitle}>Plumbing Repair</div>
                  <div className={styles.jobCardSub}>Kitchen sink replacement needed</div>

                  <div className={styles.jobDetails}>
                    <div className={styles.jobDetail}>
                      <div className={styles.jobDetailKey}>Budget</div>
                      <div className={styles.jobDetailValue}>NGN 10,000</div>
                    </div>
                    <div className={styles.jobDetail}>
                      <div className={styles.jobDetailKey}>Location</div>
                      <div className={styles.jobDetailValue}>2.3 km away</div>
                    </div>
                  </div>

                  <a className={styles.jobAcceptButton} href="#">
                    Accept Job
                  </a>
                </div>
              </article>
            </div>
          </div>

          <div className={`${styles.statsRow} anim-el`} aria-label="Key stats">
            <div className={styles.statCard}>
              <div className={styles.statLabel}>ACTIVE WORKERS</div>
              <div className={styles.statValue}>343,901M</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>JOBS COMPLETED</div>
              <div className={styles.statValue}>55,000+</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>USER RATINGS</div>
              <div className={styles.statValue}>
                4.9 <span className={styles.statStar}>★</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.featuresSection} id="features">
          <div className={styles.sectionInner}>
            <div className={`${styles.sectionHeaderRow} anim-el`}>
              <div className={styles.sectionKicker}>
                <BadgeDotIcon className={styles.kickerDot} aria-hidden="true" />
                Why Choose BRYT
              </div>
              <div className={styles.sectionSplitHeader}>
                <h2 className={styles.sectionTitle}>Everything You Need to Get Work Done</h2>
                <p className={styles.sectionSummary}>
                  A comprehensive platform designed to make hiring skilled workers safe, and
                  efficient.
                </p>
              </div>
            </div>

            <div className={styles.featureGrid}>
              {features.map((feature, i) => (
                <article
                  key={feature.title}
                  className={`${styles.featureCard} anim-el`}
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className={styles.featureIconWrap}>{feature.icon}</div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.howSection} id="how-it-works">
          <div className={styles.sectionInner}>
            <div className={`${styles.centerHeader} anim-el`}>
              <div className={styles.sectionPill}>Simple Process</div>
              <h2 className={styles.centerTitle}>How BRYT Works</h2>
              <p className={styles.centerSummary}>
                From posting job to completion, we’ve made the entire process seamless and
                straightforward
              </p>
            </div>

            <div className={styles.stepsGrid}>
              {steps.map((step, i) => (
                <article
                  key={step.number}
                  className={`${styles.stepCard} anim-el`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className={styles.stepNumber}>{step.number}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.safetySection} id="trust-safety">
          <div className={styles.sectionInner}>
            <div className={styles.safetyGrid}>
              <div className={`${styles.safetyContent} anim-el-left`}>
                <div className={styles.sectionKicker}>
                  <BadgeDotIcon className={styles.kickerDot} aria-hidden="true" />
                  Trust &amp; Safety
                </div>
                <h2 className={styles.sectionTitle}>Your Safety is Our Priority</h2>
                <p className={styles.sectionSummary}>
                  Every worker on BRYT goes through a rigorous verification process. Our admin
                  dashboard ensures only qualified, trustworthy professionals join our platform.
                </p>

                <div className={styles.safetyMetrics}>
                  <div className={styles.metric}>
                    <div className={styles.metricValue}>100%</div>
                    <div className={styles.metricLabel}>Verified Workers</div>
                  </div>
                  <div className={styles.metric}>
                    <div className={styles.metricValue}>99.9%</div>
                    <div className={styles.metricLabel}>Satisfaction Rate</div>
                  </div>
                  <div className={styles.metric}>
                    <div className={styles.metricValue}>0</div>
                    <div className={styles.metricLabel}>Security Incidents</div>
                  </div>
                </div>
              </div>

              <div className={`${styles.safetyCardsContainer} anim-el-right`} aria-label="Safety features">
                {safetyCards.map((card, index) => (
                  <article key={card.title} className={styles.safetyCard}>
                    <div className={styles.safetyCardIcon} aria-hidden="true">
                      {index === 0 && <UserIcon />}
                      {index === 1 && <DocumentIcon />}
                      {index === 2 && <CheckIcon />}
                      {index === 3 && <LockIcon />}
                      {index === 4 && <EyeIcon />}
                      {index === 5 && <ShieldIcon />}
                    </div>
                    <div className={styles.safetyCardTitle}>{card.title}</div>
                    <div className={styles.safetyCardDescription}>{card.description}</div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>


        <section className={styles.aboutIntroSection} id="about">
          <div className={styles.sectionInner}>
            <div className={styles.aboutIntroGrid}>
              <div className={styles.aboutIntroContent}>
                <div className={styles.aboutIntroBrand}>
                  <span className={styles.aboutIntroBrandPrefix}>At</span>{' '}
                  <span className={styles.aboutIntroBrandName}>BRYT</span>
                </div>

                <h2 className={styles.aboutIntroTitle}>
                  We are Passionate <br />
                  about Transforming <br />
                  <span className={styles.aboutIntroTitleAccent}>Lives,</span> Businesses.
                </h2>

                <p className={styles.aboutIntroSummary}>
                  As we guide businesses towards a seamless digital future, we remain steadfast in
                  our commitment to embracing ease at every step of the journey.
                </p>
              </div>

              <div className={styles.aboutIntroCard}>
                <article className={styles.jobCard} aria-label="New Job Request">
                  <div className={styles.jobCardHeader}>
                    <div>
                      <div className={styles.jobCardLabel}>New Job Request</div>
                      <div className={styles.jobCardDate}>2 min ago</div>
                    </div>
                    <div className={styles.jobCardIcon} aria-hidden="true">
                      <LocationPinIcon className={styles.jobCardIconSvg} />
                    </div>
                  </div>

                  <div className={styles.jobCardBody}>
                    <div className={styles.jobCardTitle}>Plumbing Repair</div>
                    <div className={styles.jobCardSub}>Kitchen sink replacement needed</div>

                    <div className={styles.jobDetails}>
                      <div className={styles.jobDetail}>
                        <div className={styles.jobDetailKey}>Budget</div>
                        <div className={styles.jobDetailValue}>NGN 10,000</div>
                      </div>
                      <div className={styles.jobDetail}>
                        <div className={styles.jobDetailKey}>Location</div>
                        <div className={styles.jobDetailValue}>2.3 km away</div>
                      </div>
                    </div>

                    <a className={styles.jobAcceptButton} href="#">
                      Accept Job
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.aboutPillarsSection} aria-label="Vision mission values">
          <div className={styles.sectionInner}>
            <div className={styles.aboutPillarsGrid}>
              <div className={styles.aboutPillarsLeft}>
                <div className={styles.aboutPillarsHeader}>
                  <MiniSparkIcon className={styles.aboutPillarsIcon} aria-hidden="true" />
                  <div className={styles.aboutPillarsTitle}>Our Vision</div>
                </div>
                <p className={styles.aboutPillarsText}>
                  To lead in innovative home service solutions, creating a society where
                  individuals and businesses enjoy stress-free, efficient, and reliable everyday
                  living
                </p>
                <img src={brytLogo} alt="BRYT" className={styles.aboutPillarsLogo} />
              </div>

              <div className={styles.aboutPillarsRight}>
                <div className={styles.aboutPillarsBlock}>
                  <div className={styles.aboutPillarsHeader}>
                    <MiniSparkIcon className={styles.aboutPillarsIcon} aria-hidden="true" />
                    <div className={styles.aboutPillarsTitle}>Our Mission</div>
                  </div>
                  <p className={styles.aboutPillarsText}>
                    Our mission is to simplify home and business maintenance by delivering reliable,
                    efficient, and stress-free plumbing, electrical, and essential services.
                  </p>
                </div>

                <div className={styles.aboutPillarsBlock}>
                  <div className={styles.aboutPillarsHeader}>
                    <MiniSparkIcon className={styles.aboutPillarsIcon} aria-hidden="true" />
                    <div className={styles.aboutPillarsTitle}>Our Values</div>
                  </div>
                  <p className={styles.aboutPillarsText}>Innovation, Collaboration, Excellence (ICE).</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.coreTeamSection} id="team" aria-label="Core team">
          <div className={styles.sectionInner}>
            <div className={styles.coreTeamHeader}>
              <h2 className={styles.coreTeamTitle}>Meet Our Core Team!</h2>
              <div className={styles.coreTeamSummary}>Here are the innovators shaping our journey.</div>
            </div>

            <div className={styles.coreTeamGrid}>
              <article className={styles.teamMemberCard}>
                <img
                  className={styles.teamMemberPhoto}
                  src={ceoImage}
                  alt="Akinyemi Babatunde Abba"
                />
                <div className={styles.teamMemberName}>Akinyemi Babatunde Abba</div>
                <div className={styles.teamMemberRole}>CEO</div>
              </article>

              <article className={styles.teamMemberCard}>
                <img
                  className={styles.teamMemberPhoto}
                  src={sdsImage}
                  alt="Azizi Abidemi Khadijat"
                />
                <div className={styles.teamMemberName}>Azizi Abidemi Khadijat</div>
                <div className={styles.teamMemberRole}>COO</div>
              </article>

              <article className={styles.teamMemberCard}>
                <img
                  className={styles.teamMemberPhoto}
                  src={daImage}
                  alt="Akinyemi Daniel Oluwalana"
                />
                <div className={styles.teamMemberName}>Akinyemi Daniel Oluwalana</div>
                <div className={styles.teamMemberRole}>CTO</div>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.joinTeamSection} aria-label="Join the team">
          <div className={styles.sectionInner}>
            <div className={styles.joinTeamCard}>
              <h2 className={styles.joinTeamTitle}>Wish to join our team of innovators?</h2>
              <p className={styles.joinTeamText}>
                At BRYT we are constantly on a lookout for amazing talents to join our collaborative
                teams. Ready to join our innovators?
              </p>
              <a className={styles.joinTeamButton} href="#get-started">
                Get Started
              </a>
            </div>
          </div>
        </section>

        <section className={styles.contactSection} id="get-started" aria-label="Contact info">
          <div className={styles.sectionInner}>
            <div className={styles.contactActions} aria-label="Contact actions">
              <a className={styles.contactActionPrimary} href="#">
                Request Quote
              </a>
              <a
                className={styles.contactActionSecondary}
                href="https://wa.me/2349041944327"
                target="_blank"
                rel="noopener noreferrer"
              >
                Whatsapp Us
              </a>
            </div>

            <h2 className={styles.contactTitle}>Contact Info</h2>

            <div className={styles.contactGrid}>
              <a
                className={styles.contactCard}
                href="https://wa.me/2349041944327"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <PhoneIcon className={styles.contactCardIcon} aria-hidden="true" />
                <div className={styles.contactCardBody}>
                  <div className={styles.contactCardLabel}>Call Us</div>
                  <div className={styles.contactCardValue}>09041944327</div>
                </div>
              </a>

              <a
                className={styles.contactCard}
                href="mailto:hello@brytgmail.com"
                aria-label="Send an email"
              >
                <EmailIcon className={styles.contactCardIcon} aria-hidden="true" />
                <div className={styles.contactCardBody}>
                  <div className={styles.contactCardLabel}>Email Us</div>
                  <div className={styles.contactCardValue}>hello@brytgmail.com</div>
                </div>
              </a>

              <a
                className={styles.contactCard}
                href="https://maps.google.com/?q=Road+13+Lekki+Scheme+2+Ogombo+Road+Abraham+Adesanya+Bus+Stop+Ajah+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open in Google Maps"
              >
                <LocationPinIcon className={styles.contactCardIcon} aria-hidden="true" />
                <div className={styles.contactCardBody}>
                  <div className={styles.contactCardLabel}>Address</div>
                  <div className={styles.contactCardValue}>
                    Road 13 lekki scheme 2 ogombo road, Abraham Adesanya bus stop, Ajah Lagos.
                  </div>
                </div>
              </a>

              <a
                className={styles.contactCard}
                href="https://wa.me/2349041944327"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className={styles.contactCardIcon} aria-hidden="true" />
                <div className={styles.contactCardBody}>
                  <div className={styles.contactCardLabel}>Whatsapp</div>
                  <div className={styles.contactCardValue}>Tap to send us a message via Whatsapp</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.sectionInner}>
            <div className={`${styles.ctaCard} anim-el`}>
              <img src={brytLogo} alt="BRYT" className={styles.ctaLogo} />
              <h2 className={styles.ctaTitle}>
                Ready to Transform How You <br />
                Find Work or Hire Talent?
              </h2>
              <p className={styles.ctaSummary}>
                Join thousands of satisfied users who have already discovered the easiest way to
                connect with skilled workers or find that next job.
              </p>

              <div className={styles.ctaButtons}>
                <a className={styles.ctaButtonPrimary} href="#">
                  I want to Work
                </a>
                <a className={styles.ctaButtonSecondary} href="#">
                  I Need a Worker
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div className={styles.footerBrand}>
              <img src={brytLogo} alt="BRYT" className={styles.footerLogo} />
              <p className={styles.footerDescription}>
                Connecting skilled workers with clients in real time. Building a trusted marketplace
                for service exchange.
              </p>
              <div className={styles.socialRow} aria-label="Social links">
                <a className={styles.socialIconLink} href="#" aria-label="Instagram">
                  <InstagramIcon className={styles.socialIcon} aria-hidden="true" />
                </a>
                <a className={styles.socialIconLink} href="#" aria-label="Facebook">
                  <FacebookIcon className={styles.socialIcon} aria-hidden="true" />
                </a>
                <a className={styles.socialIconLink} href="#" aria-label="Twitter">
                  <TwitterIcon className={styles.socialIcon} aria-hidden="true" />
                </a>
                <a className={styles.socialIconLink} href="#" aria-label="YouTube">
                  <YouTubeIcon className={styles.socialIcon} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className={styles.footerColumns}>
              <div className={styles.footerCol}>
                <div className={styles.footerColTitle}>Menu</div>
                <a className={styles.footerLink} href="#home">
                  Home
                </a>
                <a className={styles.footerLink} href="#about">
                  About Us
                </a>
                <a className={styles.footerLink} href="#features">
                  Features
                </a>
                <a className={styles.footerLink} href="#how-it-works">
                  How it Works
                </a>
                <a className={styles.footerLink} href="#download">
                  Download
                </a>
              </div>

              <div className={styles.footerCol}>
                <div className={styles.footerColTitle}>Support</div>
                <a className={styles.footerLink} href="#team">
                  Our Team
                </a>
                <a className={styles.footerLink} href="#get-started">
                  Contact Support
                </a>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>BRYT © All Rights Reserved, 2026.</div>
        </footer>
      </main>
    </div>
  )
}
