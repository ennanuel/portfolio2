import React from 'react';
import LightLogo from './LightLogo';
import DarkLogo from './DarkLogo';

const Logo = ({ theme, dragDown }) => theme === 'light' ? <LightLogo dragDown={dragDown} /> : <DarkLogo dragDown={dragDown} />

export default Logo
