import Radium from "radium";
import { bounce, fadeIn, fadeInRight } from "react-animations";
const styles = {
  bounce: {
    animation: "x 1s",
    animationName: Radium.keyframes(bounce, "bounce")
  },
  fadeIn: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn")
  },
  fadeInRight: {
    animation: "x 2s",
    animationName: Radium.keyframes(fadeInRight, "fadeInRight")
  }
};

export default styles;
