import reviews from "../data/reviews";
import "./Review.css";

function Review() {
  return (
    <section id="reviews" className="section-padding">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <span className="section-kicker">PATIENT STORIES</span>
          <h2 className="section-title mt-2">Patient Reviews</h2>
          <p className="muted-text mb-0">
            Kind words from people who trust us with their care.
          </p>
        </div>

        <div className="row g-4">
          {reviews.map((review) => (
            <div className="col-md-6 col-lg-4" key={review.id}>
              <article className="clinic-card review-card h-100 p-4">
                <div
                  className="review-rating mb-3"
                  role="img"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {Array.from({ length: review.rating }, (_, index) => (
                    <i className="bi bi-star-fill" aria-hidden="true" key={index}></i>
                  ))}
                </div>
                <p className="muted-text flex-grow-1 mb-4">
                  <q>{review.text}</q>
                </p>
                <div className="d-flex align-items-center gap-3">
                  <span className="review-avatar" aria-hidden="true">
                    <i className="bi bi-person-fill"></i>
                  </span>
                  <h3 className="review-name mb-0">{review.name}</h3>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Review;