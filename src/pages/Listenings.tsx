import React from "react";
import { Link } from "react-router-dom";
import { displayUnits } from "../data/listenings";

export default function Listenings() {
  return (
    <div className="listenings-page">
      <div className="page-header">
        <h2 className="page-title">Listening Tracks</h2>
        <p className="page-subtitle">
          <Link to="/" className="listenings-home-link">
            Welcome page
          </Link>
          <span className="page-subtitle__sep" aria-hidden="true">
            {" "}
            ·{" "}
          </span>
          Select a unit to begin
        </p>
        <p className="page-subtitle">
          Looking for text versions?{" "}
          <Link to="/listening-scripts" className="listenings-home-link">
            Open Listening Scripts
          </Link>
        </p>
        <div className="listenings-download-wrap">
          <a
            href="/listenings/listening-tracks-all.zip"
            className="listenings-download-btn"
            download="ilsbook-listening-tracks-all.zip"
          >
            Download all listening tracks (.zip)
          </a>
          <p className="listenings-download-note">
            For offline use: one ZIP file with all Unit 1-12 listening tracks.
          </p>
        </div>
      </div>

      <div className="units-grid" role="list">
        {displayUnits.map(({ displayUnitNumber, internalUnitId }) => (
          <Link
            key={internalUnitId}
            to={`/unit/${internalUnitId}`}
            className="unit-card"
            role="listitem"
            aria-label={`Unit ${displayUnitNumber}`}
          >
            <div className="unit-number">Unit {displayUnitNumber}</div>
            <div className="unit-arrow" aria-hidden="true">→</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

