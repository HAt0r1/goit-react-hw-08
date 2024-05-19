import style from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Contacts</h1>
      <p className={style.text}>
        This is designed to give you the opportunity to create and save your
        contacts. If you want to try how is it working, first of all you need to
        registration account. After that you can do anathing you want with your
        contacts.
      </p>
    </div>
  );
};

export default HomePage;
