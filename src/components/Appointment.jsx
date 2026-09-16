import clinicData from "../data/clinicData";

function Appointment() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const fullName = form.fullName.value;
    const mobile = form.mobile.value;
    const email = form.email.value;
    const department = form.department.value;
    const doctor = form.doctor.value;
    const date = form.date.value;
    const message = form.message.value;

    const whatsappNumber = "917266903708"; // <-- Apna WhatsApp number yahan daalo

    const whatsappMessage = `
🏥 *New Appointment Request*

👤 *Name:* ${fullName}
📱 *Mobile:* ${mobile}
📧 *Email:* ${email || "Not provided"}
🩺 *Department:* ${department}
👨‍⚕️ *Preferred Doctor:* ${doctor || "Not specified"}
📅 *Appointment Date:* ${date}

💬 *Message:*
${message || "No message"}
    `;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="appointment" className="section-padding tinted-section">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <span className="section-kicker">YOUR NEXT STEP</span>
          <h2 className="section-title mt-2">Book an appointment</h2>
          <p className="muted-text">
            Tell us what you need and we will help arrange your visit.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-9">
            <div className="clinic-card p-4 p-md-5">

              <form onSubmit={handleSubmit}>
                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="fullName">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      className="form-control"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="mobile">
                      Mobile Number
                    </label>
                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      className="form-control"
                      placeholder="Enter mobile number"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Enter email address"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="department">
                      Department
                    </label>

                    <select
                      id="department"
                      name="department"
                      className="form-select"
                      required
                    >
                      <option value="">Select department</option>

                      {clinicData.services.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="doctor">
                      Preferred Doctor
                    </label>

                    <select
                      id="doctor"
                      name="doctor"
                      className="form-select"
                    >
                      <option value="">Select doctor</option>

                      {clinicData.doctors.map((doctor) => (
                        <option key={doctor.id} value={doctor.name}>
                          {doctor.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="date">
                      Appointment Date
                    </label>

                    <input
                      id="date"
                      name="date"
                      type="date"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label" htmlFor="message">
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows="4"
                      placeholder="Tell us how we can help"
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 py-3"
                    >
                      <i className="bi bi-whatsapp me-2"></i>
                      Request Appointment on WhatsApp
                    </button>

                    <p className="form-note text-center mt-3 mb-0">
                      <i className="bi bi-info-circle me-1"></i>
                      Our clinic team will contact you to confirm your
                      appointment.
                    </p>
                  </div>

                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Appointment;