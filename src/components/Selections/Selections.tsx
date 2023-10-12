import Select from "../Select/Select";
import styles from "./Selections.module.scss";
import { useState, useEffect } from "react";

type data = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address_1: string;
  address_2: string;
  country: string;
  state: string;
  city: string;
};
type Props = {
  countryErr: boolean;
  cityErr: boolean;
  deleteE: (name: string) => void;
  setFormData: (name: string, value: string) => void;
  selectedCountry: string;
  formData: data;
};
const Selections = (props: Props) => {
  const [data, setData] = useState<[]>([]);
  const [countries, setCountries] = useState<string[]>([]);
  const [state, setState] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const getAllCountries = async () => {
    try {
      const res = await fetch("https://countriesnow.space/api/v0.1/countries");
      if (!res.ok) {
        throw new Error("Fetch Error!");
      }
      const data = await res.json();
      setData(data.data);

      const countries: string[] = [];
      for (const country of data.data) {
        countries.push(country.country);
      }
      setCountries(countries);
    } catch (error) {
      console.log(error);
    }
  };

  const getStates = async () => {
    try {
      const res = await fetch(
        "https://countriesnow.space/api/v0.1/countries/states",
        {
          body: JSON.stringify({ country: props.selectedCountry }),
          headers: {
            "Content-Type": "application/json ; charset=UTF-8",
          },
          method: "POST",
        }
      );
      const data = await res.json();
      const states = [];
      for (const state of data.data.states) {
        states.push(state.name);
      }

      setState(states);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  useEffect(() => {
    if (props.selectedCountry.length > 0 && data.length > 0) {
      const city = data.find(
        (country: { country: string }) =>
          country.country === props.selectedCountry
      );

      if (city) {
        setCities(city?.cities);
      }
      props.setFormData("state", "");
      props.setFormData("city", "");
      getStates();
    }
  }, [props.selectedCountry]);

  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <span className={styles.text}>
          Country <span>*</span>
        </span>
        <Select
          placeholder="Country"
          error={props.countryErr}
          deleteEr={props.deleteE}
          setFormData={props.setFormData}
          values={countries}
          active={props.formData.country}
        />
      </div>
      <div className={styles.label}>
        <span className={styles.text}>State</span>
        <Select
          placeholder="State"
          setFormData={props.setFormData}
          values={state}
          active={props.formData.state}
        />
      </div>
      <div className={styles.label}>
        <span className={styles.text}>
          City <span>*</span>
        </span>
        <Select
          placeholder="City"
          error={props.cityErr}
          deleteEr={props.deleteE}
          setFormData={props.setFormData}
          values={cities}
          active={props.formData.city}
        />
      </div>
    </div>
  );
};

export default Selections;
