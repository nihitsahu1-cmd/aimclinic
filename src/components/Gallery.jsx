function Gallery() {
  const galleryItems = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery.jpg",
  ];

  return (
    <section id="gallery" className="section-padding">
      <div className="container">

        {/* Section Heading */}
        <div className="section-heading text-center mb-5">
          <p className="section-kicker">
            CLINIC GALLERY
          </p>

          <h2 className="section-title">
            A look inside AIM Multispeciality Clinic
          </h2>

          <p className="text-muted">
            Care, comfort, and a welcoming environment.
          </p>
        </div>

        {/* Gallery */}
        <div className="row g-3">
          {galleryItems.map((image, index) => (
            <div
              className="col-6 col-lg-4"
              key={index}
            >
              <div className="gallery-item">
                <img
                  src={image}
                  alt={`AIM Multispeciality Clinic ${index + 1}`}
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;