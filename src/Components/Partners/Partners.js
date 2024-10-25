import React, { Component } from "react";
import './Partner.css';

import dsirLogo from '../../assets/our_partners/aerial-drone-panorama-view-chisinau-moldova-sunrise.jpg';
import gridIndiaLogo from '../../assets/our_partners/GRID-INDIA-LOGO-FINAL.jpg';
import teriLogo from '../../assets/our_partners/main_teri_logo.png';

class Theme extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="mb-3 green-heading" style={{ textAlign: 'center', paddingTop: "2%" }}>
                    Our Partners
                </h1>

                <h2 className="partner-section-title">Financial Partner</h2>
                <div className="financial-partner-container">
                    <table className="partners-table">
                        <tbody>
                            <tr>
                                <td style={{ width: '250px', padding: '10px' }}>
                                    <div
                                        className="partner-image"
                                        style={{ backgroundImage: `url(${dsirLogo})`, width: '200px', height: '200px', backgroundSize: 'cover' }}
                                    />
                                </td>
                                <td style={{ fontSize: '24px', paddingLeft: '20px' }}>
                                    Department of Science and Industrial Research (DSIR)
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="partner-section-title">Technical Partners</h2>
                <div className="technical-partner-container">
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
                                <td style={{ fontSize: '24px', paddingLeft: '20px' }}>
                                    Grid India
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '250px', padding: '10px' }}>
                                    <img
                                        src={teriLogo}
                                        alt="TERI Logo"
                                        style={{ width: '200px', height: 'auto' }}
                                    />
                                </td>
                                <td style={{ fontSize: '24px', paddingLeft: '20px' }}>
                                    TERI (The Energy and Resources Institute)
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
