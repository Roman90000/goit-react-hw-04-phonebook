import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormikBox, FormEl } from './Form.styled';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Too Short!')
    .max(30, 'Too Long!')
    .trim()
    .required('Required'),
  number: Yup.number()
    .min(5, 'Too Short!')
    .positive('Must be positive')
    .required('Required'),
});

export const Forma = ({ onAdd }) => {
  return (
    <FormikBox>
      <h1>Phonebook</h1>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <Form>
          <FormEl>
            Name
            <Field name="name" type="text" />
            <ErrorMessage name="name" />
          </FormEl>

          <FormEl>
            Number
            <Field name="number" type="tel" />
            <ErrorMessage name="number" />
          </FormEl>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </FormikBox>
  );
};
