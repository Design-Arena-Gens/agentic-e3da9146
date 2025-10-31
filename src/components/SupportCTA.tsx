import styles from "./SupportCTA.module.css";

export function SupportCTA() {
  return (
    <section id="support" className={styles.section}>
      <div className="inner">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <span className={styles.kicker}>Concierge Support</span>
            <h2>Tailors on standby, wherever you are.</h2>
            <p>
              Chat with a dedicated atelier specialist for live styling
              sessions, fabric consultations, and alteration planning. We will
              coordinate local partners or ship a tailoring kit within 48 hours.
            </p>
            <div className={styles.actions}>
              <a href="mailto:concierge@atelierm.com" className={styles.primary}>
                Email concierge
              </a>
              <a href="tel:+18005550192" className={styles.secondary}>
                +1 (800) 555-0192
              </a>
            </div>
          </div>
          <div className={styles.perks}>
            <div>
              <p>Complimentary returns</p>
              <span>Worldwide pickups within 30 days.</span>
            </div>
            <div>
              <p>Aftercare program</p>
              <span>Pressing, repairs, and re-alterations year-round.</span>
            </div>
            <div>
              <p>Studio appointments</p>
              <span>Book in NYC, London, Lisbon, or virtual.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
