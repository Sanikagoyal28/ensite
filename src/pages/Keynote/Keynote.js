import Header from "../../Components/Header/Header";
import "./Keynote.css";
import Footer from "../../Components/Footer/Footer";

import Akshay from "../../assets/Akshay.jpeg";
import Mohan from "../../assets/Mohan.jpg";
import inter from "../../assets/inter.png";
import Dinesh from "../../assets/Dinesh.jpg";
import Reji from "../../assets/Reji.png";
import Rihan from "../../assets/Rihan.jpg";
import Satish from "../../assets/Satish.png";

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
and water utilities in Asia, Middle East, and Africa. He possesses advanced qualifications in Engineering, Finance, Management and Law
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
                <b>Biography</b> :Dr. Mohammad Rihan, a professor in the Electrical Engineering Department at Aligarh Muslim University (AMU), is currently serving as the Director General of the National Institute of Solar Energy (NISE), an autonomous body under the Government of India’s Ministry of New and Renewable Energy (MNRE). Appointed in early 2024, Dr. Rihan’s selection was endorsed by a committee of subject matter experts and senior IAS officers and later approved by the Appointments Committee of the Cabinet. He is on deputation at NISE for an initial period of three years, with a potential two-year extension.
Dr. Rihan brings extensive expertise in smart grids and solar energy to his role at NISE, where he will lead efforts in research and development, testing, certification, and skill development in solar technologies. At AMU, Dr. Rihan spearheaded the integration of a 6.5 MWp solar PV plant into the university’s distribution grid, one of the largest such installations in an Indian academic institution. He also led a groundbreaking Rs. 20 crore project for a 3.3 MWp solar farm, setting a national benchmark for renewable energy integration in academia.
As the founding director of AMU’s Center for Grid Integrated Green and Renewable Energy, Dr. Rihan has been instrumental in addressing research challenges related to high renewable energy penetration. Under his leadership, the center launched a Joint M.Tech. program on Green Energy and Sustainable Development in collaboration with NISE, supporting national priorities in green energy transition and aligning with the National Education Policy.
Throughout his academic career, Dr. Rihan has mentored numerous Ph.D. scholars in areas such as smart grids, solar energy, and synchrophasor measurement, with several of his students receiving the prestigious Prime Minister’s Research Fellowship. Additionally, he has provided expert consultancy for both government and private sector initiatives focused on energy efficiency, conservation, and the modernization of electrical infrastructure.
Dr. Rihan’s role at NISE positions him to significantly advance solar energy research, development, and policy, contributing to India’s renewable energy objectives and sustainable development goals.

              </p>
            </div>


           
          </div>
        </div>
        <div className="KN-grid">
          <div>
            <h1>National Speakers</h1>
            <div className="KN-container">
              <img src={Satish} className="" alt="keynote-img" />
              <p className="KN-text">
                <h3>Prof.(Dr.) Sri Niwas Singh</h3>
                <br/>
               
                <b>Biography</b> : 
                Dr. Satish Kumar Singh is an Associate Professor in the Department of Information Technology at the Indian Institute of Information Technology (IIIT) Allahabad, India, where he has served since 2013. Prior to joining IIIT Allahabad, he worked in the Department of Electronics and Communication Engineering at Jaypee University of Engineering and Technology, Guna, India, from 2005 to 2012. With over 16 years of professional experience, Dr. Singh’s areas of expertise encompass Image Processing, Computer Vision, Biometrics, Deep Learning, and Pattern Recognition. Since 2015, he has headed the Computer Vision and Biometrics Lab (CVBL) at IIIT Allahabad, where his research group engages in the R&D of Signal and Image Processing, Vision, and Biometrics algorithms and systems.
Dr. Singh has supervised six Ph.D. and 34 Master's students, and he is currently guiding nine Ph.D. and six Master's students within CVBL. He holds a Ph.D. in Computer Science and Engineering from Jaypee University of Information Technology, Waknaghat, HP, India (2006–2010), an M.Tech in Laser Science and Applications from Devi Ahilya University, MP, India (2003–2005), and a B.Tech in Electronics Engineering from Dr. R.M.L. Avadh University, Faizabad, UP, India.
Professionally, Dr. Singh is affiliated with several esteemed societies. He is a Fellow of the Institute of Engineers, India (2020), a Fellow of the Institution of Electronics and Telecommunication Engineers, India (2006), and a Senior Member of both the IEEE (2009) and the International Association of Computer Science and Information Technology, USA (2010). He is also a member of the International Association of Pattern Recognition (IAPR, 2020).
Dr. Singh has undertaken various administrative roles. He serves as Vice-Chair for the IEEE India Council (2020) and IEEE Uttar Pradesh Section (2020), and he is Secretary of the IEEE SPS Chapter in the Uttar Pradesh Section (2020–present). His contributions extend to national bodies, where he serves as a member of the Recruitment and Assessment Committee of DRDO, Ministry of Defence, and an expert for the All India Council for Technical Education’s Approval Committee (2020–present). At IIIT Allahabad, he is the convener of the DRDO-Academia Collaboration Committee, Correspondence In-Charge for the ISRO-IIITA MoU (2019–present), and Convener of DPGC (IT). He also oversees SPARC, Rankings, and Accreditation activities and has served in various IEEE roles including Secretary and Treasurer of the IEEE Uttar Pradesh Section.
               
              </p>
            </div>
          </div>
        </div>
         <h4 className="d-inline-block p-2 px-3 headings mb-4">
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
