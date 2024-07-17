import React, { Component } from "react";

class Theme extends Component {
  render() {
    return (
      <div id="call" className="target">
        <div className="container">
          <h1 className="mb-3 green-heading">Call for Paper</h1>
          <p>
            IEEE AKGEC 2024 extends an invitation to academicians, researchers,
            practitioners, and students from across the globe to submit original
            papers that have not been previously published for potential
            presentation at the conference. All submitted papers will undergo
            peer review via the provided Paper Submission Link. The submission
            guidelines include a maximum limit of six pages, inclusive of
            figures and references. All submissions will undergo a plagiarism
            check and papers with similarity scores of 15% or higher may be
            subject to rejection without further review. All the accepted and
            presented papers will be submitted to IEEE Xplore subject to the
            fulfilment of the IEEE standards.
          </p>

          {/* <p>The focus area and tracks of the conference would be:</p>
          <p>
            <span className="bold-text">Track 1:</span> Green Energy, Electric
            Drives and Smart Grid
            <br />
            <span className="bold-text">Track 2:</span> Computing and Security
            <br />
            <span className="bold-text">Track 3:</span> Sustainable Technologies
            and Development
            <br />
            <span className="bold-text">Track 4:</span> Artificial Intelligence
            and Embedded Systems
          </p> */}
          <div>
            <p>
              Template for Paper Submission: &ensp;
              <p className="red-heading">
                <a
                  href="https://www.ieee.org/conferences/publishing/templates.html"
                  target="_blank"
                  rel="noreferrer"
                  download
                >
                  Template
                </a>
              </p>
            </p>
            <p>
              To submit the paper click on the link: &ensp;
              <p className="red-heading">
                {" "}
                <a
                  href="https://cmt3.research.microsoft.com/AKGEC2024"
                  target="_blank"
                  rel="noreferrer"
                >
                  Submission Link
                </a>
              </p>
            </p>
            <i>
              Prospective authors are invited to submit a maximum of 6 pages
              full paper on the following tracks (but not limited to):
            </i>
            {/* <p>
              Guidelines for authors{" "}
              <span style={{ fontWeight: "normal" }}>
                (For complete details, refer:{" "}
                <a
                  style={{ fontStyle: "italic" }}
                  href="https://publishingsupport.iopscience.iop.org/author-guidelines-for-conference-proceedings/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Author guidelines for conference proceedings - IOPscience -
                  Publishing Support{" "}
                </a>
                ){" "}
              </span>
            </p> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Theme;
