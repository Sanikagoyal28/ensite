import { Table } from "react-bootstrap";

export default function SpecialSession() {
  return (
    <div id="theme" className="target">
      <div className="container">
        <h1 className="mb-3 green-heading">Special Sessions</h1>

        <h5 className="extra-bold-text mt-4">
          SS 1: Artificial Intelligence and Machine Learning applications in
          Electric Vehicles
        </h5>
        <Table>
          <thead>
            <th className="noborder">Session Organizers</th>
          </thead>
          <tbody className="tableNew">
            <tr>
              <td>
                Dr. Sreejith S.
                <br />
                Department of Electrical Engineering, NIT Silchar{" "}
              </td>
              <td>
                Dr. B. Shakila
                <br />
                Department of Electrical and Electronics engineering, NIT
                Nagaland
              </td>
            </tr>
          </tbody>
        </Table>
        <br />

        <h5 className="extra-bold-text">
          SS 2: Next-Generation Cyber Defence Mechanisms: AI and Machine
          Learning Applications for Enhanced Security
        </h5>
        <Table>
          <thead>
            <th className="noborder">Session Organizers</th>
          </thead>
          <tbody className="tableNew">
            <tr>
              <td>
                Dr. Manju Khari
                <br />
                School of Computer & Systems Sciences, Jawaharlal Nehru
                University, New Delhi
              </td>
              <td>
                Prof. Suman Avdhesh Yadav
                <br />
                Amity School of Engineering & Technology, Amity University
                Greater Noida, Uttar Pradesh
              </td>
            </tr>
          </tbody>
        </Table>
        <br />

        <h5 className="extra-bold-text">
          SS 3: Cyber-Physical and Blockchain Technologies for Sustainable
          Energy Systems
        </h5>
        <Table>
          <thead>
            <th className="noborder">Session Organizers</th>
          </thead>
          <tbody className="tableNew">
            <tr>
              <td>
                Dr. Monica Bhutani
                <br />
                Department of Electronics and Communications, Bharati
                Vidyapeeth's College of Engineering (BVCOE), New Delhi
              </td>
              <td>
                Mr. Anwaya Bilas Sengupta
                <br />
                Alternate Chief Information Security Officer, Grid Controller of
                India Limited, New Delhi
              </td>
            </tr>
          </tbody>
        </Table>
        <br />

        <h5 className="extra-bold-text mt-8">
          SS 4: Electric Mobility: Vehicle-to-Grid, Grid-to-Vehicle, and
          Charging Infrastructure
        </h5>
        <Table>
          <thead>
            <th className="noborder">Session Organizers</th>
          </thead>
          <tbody className="tableNew">
            <tr>
              <td>
                Dr. S. K. Sinha
                <br />
                Department of Electrical & Electronics Engineering, Amity
                University Uttar Pradesh, Noida
              </td>
              <td>
                Dr. Ruchira
                <br />
                Department of Electrical & Electronics Engineering, Amity
                University Uttar Pradesh, Noida  
              </td>
            </tr>
          </tbody>
        </Table>
        <br />
      </div>
    </div>
  );
}
