import Header from "../../Components/Header/Header";
import "./Keynote.css";
import Footer from "../../Components/Footer/Footer";

import Akshay from "../../assets/Akshay.jpeg";
import Mohan from "../../assets/Mohan.jpg";

import Dinesh from "../../assets/Dinesh.jpg";
import Reji from "../../assets/Reji.png";
import Rihan from "../../assets/Rihan.jpg";
import Satish from "../../assets/Satish.png";
import Vipin from "../../assets/Vipin.jpg"; 
import BK from "../../assets/BK.png";
import AK from "../../assets/AK.png"
import Rajiv from "../../assets/Rajiv.png"
import R from "../../assets/R.jpg"

const Keynote = () => {
  return (
    <>
      <Header active="keynote" />
      <div className="container my-5">
       
        <div className="KN-grid">
          <div>
            <h1>International Speakers</h1>
            <div className="KN-container">
              <img src={Akshay} className="" alt="keynote-img" />
              <p className="KN-text">
                <h3>Prof.(Dr.) Akshay Kumar Rathore</h3>
                <br />
                <b>Topic</b> : Multidisciplinary Engineering in Design and
                Operation for Sustainable Energy Systems <br />
                <br />
                <b>Biography</b> : Prof. Akshay Kumar Rathore is an IEEE Fellow
                and expert in power electronics and control of electrical motor
                drives. He is currently a Professor and Program leader of
                Electrical Power Engineering Degree Program jointly offered with
                Newcastle University, UK. He received the Gold Medal for
                securing the highest academic standing in his Master’s degree
                among all electrical engineering specializations at Indian
                Institute of Technology (BHU) Varanasi, India. He received his
                PhD degree in Power Electronics from University of Victoria,
                British Columbia, Canada in 2008. He had two subsequent
                postdoctoral research appointments with the University of
                Wuppertal, Germany, and the University of Illinois at Chicago,
                USA. From 2011-2015, he served as an Assistant Professor in
                Electrical and Computer Engineering, National University of
                Singapore. From 2016-2021, he served as an Associate Professor
                in Electrical and Computer Engineering, Concordia University,
                Montreal, Canada where he was listed in the Provost Circle of
                Distinction in 2021. Curently, Prof. Rathore is working as
                Professor in Singapore Institute of Technology, Singapore. He
                served as the Graduate Program Director and Chair of Graduate
                Awards during 2020-21.
                <br /> Dr. Rathore is a recipient of the 2013 IEEE IAS Andrew W.
                Smith Outstanding Young Member Achievement Award, 2014 Isao
                Takahashi Power Electronics Award, 2017 IEEE IES David Irwin
                Early Career Award, 2019 IES Publications Service Recognition
                Award, 2020 IEEE Bimal Bose Award for Industrial Electronics
                Applications in Energy Systems, 2021 Nagamori Award, and 2023
                Distinguished Alumna Award (Young Achiever Category -IIT BHU
                Varanasi). He published about 300 research papers in
                international journals and conferences, including 105 IEEE
                TRANSACTIONS.
                <br /> Dr. Rathore is currently serving as the
                co-Editor-in-Chief of IEEE Transactions on Industrial
                Electronics, IEEE Fellow Evaluation Committee member of IEEE IES
                Society, member of the IEEE Nikola Tesla Award Committee and a
                Distinguished Lecturer of the IEEE PELS society.
              </p>
            </div>
            <div className="KN-container">
              <img src={Mohan} className="" alt="keynote-img" />
              <p className="KN-text">
                <h3 >Prof. (Dr.) Mohan Kolhe </h3>
                <br />
                <b>Topic</b>: Integrated Renewable Energy System based on Energy Storage as Electrolytic Hydrogen <br />
                <br />
                <b>Biography</b> : Prof. Dr. Mohan Lal Kolhe is a full professor in smart grid and renewable energy at the Faculty of Engineering and Science of the University of Agder (Norway).
                <br />
                He is a leading renewable energy technologist with three decades of academic experience at the international level and previously held academic positions at the world's prestigious universities, e.g., University College London (UK / Australia), University of Dundee (UK); University of Jyvaskyla (Finland); Hydrogen Research Institute, QC (Canada); etc. In addition, he was a member of the Government of South Australia’s first Renewable Energy Board (2009-2011) and worked on developing renewable energy policies.
                <br /> Professor Kolhe is an expert evaluator of many prestigious international research councils (e.g., European Commission: Erasmus+ Higher Education – International Capacity Building, Royal Society London (UK), Engineering and Physical Sciences Research Council (EPSRC UK), Cyprus Research Foundation, etc.). In addition, many international organizations have invited him to deliver keynote addresses, expert lectures, workshops, etc. He has also been a member of many academic promotional committees.
                <br/>Professor Kolhe has been successful in obtaining competitive research funding from prestigious research bodies (such as the Norwegian Research Council, EU, EPSRC, BBSRC, NRP, etc.) for his work on sustainable energy systems. His work on energy systems and electrical & electronic engineering has been recognised in the top 2% of scientists worldwide consistently from 2020 to 2023, according to Stanford University matrices based on Elsevier data. His top 10 publications have received an average of more than 200 citations each, making him an acknowledged pioneer in his profession on a global scale.
              </p>
            </div>
            <div className="KN-container">
              <img src={Dinesh} className="" alt="keynote-img" />
              <p className="KN-text">
                <h3 >Shri. Dinesh Dayanand Jagdale </h3>
                <br />
                {/* <b>Topic</b>: Integrated Renewable Energy System based on Energy Storage as Electrolytic Hydrogen <br />
                <br /> */}
                <b>Biography</b> : Shri. Dinesh Jagdale is a Former Joint Secretary at the Ministry of New and Renewable Energy, Government of India. He was appointed as Joint Secretary to the Government of India, Ministry of New & Renewable Energy, in September 2019 under the Government of India’s Lateral Entry Policy & completed his tenure in Sept 2024. Shri. Jagdale is a Graduate in Electronics Engineering and Master’s in Business Administration with specialization in Marketing and has over Thirty Three years of rich experience in electrical and renewable energy industry. An innovative thinker, Self-motivated, visionary professional has spent 22 years of his career working in Renewable Industry in various capacities. Prior to joining the Ministry of New & Renewable Energy Shri. Jagdale spent his initial 10 years of his Career as a Renewable Energy professional in the Wind & Solar Industry wherein he contributed to the Growth of these Sectors across multiple states in India. He has been known for thorough knowledge on the processes related to Regulatory, Permitting and Licensing across all the renewable states. During his tenure in the private sector Shri. Jagdale established and led the growth of a Renewable IPP to grow the Wind & Solar Energy Sector in India. He has been actively involved as consulting personnel in formulation of state government policies for Wind & Solar Energy generation, striking a balance between developers of the project and sustainability of the transmission and distribution companies. During his Renewable Energy Career, he has bagged prestigious Awards & Recognition from various forums across Wind & Solar Industry. During his tenure as Joint Secretary to the Government of India, Ministry of New & Renewable Energy, he has worked on several policy matters for the development of Renewable energy in pursuit of achieving the ambitious target of 500 Gigawatt of total energy installed capacity by the year 2030 from non-fossil based energy sources.

              </p>
            </div>
            <div className="KN-container">
              <img src={Reji} className="" alt="keynote-img" />
              <p className="KN-text">
                <h3 >Shri Reji Kumar Pillai </h3>
                <br />
                {/* <b>Topic</b>: Integrated Renewable Energy System based on Energy Storage as Electrolytic Hydrogen <br />
                <br /> */}
                <b>Biography</b> : Reji Kumar Pillai is the President at India Smart Grid Forum (ISGF).
Reji is a renowned expert in the power sector with 29 years of international experience in the electricity industry in diverse functions across the entire value chain. He has been a key member of many multidisciplinary teams that were engaged in reform and restructuring of power
and water utilities in Asia, Middle East, and Africa. He possesses advanced qualifications in Engineering, Finance, Management and Law<br/>
In his most recent role as head of Energy & Utilities vertical in IBM India/South Asia, Reji spearheaded promotion of Smart Grids in India.
Prior to joining IBM he has worked in NTPC and was a Senror Consultant with ADB, USAID and World Bank.
A recognized thought leader in Smart Grid and Clean technologies, Reji is a popular key-note speaker at international symposiums and conferences on Smart Grids and Cleantech. He has also contributed to several articles and books.
In 2011 Reji setup Magnetar Venture to promote innovation in Cleantech domain for sustainable development. Reji was the General Partner at Magnetar Venture.
He is also an active member of Indian Angel Network.

              </p>
            </div>
            <div className="KN-container">
              <img src={Rihan} className="" alt="keynote-img" />
              <p className="KN-text">
                <h3 >Dr Mohd. Rihan </h3>
                <br />
                {/* <b>Topic</b>: Integrated Renewable Energy System based on Energy Storage as Electrolytic Hydrogen <br />
                <br /> */}
                <b>Biography</b> :Dr. Mohammad Rihan, a professor in the Electrical Engineering Department at Aligarh Muslim University (AMU), is currently serving as the Director General of the National Institute of Solar Energy (NISE), an autonomous body under the Government of India’s Ministry of New and Renewable Energy (MNRE). Appointed in early 2024, Dr. Rihan’s selection was endorsed by a committee of subject matter experts and senior IAS officers and later approved by the Appointments Committee of the Cabinet. He is on deputation at NISE for an initial period of three years, with a potential two-year extension.<br/>
Dr. Rihan brings extensive expertise in smart grids and solar energy to his role at NISE, where he will lead efforts in research and development, testing, certification, and skill development in solar technologies. At AMU, Dr. Rihan spearheaded the integration of a 6.5 MWp solar PV plant into the university’s distribution grid, one of the largest such installations in an Indian academic institution. He also led a groundbreaking Rs. 20 crore project for a 3.3 MWp solar farm, setting a national benchmark for renewable energy integration in academia.<br/>
As the founding director of AMU’s Center for Grid Integrated Green and Renewable Energy, Dr. Rihan has been instrumental in addressing research challenges related to high renewable energy penetration. Under his leadership, the center launched a Joint M.Tech. program on Green Energy and Sustainable Development in collaboration with NISE, supporting national priorities in green energy transition and aligning with the National Education Policy.<br/>
Throughout his academic career, Dr. Rihan has mentored numerous Ph.D. scholars in areas such as smart grids, solar energy, and synchrophasor measurement, with several of his students receiving the prestigious Prime Minister’s Research Fellowship. Additionally, he has provided expert consultancy for both government and private sector initiatives focused on energy efficiency, conservation, and the modernization of electrical infrastructure.<br/>
Dr. Rihan’s role at NISE positions him to significantly advance solar energy research, development, and policy, contributing to India’s renewable energy objectives and sustainable development goals.

              </p>
            </div>


           
          </div>
        </div>
        <div className="KN-grid">
          <div>
        
            <div className="KN-container">
              <img src={Satish} className="" alt="keynote-img" />
              <p className="KN-text">
                <h3>Prof.(Dr.) Sri Niwas Singh</h3>
                <br/>
               
                <b>Biography</b> : 
                Dr. Satish Kumar Singh is an Associate Professor in the Department of Information Technology at the Indian Institute of Information Technology (IIIT) Allahabad, India, where he has served since 2013. Prior to joining IIIT Allahabad, he worked in the Department of Electronics and Communication Engineering at Jaypee University of Engineering and Technology, Guna, India, from 2005 to 2012. With over 16 years of professional experience, Dr. Singh’s areas of expertise encompass Image Processing, Computer Vision, Biometrics, Deep Learning, and Pattern Recognition. Since 2015, he has headed the Computer Vision and Biometrics Lab (CVBL) at IIIT Allahabad, where his research group engages in the R&D of Signal and Image Processing, Vision, and Biometrics algorithms and systems.
                <br/> Dr. Singh has supervised six Ph.D. and 34 Master's students, and he is currently guiding nine Ph.D. and six Master's students within CVBL. He holds a Ph.D. in Computer Science and Engineering from Jaypee University of Information Technology, Waknaghat, HP, India (2006–2010), an M.Tech in Laser Science and Applications from Devi Ahilya University, MP, India (2003–2005), and a B.Tech in Electronics Engineering from Dr. R.M.L. Avadh University, Faizabad, UP, India.<br/>
Professionally, Dr. Singh is affiliated with several esteemed societies. He is a Fellow of the Institute of Engineers, India (2020), a Fellow of the Institution of Electronics and Telecommunication Engineers, India (2006), and a Senior Member of both the IEEE (2009) and the International Association of Computer Science and Information Technology, USA (2010). He is also a member of the International Association of Pattern Recognition (IAPR, 2020).<br/>
Dr. Singh has undertaken various administrative roles. He serves as Vice-Chair for the IEEE India Council (2020) and IEEE Uttar Pradesh Section (2020), and he is Secretary of the IEEE SPS Chapter in the Uttar Pradesh Section (2020–present). His contributions extend to national bodies, where he serves as a member of the Recruitment and Assessment Committee of DRDO, Ministry of Defence, and an expert for the All India Council for Technical Education’s Approval Committee (2020–present). At IIIT Allahabad, he is the convener of the DRDO-Academia Collaboration Committee, Correspondence In-Charge for the ISRO-IIITA MoU (2019–present), and Convener of DPGC (IT). He also oversees SPARC, Rankings, and Accreditation activities and has served in various IEEE roles including Secretary and Treasurer of the IEEE Uttar Pradesh Section.
               
              </p>
            </div>
          </div>
        </div>
        <div className="KN-grid">
          <div>
          
            <div className="KN-container">
              <img src={Vipin} className="" alt="keynote-img" />
              <p className="KN-text">
                <h3>Dr Vipin Chandra Shukla</h3>
                <br/>
               
                <b>Biography</b> : 
                Dr. Vipin Chandra Shukla, a distinguished Scientist-G at the Department of Scientific and Industrial Research (DSIR), Ministry of Science and Technology, Government of India, brings over 25 years of expertise in scientific research, technology development, and policy innovation. Currently, he also serves as the Head of CRTDH (Common Research and Technology Development Hub), PACE (Promoting Academic and Research Conversion), and A2K+ schemes, leading key initiatives to advance research collaboration and industrial innovation. Appointed as Scientist-G in November 2023, he previously served as Scientist-F at DSIR for five years. Dr. Shukla’s career includes an 18-year tenure at the Technology Information Forecasting and Assessment Council (TIFAC), where he progressed from Scientist-B to Scientist-E. He has also held leadership roles with the IIT Delhi Alumni Association, serving on the Executive Committee and as Secretary. In addition, he has contributed as Guest Faculty at Netaji Subhas Institute of Technology and as Scientist-E (on deputation) at the Central Institute of Road Transport in Pune. Earlier in his career, Dr. Shukla held roles as Manager in Product Development at Escorts Tractor Ltd. and as Project Associate at IIT Kanpur, exemplifying his dedication to advancing technology and fostering research partnerships in India.

              </p>
            </div>
          </div>
        </div>
        <div className="KN-grid">
          <div>
        
            <div className="KN-container">
              <img src={BK} className="" alt="keynote-img" />
              <p className="KN-text">
                <h3>Prof. (Dr.) B K Panigrahi</h3>
                <br/>
               
                <b>Biography</b> : 
                Prof. Bijaya Ketan Panigrahi is working as a professor in the Department of Electrical Engineering since 2005 and was the founder head of Centre for Automotive Research and Tribology (CART) at the Indian Institute of Technology Delhi. Prior to joining IIT Delhi, he served as a faculty in Electrical Engineering Department, University College of Engineering, Sambalpur, Odisha, India from 1992 to 2005. Prof. Panigrahi has published more than 800 research articles in various international journals of repute and conference proceedings. He is serving as the editorial board member of various international journals published by IEEE, IET, Elsevier, Springer etc. He is also associated with various international conferences in various capacities. He is a fellow of IEEE, Indian National Academy of Engineering (INAE), National Academy of Sciences (NASI), India, and Asia-Pacific Artificial Intelligence Association(AAIA). His research focus is to design and develop artificial intelligence-based tools for the detection and classification of power quality events, fault diagnostics of induction motor drives and diagnostics of electric vehicle motors. He has investigated intelligent techniques for the design of maximum power point tracking controllers for the solar photovoltaic system. Professor Panigrahi is also actively involved in the area of energy management in smart grid, EV charging infrastructures, impact of fast charging on the grid, EV battery technology, battery management systems etc. He is mentor of many start-ups working in the area of EV charger design, battery pack design and IoT devices for EVs.
               
              </p>
            </div>
          </div>
        </div>
        <div className="KN-grid">
          <div>
        
            <div className="KN-container">
              <img src={AK} className="" alt="keynote-img" />
              <p className="KN-text">
                <h3>Shri A K Saxena </h3>
                <br/>
               
                <b>Biography</b> : 
                Mr A. K. Saxena is engaged with the Electricity and Renewables Division of The Energy and Resources Institute (TERI) as its Senior Director. A veteran of India’s power sector with an experience spanning over four decades India his expertise lies in the areas of energy transition, just transition, smart distribution with energy storage, e-mobility, demand side management, smart grids, cross-border electricity trade, and more.<br/>
Prior to his stint at TERI, Mr Saxena has worked with the Central Electricity Authority, Ministry of Power, and Central Electricity Regulatory Commission (CERC). He has also served as the Chair/Member/Convenor of Committees set up by CERC and is currently presiding as a Chairperson of the Industry Advisory Board of IIT-Kanpur and La Trobe University Research Academy.<br/>
Mr Saxena holds a Master’s degree in Electrical Engineering and an Masters in Business Administration. He is also a Fellow of the Institution of Engineers (India) and a member of Institute of Electrical and Electronics Engineers (IEEE).
               
              </p>
            </div>
          </div>
        </div>
        <div className="KN-grid">
          <div>
        
            <div className="KN-container">
              <img src={Rajiv} className="" alt="keynote-img" />
              <p className="KN-text">
                <h3>Shri Rajiv Kumar Porwal</h3>
                <br/>
               
                <b>Biography</b> : 
                Shri Rajiv Kumar Porwal (DIN: 10230631) is the Director (System Operation) of our Company. He is a 1992 batch graduate in Electrical Engineering from MMM Engineering College Gorakhpur and a Master in Power Electronics, Electrical Machines and Drives from Indian Institute of Technology, Delhi (India). Before joining the Board of Grid-India, he was working as Executive director at Northern Regional Load Despatch Centre.<br/>
Some of his distinct contributions as a team member have been in the implementation of the first Grid-Code in the country, availability-based tariff (ABT) and deviation settlement mechanism (DSM), open access in transmission as Open Access Coordinator at NRLDC, regional energy accounting (REAs) by RLDCs, operations of Power Exchanges (PX) in the country, simulation-based calculations of total transfer capability (TTC) and available transfer capability (ATC) of different control areas for maintaining security as well as assisting market operations, point of connection (PoC)-based transmission pricing, integration of regional grids to fulfil the dream of achieving one nation one grid, restoration of the grids, certification of system operators and drafting of transmission planning criteria of 2013 and 2023.<br/>
He has also been deeply involved in the implementation of phasor or measurement units (PMUs) pilot and their utilization for system security and reliability, protection settings and testing, system protection schemes (SPS), reserves through reserves regulation ancillary services (RRAS), primary frequency response testing of generating units.<br/>
Shri Rajiv Kumar Porwal has also immensely contributed during rolling out of major initiatives like security constrained economic dispatch (SCED) and automatic generation control (AGC) in the country.<br/>
He has played a vital role in the cross-border power exchanges with the neighbouring countries, drafting of the expert committee report for the Grid Code 2023 and integration of renewables at the inter-state level.”
He has authored/co-authored more than 25 technical papers at nation and international forums. He is member of IEEE and CIGRE wherein he has contributed to the working groups.
He has been appointed as Director (System Operation) on our Board in July, 2023.
               
              </p>
            </div>
          </div>
        </div>

        <div className="KN-grid">
          <div>
        
            <div className="KN-container">
              <img src={R} className="" alt="keynote-img" />
              <p className="KN-text">
                <h3>Dr. R. Balasubramanian</h3>
                <br/>
               
                <b>Biography</b> : 
                Dr. R. Balasubramanian obtained his Ph.D. degree from IIT Kanpur. His Ph.D. Thesis is titled “Accurate Evaluation of EHV Transients in Power Systems Using Fourier Transform Method”. He joined B.H.E.L. Projects Engineering Division, New Delhi in 1975. In BHEL he was in the Power System Software Development and Power System Studies Projects Group and was executing Power System Study Projects for various Clients in the area of Load Flow, Short Circuit Studies, Stability Studies, Switching Overvoltage, Temporary/Dynamic Overvoltage, Insulation Coordination for EHV Systems etc. In 1979 he joined IIT Delhi in the Centre for Energy Studies as an Assistant Professor where he occupied various positions and retired as a Senior Professor in 2012. He served as NTPC Chair Professor (Elect. Engg.) at IIT Delhi for over 10 years. His main Areas of Research are Power System Planning, Operation and Control, Power System Optimization, Power System Reliability Assessment, Renewable Power Generation (Wind and Solar Photovoltaic Systems) and Energy Storage Devices.<br/>
He has guided 20 Ph.D. Theses and about 100 Master’s Theses at IIT Delhi on the above areas. He has published over 150 research papers in various International Journals & Conferences of repute.<br/>
After retiring from IIT Delhi in 2012, he has served as a Professor and Emeritus Professor at G. Narayanamma Institute of Technology and Science at Hyderabad.<br/>
Some Consultancy/Sponsored Projects Executed He has executed successfully some major consultancy/sponsored research projects for organizations such as National Thermal Power Corporation(R&D), BHEL, Easun Reyrolles, Siemens, Wartsila, World Bank, Ministry of New &amp; Renewable Energy Sources, Government of India and Central Board of Irrigation &amp; Power, India.<br/>
His Association with Technical Societies He served as the Chair of the IEEE Delhi Section during the years 2000 & 2001.<br/>
He was the chair of the IEEE Hyderabad PES/IAS/PELS Joint Chapter during 2014 & 2015 and Chair of IEEE Life Members Affinity Group of Hyderabad Section during 2019 & 2020.
               
              </p>
            </div>
          </div>
        </div>
        
         <h4 className="d-inline-block p-2 px-3 headings mb-4 mt-10">
          MORE SPEAKERS
        </h4>
        <div class="container">
          <h1 className="mb-3 green-heading" style={{ height: "40vh" }}>
            Will be Updated Soon...
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Keynote;
