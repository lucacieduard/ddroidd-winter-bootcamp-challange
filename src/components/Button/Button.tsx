import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

type Props = {
  hide: boolean;
  submit?: (e: React.FormEvent) => void;
  to: string;
  shadow?: boolean;
};
const Button = (props: Props) => {
  return (
    <Link
      to={props.to}
      className={
        props.hide ? `${styles.button} ${styles.hide}` : `${styles.button}`
      }
      onClick={props.submit ? props.submit : undefined}
      style={
        props.shadow ? { boxShadow: "5px 4px 4px 0px rgba(0, 0, 0, 0.25)" } : {}
      }
    >
      <button>Join Us</button>
    </Link>
  );
};

export default Button;
