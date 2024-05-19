import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { filterContacts, selectLoading } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import Loader from "../Loader/Loader";

import style from "./ContactsList.module.css";
import { useEffect } from "react";

const ContactList = () => {
  const dispatch = useDispatch();
  const filterUsers = useSelector(filterContacts);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ul className={style.list}>
        {filterUsers.map((contact) => {
          return (
            <li key={contact.id} className={style.listItem}>
              <Contact info={contact} />
            </li>
          );
        })}
      </ul>
      {isLoading && <Loader />}
    </>
  );
};

export default ContactList;
