
import clinicData from "../data/clinicData";

function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">

        <div className="row align-items-center g-5">

          {/* Left Side */}
          <div className="col-lg-6">

            <div className="row g-3">

              {/* Clinic Building Image */}
              <div className="col-6">
                <div className="about-image-box slide-up">
                  <img
                    src="/clinic1.jpg"
                    alt="AIM Clinic building and reception"
                    className="img-fluid rounded"
                  />
                </div>
              </div>

              {/* Clinic 1 Image */}
              <div className="col-6">
                <div className="about-image-box slide-up">
                  <img
                    src="/clinic.jpg"
                    alt="AIM Clinic"
                    className="img-fluid rounded"
                  />
                </div>
              </div>

            </div>

            {/* Clinic Information */}
            <div className="about-image-caption mt-3">
              <i className="bi bi-hospital me-2"></i>

              <span>
                <strong>{clinicData.clinicName}</strong>
                <small>Care you can count on</small>
              </span>
            </div>

            <h4 className="fw-bold mt-3">
              {clinicData.clinicName}
            </h4>

            <p className="mb-0">
              Quality Healthcare
            </p>

          </div>


          {/* Right Side */}
          <div className="col-lg-6">

            <span className="section-kicker">
              ABOUT OUR CLINIC
            </span>

            <h2 className="fw-bold mt-2">
              {clinicData.about.title}
            </h2>

            <p className="muted-text mt-3">
              {clinicData.about.description}
            </p>

            {/* Features */}
            <div className="row mt-4">

              {clinicData.about.points.map((point, index) => (
                <div
                  className="col-md-6 mb-3"
                  key={index}
                >
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>

                    <span className="fw-semibold">
                      {point}
                    </span>
                  </div>
                </div>
              ))}

            </div>

            {/* Button */}
            <a
              href="#appointment"
              className="btn btn-primary mt-3"
            >
              <i className="bi bi-calendar-check me-2"></i>
              Book Appointment
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;

