import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Selections from "../../components/Selections/Selections";
import styles from "./Form.module.scss";
import { useState, useContext } from "react";
import { data, errors } from "../../types";
import { UserContext } from "../../context/User";

const Form = () => {
  const [formData, setFormData] = useState<data>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address_1: "",
    address_2: "",
    country: "",
    state: "",
    city: "",
  });
  const [errors, setErrors] = useState<errors[]>();
  const navigate = useNavigate();
  const ctx = useContext(UserContext);

  const deleteError = (name: string) => {
    const test = errors?.findIndex((obj) => obj.name === name);
    const err = errors;
    if (typeof test === "number" && test !== -1) {
      err?.splice(test, 1);

      setErrors(err);
    }
  };

  const setform = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });

    const hasErrors = errors?.find((obj) => obj.name === e.target.name);

    if (hasErrors && e.target.value.length > 0 && e.target.name !== "phone") {
      deleteError(e.target.name);
    } else if (e.target.name === "phone" && e.target.value.includes("+")) {
      deleteError("phone");
    }
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const errorrs: { name: string; msg: string }[] = [];

    if (formData.firstName.length === 0) {
      errorrs.push({ name: "firstName", msg: "First Name is Required!" });
    }

    if (formData.lastName.length === 0) {
      errorrs.push({ name: "lastName", msg: "Last Name is Required!" });
    }
    if (!formData.phone.includes("+")) {
      errorrs.push({ name: "phone", msg: "Wrong phone number format!" });
    }
    if (formData.email.length === 0) {
      errorrs.push({ name: "email", msg: "Email is required!" });
    }
    if (formData.address_1.length === 0) {
      errorrs.push({ name: "address_1", msg: "Address is Required!" });
    }
    if (formData.country.length === 0) {
      errorrs.push({ name: "country", msg: "Country is Required!" });
    }
    if (formData.city.length === 0) {
      errorrs.push({ name: "city", msg: "City is Required!" });
    }

    setErrors(errorrs);
    console.log(errorrs);
    console.log(errors);
    if (errorrs?.length === 0) {
      ctx.createUser(formData);
      navigate("/form/success");
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.p_title}>Application Form</h1>
      <form className={styles.form} onSubmit={submitHandler}>
        <section className={styles.contactInfo}>
          <p className={styles.title}>Contact Information</p>
          <div className={styles.fields}>
            <div className={styles.field}>
              <label>
                First Name<span>*</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={changeHandler}
                style={
                  errors?.find((obj) => obj.name === "firstName")
                    ? { borderColor: "red" }
                    : {}
                }
              />
            </div>
            <div className={styles.field}>
              <label>
                Last Name<span>*</span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={changeHandler}
                style={
                  errors?.find((obj) => obj.name === "lastName")
                    ? { borderColor: "red" }
                    : {}
                }
              />
            </div>
          </div>
          <div className={styles.fields}>
            <div className={styles.field}>
              <label>
                Phone number<span>*</span>
              </label>
              <input
                type="tel"
                placeholder="+40 711  111 111"
                name="phone"
                onChange={changeHandler}
                style={
                  errors?.find((obj) => obj.name === "phone")
                    ? { borderColor: "red" }
                    : {}
                }
              />
            </div>
            <div className={styles.field}>
              <label>
                Email address<span>*</span>
              </label>
              <input
                type="text"
                placeholder="john@doe.com"
                onChange={changeHandler}
                name="email"
                style={
                  errors?.find((obj) => obj.name === "email")
                    ? { borderColor: "red" }
                    : {}
                }
              />
            </div>
          </div>
        </section>
        <section className={styles.addressInfo}>
          <p className={styles.title}>Address</p>

          <div className={styles.fields}>
            <div className={styles.field}>
              <label>
                Address line 1<span>*</span>
              </label>
              <input
                type="text"
                placeholder="Street name & number"
                name="address_1"
                onChange={changeHandler}
                style={
                  errors?.find((obj) => obj.name === "address_1")
                    ? { borderColor: "red" }
                    : {}
                }
              />
            </div>
            <div className={styles.field}>
              <label>Address line 2</label>
              <input
                type="text"
                placeholder="Suite, apartment"
                name="address_2"
                onChange={changeHandler}
              />
            </div>
          </div>
          <Selections
            countryErr={
              errors?.find((err) => err.name === "country") ? true : false
            }
            cityErr={errors?.find((err) => err.name === "city") ? true : false}
            deleteE={deleteError}
            setFormData={setform}
            selectedCountry={formData.country}
            formData={formData}
          />
        </section>
        <div
          className={styles.footer}
          style={errors ? {} : { marginTop: "2rem" }}
        >
          <div className={styles.errors}>
            {errors
              ? errors.length > 0 && (
                  <p>Please fix the following errors to proceed:</p>
                )
              : ""}
            {errors &&
              errors?.map((err, key) => <p key={key}>&#8226; {err.msg}</p>)}
          </div>
          <Button hide={false} submit={submitHandler} to="/form/success" />
        </div>
      </form>
    </div>
  );
};

export default Form;
