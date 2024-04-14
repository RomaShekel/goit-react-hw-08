import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

const FeedbackSchema = Yup.object().shape({
  email: Yup.string().min(5, "Too Short!").max(50, "Too Long!").required("Required!"),
  password: Yup.string().min(7, "Too Short!").max(50, "Too Long!").required("Required!"),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values)).unwrap().catch(() => {alert("This user does not exist or something went wrong, please try again")});
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }} 
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}>
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
          <ErrorMessage name="email" as="span" className={css.error}/>
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password" as="span" className={css.error}/>
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}