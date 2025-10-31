import styles from "./FitMatrix.module.css";

const fitTiers = [
  {
    name: "Streamlined Slim",
    rise: "Medium rise",
    leg: "Tapered leg opening",
    bestFor: "Lean to athletic builds seeking a sharp profile.",
  },
  {
    name: "Tailored Taper",
    rise: "Mid-high rise",
    leg: "Subtle taper through calf",
    bestFor: "Modern office uniform; balances structure with motion.",
  },
  {
    name: "Heritage Straight",
    rise: "Traditional rise",
    leg: "Straight knee to hem",
    bestFor: "Classicists who favor timeless lines and cuffed hems.",
  },
  {
    name: "Relaxed Taper",
    rise: "Mid rise",
    leg: "Ease through thigh, tapered hem",
    bestFor: "Weekend versatility with lounge-level comfort.",
  },
];

export function FitMatrix() {
  return (
    <section id="fit" className={styles.section}>
      <div className="inner">
        <div className={styles.wrapper}>
          <div className={styles.intro}>
            <p className="section-title">Find your Atelier fit</p>
            <p className="section-subtitle">
              Our master tailors calibrate each pattern block, then layer in micro
              stretch zones and articulated seams. Booking a virtual fitting unlocks
              complimentary alteration support worldwide.
            </p>
            <div className={styles.cta}>
              <a href="#support">Reserve virtual fitting</a>
              <span>Average session 20 minutes · Tailor follow-up included</span>
            </div>
          </div>
          <div className={styles.table}>
            {fitTiers.map((fit) => (
              <div key={fit.name} className={styles.row}>
                <div>
                  <p className={styles.fitName}>{fit.name}</p>
                  <span>{fit.bestFor}</span>
                </div>
                <div>
                  <p className={styles.label}>Rise</p>
                  <span>{fit.rise}</span>
                </div>
                <div>
                  <p className={styles.label}>Leg</p>
                  <span>{fit.leg}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
