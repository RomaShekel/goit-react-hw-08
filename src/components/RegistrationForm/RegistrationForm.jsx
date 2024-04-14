import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(5, "Too Short!").max(50, "Too Long!").required("Required!"),
  email: Yup.string().min(5, "Too Short!").max(50, "Too Long!").required("Required!"),
  password: Yup.string().min(7, "Too Short!").max(50, "Too Long!").required("Required!"),
});


export default function RegistrationForm() {
const initialValues = {
    name: "",
    email: "",
    password: "",
  }

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values)).unwrap().catch(() => {alert("Invalid email, please try again")});
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}>
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name"/>
          <ErrorMessage name="name" as="span" className={css.error}/>
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email"/>
          <ErrorMessage name="email" as="span" className={css.error}/>
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password"/>
          <ErrorMessage name="password" as="span" className={css.error}/>
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
