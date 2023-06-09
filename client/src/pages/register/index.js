import { Formik, Form, Field } from 'formik';
import Link from 'next/link';


const Register = ( )=> {
   
    return (
        <div>
    
      
        <Formik
          initialValues={{
            fullName:'',
            phoneNumber: '',
            password: '',
            confirmPassword: ''
          }}
          onSubmit={values => {
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(values)
          };
          fetch('http://localhost:3001/register', requestOptions)
      
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="fullName" placeholder="fullName"/>
              {errors.fullName && touched.fullName ? (
                <div>{errors.fullName}</div>
              ) : null}
              <br/>
              <Field name="phoneNumber" placeholder="phoneNumber"/>
              {errors.phoneNumber && touched.phoneNumber ? (
                <div>{errors.phoneNumber}</div>
              ) : null}
              <br/>
              <Field name="password" placeholder="password"/>
              {errors.password && touched.password? (
                <div>{errors.password}</div>
              ) : null}
              <br/>
              <Field name="confirmPassword"  placeholder="confirmPassword"/>
              {errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}
              <br/>
              
              <button type="submit">Submit</button>
              Already User <Link href="/">Sign in</Link>
            </Form>
          )}
        </Formik>
        </div>
    )
}


export default Register