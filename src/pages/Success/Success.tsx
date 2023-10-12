import styles from "./Success.module.scss";

const Success = () => {
  return (
    <div className={styles.container}>
      <section className={styles.congrats}>
        <h1>Excellent!</h1>
        <h1>See you in November 2023!</h1>
      </section>
      <section className={styles.summary}>
        <p className={styles.title}>Submission Summary:</p>
        <div className={styles.content}>
          <p>First name: John</p>
          <p>Last name: Doe</p>
          <p>Phone number: +0741483260</p>
          <p>Email : eduard@test.com</p>
          <p>Address: address 1, address 2</p>
          <p>Country: Romania</p>
          <p>State: none</p>
          <p>City: Cluj</p>
        </div>
      </section>
    </div>
  );
};

export default Success;
