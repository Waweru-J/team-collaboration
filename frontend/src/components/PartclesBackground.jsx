import Particles from "react-tsparticles";
import particleConfig from '../config/particle-config'

export default function PartclesBackground() {
    return (
        <Particles params={particleConfig}></Particles>
    )
}
