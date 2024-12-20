import React, { Component } from "react";
import './Partner.css';

import dsirLogo from '../../assets/our_partners/DSIR.png';
import gridIndiaLogo from '../../assets/our_partners/GRID-INDIA-LOGO-FINAL.jpg';
import teriLogo from '../../assets/our_partners/main_teri_logo.png';

class Theme extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="mb-3 green-heading" style={{ textAlign: 'center', paddingTop: "2%" }}>
                    Our Partners
                </h1>

                <div className="financial-partner-container">
                    <h2 className="partner-section-title">Financial Partner</h2>
                    <table className="partners-table">
                        <tbody>
                            <tr>
                                <td style={{ width: '250px', padding: '10px' }}>
                                    <div
                                        className="partner-image"
                                        style={{
                                            backgroundImage: `url(${dsirLogo})`,
                                            width: '200px',
                                            height: '200px',
                                            backgroundSize: 'cover'
                                        }}
                                    />
                                </td>
                                <td style={{ fontSize: '16px', paddingLeft: '20px' }}>
                                    Department of Science and Industrial Research (DSIR) / Department of Science and Technology
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="technical-partner-container">
                    <h2 className="partner-section-title">Technical Knowledge Partners</h2>

                    <table className="partners-table">
                        <tbody>
                            <tr>
                                <td style={{ width: '250px', padding: '10px' }}>
                                    <img
                                        src={gridIndiaLogo}
                                        alt="Grid India Logo"
                                        style={{ width: '200px', height: 'auto' }}
                                    />
                                </td>
                                <td style={{ fontSize: '16px', paddingLeft: '20px' }}>
                                    Grid India
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '250px', padding: '10px' }}>
                                    <img
                                        src={teriLogo}
                                        alt="Grid India Logo"
                                        style={{ width: '200px', height: 'auto' }}
                                    />
                                </td>
                                <td style={{ fontSize: '16px', paddingLeft: '20px' }}>
                                    The Energy and Resources Institute (TERI)
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Theme;
