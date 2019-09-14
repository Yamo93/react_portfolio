import React from 'react';
import Particles from 'react-particles-js';

const ParticlesContainer = props => {
    return <Particles
    params={{
        "particles": {
            "line_linked": {
                        "color":"#6D326D"
                        },
            "number": {
                "value": 150
            },
            "size": {
                "value": 5
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                }
            }
        }
    }}
    style={{
            width: '100%',
            height: '100vh',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '-1',
            background: `#FEFEFE` 
     }}
    />;
};

export default ParticlesContainer;