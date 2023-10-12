import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/User";
import styles from "./Success.module.scss";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const ctx = useContext(UserContext);
  const [counter, setCounter] = useState(5);
  const navigate = useNavigate();
  const decrease = () => {
    setCounter((prev) => prev - 1);
  };

  if (counter === 0) {
    navigate("/form");
  }

  useEffect(() => {
    if (!ctx.user) {
      const ref = setInterval(decrease, 1000);
      return () => clearInterval(ref);
    }
  }, []);
  return (
    <div className={styles.container}>
      {ctx.user ? (
        <>
          <section className={styles.congrats}>
            <h1>Excellent!</h1>
            <h1>See you in November 2023!</h1>
          </section>

          <section className={styles.summary}>
            <p className={styles.title}>Submission Summary:</p>
            <div className={styles.content}>
              <p>First name: {ctx.user?.firstName}</p>
              <p>Last name: {ctx.user?.lastName}</p>
              <p>Phone number: {ctx.user?.phone}</p>
              <p>Email : {ctx.user?.email}</p>
              <p>
                Address: {ctx.user?.address_1}, {ctx.user?.address_2}
              </p>
              <p>Country: {ctx.user?.country}</p>
              <p>State: {ctx.user?.state ? ctx.user.state : "none"}</p>
              <p>State: {ctx.user?.city}</p>
            </div>
          </section>
        </>
      ) : (
        <>
          <h1>Please fill out the form first</h1>
          <p>you will be redirected to the formular in {counter} seconds</p>
        </>
      )}
    </div>
  );
};

export default Success;
