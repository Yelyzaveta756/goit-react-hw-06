import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { addContact } from '../../redux/contactsSlice';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
  number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, 'Number must be in the format XXX-XX-XX').min(3, 'Too short!').max(50, 'Too long!').required('Required'),
});


export default function ContactForm() {

const contactId = useId();
const dispatch = useDispatch()

const initialValues = {
  name: '',
  number: '',
};


  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      <Form className={css.form}>
        <label htmlFor="name" className={css.labelfirst}>Name</label>
        <Field type="text" name="name" id={contactId} className={css.input} />
        <ErrorMessage name="name" component="span" className={css.error} />

        <label htmlFor="number" className={css.label}>Number</label>
        <Field type="text" name="number" className={css.input} />
        <ErrorMessage name="number" component="span" className={css.error} />

        <button type="submit" className={css.addBtn}>Add contact</button>
      </Form>
    </Formik>
  );
};

