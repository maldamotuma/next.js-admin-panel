import { FunctionComponent } from "react";
import Copyright from "./copyright";

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
    return (<Copyright />);
}

export default Footer;