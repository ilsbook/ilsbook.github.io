import React from "react";
import { Link } from "react-router-dom";
import { BOOK_TITLE } from "../constants/bookMeta";

const RESEARCH_INTERESTS = [
  "Linguistics",
  "Lexicology",
  "Linguaculturology",
  "Large Language Models (LLMs)",
  "Natural Language Processing (NLP)",
  "Integration of Ethical AI in ELT",
];

export default function AboutAuthor() {
  return (
    <div className="about-page">
      <div className="page-header">
        <h2 className="page-title">About the Author</h2>
        <p className="page-subtitle">Author of {BOOK_TITLE}</p>
      </div>

      <article
        className="about-content author-profile"
        aria-labelledby="about-author-heading"
      >
        <header className="author-masthead" id="about-author-heading">
          <p className="author-masthead__name">Dr. Sevinj Aghahuseyn Hasanova</p>
          <p className="author-masthead__affiliation">
            Associate Professor · Department of English Lexicology · Azerbaijan University of
            Languages
          </p>
          <div className="author-masthead__actions">
            <a
              href="https://scholar.google.com/citations?user=OIcH4IgAAAAJ&hl=ru"
              target="_blank"
              rel="noopener noreferrer"
              className="scholar-link scholar-link--masthead"
              aria-label="View author's Google Scholar profile"
            >
              <svg
                className="scholar-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"
                  fill="#4285F4"
                />
              </svg>
              <span>Google Scholar</span>
            </a>
          </div>
        </header>

        <div className="author-bio">
          <section className="author-bio__section author-bio__section--lead" aria-label="Biography">
            <p>
              Sevinj Hasanova is an Associate Professor at the Department of English Lexicology at
              the Azerbaijan University of Languages. She was born on October 8, 1982, in Baku,
              Azerbaijan.
            </p>
          </section>

          <section className="author-bio__section">
            <h3 className="author-bio__heading">Education</h3>
            <p>
              Dr. Hasanova holds a PhD in Philology (2016) from the Azerbaijan University of
              Languages, where she defended her dissertation entitled &ldquo;The Communicative
              Aspect of Literary Text as a Unit of Culture.&rdquo; She also completed her MA (2006)
              and BA (2003) degrees in English Language at the same institution, graduating with
              highest honours (GPA 4.0) in both programs.
            </p>
          </section>

          <section className="author-bio__section">
            <h3 className="author-bio__heading">Teaching</h3>
            <p>
              She has been actively engaged in teaching and academic work since 2007, beginning her
              career as an instructor at the university&apos;s TOEFL IBT Centre. Since 2008, she
              has served as a lecturer in the Department of English Lexicology, where she was
              promoted to Senior Lecturer in 2015 and appointed as an internal Associate Professor
              in 2024. Throughout her career, she has taught a wide range of courses, including
              Practical English, Stylistics, Academic Writing, and advanced communication-focused
              subjects.
            </p>
          </section>

          <section className="author-bio__section">
            <h3 className="author-bio__heading">Academic service and leadership</h3>
            <p>
              In addition to her teaching responsibilities, Dr. Hasanova has held several important
              academic and administrative roles. Since 2019, she has served as the Head of the
              Language Skills discipline and is a certified specialist in online and distance
              education. She is also a member of the Oral Speech Examination Commission (since 2024)
              and the Teacher Attestation Commission (since 2025). In 2013, she represented the
              Azerbaijan University of Languages on the Expert Council of the State Program on
              Education Abroad.
            </p>
          </section>

          <section className="author-bio__section">
            <h3 className="author-bio__heading">Scholarship and professional development</h3>
            <p>
              Dr. Hasanova has participated in numerous local and international training programs and
              conferences. She is the author of 25 scientific articles and 10 conference papers,
              published in both local and international academic journals.
            </p>
          </section>

          <section className="author-bio__section">
            <h3 className="author-bio__heading">Research interests</h3>
            <ul className="author-research-list">
              {RESEARCH_INTERESTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <footer className="about-footer-nav">
          <Link to="/listenings" className="about-footer-nav__link about-footer-nav__link--secondary">
            ← Listening exercises
          </Link>
          <Link to="/about/book" className="about-footer-nav__link">
            About the book →
          </Link>
        </footer>
      </article>
    </div>
  );
}
