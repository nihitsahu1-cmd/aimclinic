import clinicData from "../data/clinicData";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center hero-row">

          {/* Left Content */}
          <div className="col-lg-6 hero-content fade-in">
            <div className="hero-badge mb-4">
              <i className="bi bi-shield-check-fill me-2"></i>
              Trusted Healthcare
            </div>

            <h1 className="hero-title">
              Your Health{" "}
              <span>Our Priority</span>
            </h1>

            <p className="hero-description">
              Compassionate care, experienced doctors, and modern medical
              support — all in one comfortable clinic close to you.
            </p>

            <div className="hero-actions mt-4">
              <a
                href="#appointment"
                className="btn hero-btn-primary"
              >
                <i className="bi bi-calendar-check me-2"></i>
                Book Appointment
              </a>

              <a
                href={`tel:${clinicData.phone}`}
                className="btn hero-btn-outline"
              >
                <i className="bi bi-telephone-fill me-2"></i>
                Call Now
              </a>
            </div>

            {/* Small Trust Points */}
            <div className="hero-features mt-5">
              <div>
                <i className="bi bi-check-circle-fill"></i>
                <span>Experienced Doctors</span>
              </div>

              <div>
                <i className="bi bi-check-circle-fill"></i>
                <span>Modern Facilities</span>
              </div>

              <div>
                <i className="bi bi-check-circle-fill"></i>
                <span>Patient-first Care</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6 hero-media text-center mt-5 mt-lg-0">
            <div className="hero-visual">

              {/* Decorative shapes */}
              <div className="hero-circle circle-one"></div>
              <div className="hero-circle circle-two"></div>

              <div className="hero-image-box slide-up">
                <img
                  src="/patient1.jpg"
                  alt="Doctor providing a patient consultation"
                  className="hero-image"
                />

                {/* Floating Trust Card */}
                <div className="hero-trust-card">
                  <div className="trust-icon">
                    <i className="bi bi-heart-pulse-fill"></i>
                  </div>

                  <div>
                    <strong>Patient-first care</strong>
                    <small>Here when you need us</small>
                  </div>
                </div>

                {/* Experience Card */}
                <div className="hero-experience-card">
                  <i className="bi bi-award-fill"></i>
                  <div>
                    <strong>Quality Care</strong>
                    <small>For every patient</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency */}
            <div className="emergency-line">
              <span className="emergency-icon">
                <i className="bi bi-telephone-outbound-fill"></i>
              </span>

              <span>
                Emergency care:{" "}
                <a href={`tel:${clinicData.emergency}`}>
                  {clinicData.emergency}
                </a>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
