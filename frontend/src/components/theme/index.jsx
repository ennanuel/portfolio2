import DarkVariables from './DarkVariables'
import LightVariables from './LightVariables'

const Theme = ({ theme }) => theme === 'light' ? <LightVariables /> : <DarkVariables />;

export default Theme;