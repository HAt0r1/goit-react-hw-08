import ContactForm from "../../components/ContactsForm/ContactsForm";
import SearchBox from "../../components/SearchBox/SearchBox";

import style from "./ContactsPage.module.css";

const ContactPage = () => {
  return (
    <main className={style.main}>
      <h2 className={style.title}>Contacts</h2>
      <ContactForm />
      <SearchBox />
    </main>
  );
};

export default ContactPage;
