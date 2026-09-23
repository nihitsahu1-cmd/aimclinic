import clinicData from "../data/clinicData";

function FloatingActions() {
  const whatsappNumber = clinicData.phone.replace(/\D/g, "");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="floating-actions" aria-label="Quick actions">
      <a
        className="floating-action floating-whatsapp"
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with AIM Clinic on WhatsApp"
        title="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp" aria-hidden="true"></i>
      </a>

      <a
        className="floating-action floating-call"
        href={`tel:${clinicData.phone}`}
        aria-label={`Call AIM Clinic at ${clinicData.phone}`}
        title="Call AIM Clinic"
      >
        <i className="bi bi-telephone-fill" aria-hidden="true"></i>
      </a>

      <button
        type="button"
        className="floating-action floating-scroll"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <i className="bi bi-arrow-up" aria-hidden="true"></i>
      </button>

      <button
        type="button"
        className="floating-action floating-scroll"
        onClick={scrollToBottom}
        aria-label="Scroll to bottom"
        title="Scroll to bottom"
      >
        <i className="bi bi-arrow-down" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default FloatingActions;