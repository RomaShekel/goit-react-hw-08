
import { useId,} from 'react';
import { Form, Formik, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css"
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';



const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required!"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required!"),
});


export default function ContactForm () {

    const initialValues = {
        name: "",
        number: "",
    };
    

    const nameFieldId = useId();
    const numberFieldId = useId();

    const handleSubmit = (values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
    }

    const dispatch = useDispatch();
    return(
        <div>
        <Formik
         initialValues={initialValues}
         onSubmit={handleSubmit}
         validationSchema={FeedbackSchema}>
            <Form className={css.form}>
                <div className={css.inputDiv}>
                    <label htmlFor={nameFieldId}>Name</label>
                    <Field type="text" name='name' id={nameFieldId}/>
                    <ErrorMessage name="name" as="span" className={css.error} />
                </div>

                <div className={css.inputDiv}>
                    <label htmlFor={numberFieldId}>Number</label>
                    <Field type="number" name='number' id={numberFieldId}/>
                    <ErrorMessage className={css.error} name="number" as="span" />
                </div>

                <button type='submit' className={css.button}>Add contact</button>
            </Form>
        </Formik>
        </div>
)}