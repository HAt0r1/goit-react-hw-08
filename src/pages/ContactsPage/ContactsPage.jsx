import ContactForm from "../../components/ContactsForm/ContactsForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactsList from "../../components/ContactsList/ContactsList";

import style from "./ContactsPage.module.css";

const ContactPage = () => {
  return (
    <main className={style.main}>
      <h2 className={style.title}>Contacts</h2>
      <ContactForm />
      <SearchBox />
      <ContactsList />
    </main>
  );
};

export default ContactPage;
