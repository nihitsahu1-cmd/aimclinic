import clinicData from "../data/clinicData";

function Facilities() {
  const facilityImages = [
    "/modern.jpg",
    "/modern2.jpg",
    "/emergency.jpg",
    "/digital.jpg",
  ];

  return (
    <section id="facilities" className="section-padding tinted-section">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <span className="section-kicker">
            OUR CLINIC FACILITIES
          </span>

          <h2 className="section-title mt-2">
            A comfortable care experience
          </h2>

          <p className="muted-text">
            Thoughtful facilities designed to make every visit comfortable
            and convenient.
          </p>
        </div>

        <div className="row g-4">
          {clinicData.facilities.map((facility, index) => (
            <div
              className="col-sm-6 col-lg-3"
              key={facility.id}
            >
              <div className="facility-card h-100 overflow-hidden">

                {/* Facility Image */}
                <div className="facility-image">
                  <img
                    src={facilityImages[index]}
                    alt={facility.title}
                    className="img-fluid w-100"
                    loading="lazy"
                  />
                </div>

                {/* Facility Content */}
                <div className="facility-content">
                  <div className="facility-icon">
                    <i className={`bi ${facility.icon}`}></i>
                  </div>

                  <h3>{facility.title}</h3>

                  <p className="muted-text mb-0">
                    {facility.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facilities;