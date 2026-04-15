import React from "react";
import { Link } from "react-router-dom";
import { scriptUnitNumbers } from "../data/listeningScripts";
import { displayUnits } from "../data/listenings";

export default function ListeningScripts() {
  return (
    <div className="listenings-page listening-scripts-page">
      <div className="page-header">
        <h2 className="page-title">Listening Scripts</h2>
        <p className="page-subtitle">
          Read each unit script with clear structure and quick access to matching audio.
        </p>
        <p className="page-subtitle">
          Need audio first?{" "}
          <Link to="/listenings" className="listenings-home-link">
            Open Listening Tracks
          </Link>
        </p>
      </div>

      <div className="units-grid" role="list">
        {displayUnits
          .filter(({ internalUnitId }) => scriptUnitNumbers.includes(internalUnitId))
          .map(({ displayUnitNumber, internalUnitId }) => (
          <Link
            key={internalUnitId}
            to={`/scripts/unit/${internalUnitId}`}
            className="unit-card"
            role="listitem"
            aria-label={`Open script for Unit ${displayUnitNumber}`}
          >
            <div className="unit-number">Unit {displayUnitNumber}</div>
            <div className="unit-arrow" aria-hidden="true">
              →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
