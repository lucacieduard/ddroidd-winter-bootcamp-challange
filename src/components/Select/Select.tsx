import styles from "./Select.module.scss";
import { useState } from "react";

type Props = {
  placeholder: string;
  error?: boolean;
  deleteEr?: (name: string) => void;
  setFormData: (name: string, value: string) => void;
  values: string[] | undefined;
  active: string;
};
const Select = (props: Props) => {
  const [visible, setVisibile] = useState(false);
  return (
    <div className={styles.container}>
      <div
        className={styles.select}
        onClick={() => setVisibile((prev) => !prev)}
      >
        <p className={props.error ? ` ${styles.error} ` : ` `}>
          {props.active.length > 0 ? props.active : props.placeholder}
        </p>
        <span>
          <img src="/assets/img/arrow.svg" alt="" />
        </span>
      </div>
      {visible && (
        <div className={styles.options}>
          {props.values?.length && props.values?.length > 0 ? (
            props.values?.map((country, key) => (
              <p
                key={key}
                className={styles.option}
                onClick={() => {
                  props.setFormData(props.placeholder.toLowerCase(), country);
                  if (props.deleteEr) {
                    props.deleteEr(props.placeholder.toLocaleLowerCase());
                  }
                  setVisibile((prev) => !prev);
                }}
              >
                {country}
              </p>
            ))
          ) : (
            <p className={styles.empty}>
              {props.placeholder === "State" ? "No state found" : "No values"}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Select;