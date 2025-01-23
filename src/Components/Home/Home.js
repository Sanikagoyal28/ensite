import React, { Component } from "react";
import poster from "../../assets/desktop1.jpg";
import previous from "../../assets/previous.png";
import posterMob from "../../assets/mobile1.jpg";
import template2024 from "../../assets/files/AKGEC_2024_Template.pptx";

class Home extends Component {
  render() {
    return (
      <div id="home">
        {/* <div className="d-flex container pt-5 justify-content-between">
            <div>
                <img src={logopath} class="nayi"/>
                <div id="bg-green" className="d-inline-block p-2 mt-3">
                INTERNATIONAL CONFERENCE on
                </div>
                <h5 className="greytext mt-2 ">Advancements and Key Challenges in</h5>
                <h2 className="text-uppercase greenhead bold-text display-4">Green Energy<br/>and Computing</h2>
                <Calendar/> <h5 className="greytext d-inline m-auto">24-25 Feb 2023</h5>
            </div>
            <div className="w-50 d-flex deskicon" ><Desktop className="d-inline-block w-50 m-auto"/></div>
</div> */}

        <img src={poster} className="posterHome" alt="poster"></img>
        <img src={posterMob} className="posterHomeMob" alt="poster"></img>

        {/* <div className="container mt-4">
            <Desktop className="w-50 mobicon"/>
            </div> */}

        <div id="date" className="target mt-3">
          <div className="container">
            <h1 className="mb-3 green-heading">
              Date and Venue of the Conference
            </h1>
            <p>
            The conference AGECCT2K26 hosted by Department of Electronics and Communication Engineering, will be held offline at AKGEC, Ghaziabad, Uttar Pradesh, India from February 13-14, 2026. The conference will include regular sessions with poster/oral presentations, global and technical sessions, panel discussions and poster presentations organized in AKGEC. The conference is Technically Sponsored by IEEE UP Section.
            {" "}
            </p>
          </div>
        </div>

        <div id="theme" className="target">
          <div className="container mb-3">
            <h1 className="mb-3 green-heading">Important Dates</h1>
            <p>
              <span className="bold-text">Last date of abstract submission:  </span> August 18, 2025
              <br />
              <span className="bold-text">
                Full Paper Submission:
              </span>
              <span className="ms-2 text-danger fw-bold">September 20, 2025</span><br />
              <span className="bold-text">
                Notification of Acceptance :{" "}
              </span>
              <span className="text-danger fw-bold"> December 16, 2025
              {" "}</span>
              <br />
              <span className="bold-text">Registration and final paper submission of accepted Paper: </span>January 10, 2026
              <br />
              <span className="bold-text">Conference Date: </span>February 13-14, 2026

              <br />
            </p>
          </div>
        </div>


        <div class="bg-success p-3 d-flex align-items-center" style={{ minheight: 150 }}>
          <div class="container">
            <div class="row row-cols-1 row-cols-md-6 g-2 align-items-center">
              <div class="col d-flex justify-content-center">
                <a href="https://drive.google.com/file/d/1RDyjE_lPM4USfcNRIA1Afz7GuxrFQxv2/view?usp=drive_link" download class="btn btn-light w-100">Conference Schedule</a>
              </div>
              <div class="col d-flex justify-content-center">
                <a href={template2024} download class="btn btn-light w-100">Presentation Template</a>
              </div>

              <div class="col d-flex justify-content-center">
                <a href="https://drive.google.com/file/d/1tsGpfD9eAvpf-obSqKZU0WuFKjVd7iSj/view?usp=drive_link" target="_self" class="btn btn-light w-100">IEEE SIGHT Activity Registration</a>
              </div>
              <div class="col d-flex justify-content-center">
                <a href="https://drive.google.com/file/d/16vU5i_-8u1zpz7aU8KdKYytxO37nMl17/view?usp=drive_link" target="_self" class="btn btn-light w-100">SIGHT Template</a>
              </div>
              <div class="col d-flex justify-content-center">
                <a href="https://drive.google.com/file/d/1IR4-0w43GRDdhhxJ_E1xEEPF03fVIVwA/view?usp=drive_link" target="_self" class="btn btn-light w-100">Tutorial Session Registration</a>
              </div>
              <div class="col d-flex justify-content-center">
                <a href="https://drive.google.com/file/d/1w-yZnvm-jMVaFtM9AsGmlf0xjZZUQnWZ/view?usp=drive_link" target="_self" class="btn btn-light w-100">WIE Meet & Greet Registration</a>
              </div>
            </div>
          </div>
        </div>




        {/* <div className="judgesImg">
          <img src={judges} alt="judges" />
        </div> */}
        <div id="date" className="target mt-3">
          <div className="container">
            <h1 className="mb-3 green-heading">
              About the 1st International Conference AKGEC 2023
            </h1>
            <div className="prevImg">
              <img src={previous} alt="judges" />
            </div>
            <p>
              The first conference on &quot;Advancements and Challenges in Green
              Energy and Computing&quot; was organized by the Department of
              Electrical &amp; Electronics Engineering at Ajay Kumar Garg
              Engineering College (AKGEC) on 24-25 February 2023. The prime
              objective of the conference was to bring together researchers,
              scientists, students, and industry professionals to discuss
              innovative ideas, opportunities, challenges, advancements, and
              research results in the fields of Green Energy, Computing and
              Security, Sustainable Development, Artificial Intelligence, and
              Embedded Systems on an international premier forum. Green Energy,
              Electric Drives and Smart Grid, Computing and Security,
              Sustainable Technology and Development, and Artificial
              Intelligence were the four tracks of the conference.
            </p>
            <p>
              The conference received an overwhelming response with over 205
              entries under 4 tracks. All the papers were blind peer-reviewed by
              our esteemed reviewers from across the globe. After a rigorous
              review process, 71 papers have been finalized and presented under
              various tracks of the conference in two days. The program flow of
              the conference included various sessions, viz, the inaugural
              program, keynote addresses, oral and poster paper presentations,
              panel discussions, and the valedictory program.
            </p>
            <p>
              The conference was inaugurated in the benign presence of Prof.
              Bhim Singh, IIT Delhi, as the Chief Guest, Mr. Sudhanshu Sekhar
              Barpanda, Director (MO), Grid Controller of India, as the Guest of
              Honour, Mr. Meenu Singhal, RMD, Socomac, as the inaugural keynote,
              and Dr. R. K. Agarwal, Director General, AKGEC.
            </p>
            <p>
              The keynote speakers from India and abroad included Dr. Sanjeet
              Dwivedi, Senior Project Manager from Everfuel, Denmark, Prof.
              Akshay Rathore from SIT Singapore, Ms. Shivi Jindal, RSM from
              Fronius, and Mr. Sumit Tiwari from SNU who shared their insights
              on various topics related to green energy and computing.
            </p>
            <p>
              The conference also included a panel discussion on &quot;Threats
              and Opportunities for the Adoption of Green Energy&quot; under the
              presence of expert panelists: Prof. Prerna Gaur, Director NSUT
              West Campus, Prof. R. P. Maheshwari, IIT Roorkee, Prof. Ashish
              Shrivastava, Shri Vishwakarma Skill University, Mr. A. B.
              Sengupta, Chief Manager and alternate CISO, Grid Controller of
              India, and Mr. Vish Iyer, Global Chief Commercial Officer, Jakson
              Greens.
            </p>
            <p>
              Prof. Santanu Mishra, IIT Delhi, Dr. Vineet Saini from DST, and
              Mr. Kushagra Nandan, MD &amp; CEO of SunSource Energy graced the
              Valedictory Program and provided valuable insights into the field
              of green energy and computing. A strong need for collaborative
              efforts to promote Green Energy for sustainable development was
              emphasized during the valedictory program. The conference
              concluded with a motivational quote: &quot;Investment in Green
              Energy is the investment for the future.&quot;.
            </p>
          </div>
        </div>

        <div id="theme" className="target">
          <div className="container mb-5">
            <h1 className="mb-3 green-heading">Conference Theme</h1>
            <p>
            An International Conference on Advancement in Green energy, Communication and Computing Techniques (AGECCT-2K26) is scheduled to be held from February 13-14, 2026, at Ajay Kumar Garg Engineering College, Ghaziabad, Uttar Pradesh, India. (AGECCT-2K26) seeks to provide an open communication platform to discuss and exchange futuristic trends and high-quality research in the field of Engineering among researchers, academicians, industrial professionals, and students and bring together people from all different geographical areas who share a common discipline or field. The primary goal of the conference is to promote research and development activities needed for the next generation and focus on all promising areas in Engineering for Advancement in Green energy, Communication and Computing Technologies . Several renowned experts in this field will share their knowledge and experience with the participants.

            </p>
            {/* <p>
              <span className="bold-text">Track 1:</span> Green Energy, Electric
              Drives and Smart Grid
              <br />
              <span className="bold-text">Track 2:</span> Computing and Security
              <br />
              <span className="bold-text">Track 3:</span> Sustainable
              Technologies and Development
              <br />
              <span className="bold-text">Track 4:</span> Artificial
              Intelligence and Embedded Systems
            </p> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
