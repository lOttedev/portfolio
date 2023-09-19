/*import { useForm } from 'react-hook-form';



function MyForm() {
  const {register, formState : { errors }} = useForm();
 // const [formData, setFormData] = useState({});
  const [state, handleSubmit] = useForm("mbjvowlv");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  
  //const handleInputChange = (event) => {
  //  const { name, value } = event.target;
  //  setFormData({ ...formData, [name]: value });
  //};

  return (
    <form id="contact-form" onSubmit={handleSubmit} action="https://formspree.io/f/mbjvowlv" method="post">
      <label htmlFor="fname">
        Prénom
        <br />
        <input type="text" id="fname" name="fname" 
        {...register('fname', {
          require: true,
          minLength: 2,
          maxLength: 25,
        })} 
        aria-invalid={errors.fname ? "true" : "false"}
        />
        {errors.fname &&(
          <span className='formError'> Veuillez remplir ce champs, il doit contenir entre 2 et 25 caractères </span>
        )}
      </label>
      <br />
      <label htmlFor="lname">
        Nom
        <br />
        <input type="text" id="lname" name="lname" 
                {...register('lname', {
                  require: true,
                  minLength: 2,
                  maxLength: 30,
                })} 
                aria-invalid={errors.fname ? "true" : "false"}
        />
                {errors.lname &&(
          <span className='formError'> Veuillez remplir ce champs, il doit contenir entre 2 et 30 caractères </span>
        )}
      </label>
      <br />
      <label>
        Email
        <br />
        <input type="email" id="email" name="email"
                {...register('email', {
                  require: true,
                  pattern: /^[a-z0-9._-]+@[a-z]+\.[a-z]{2,4}$/,
                })} 
                aria-invalid={errors.fname ? "true" : "false"} 
                />
                 {errors.lname &&(
          <span className='formError'> Cette adresse email n est pas valide  </span>
        )}
      </label>
      <br />
      <label htmlFor="message">
        Message
        <br />
        <input type="text" id="message" name="message"
                        {...register('lname', {
                          require: true,
                          minLength: 10,
                          maxLength: 350,
                        })} 
                        aria-invalid={errors.fname ? "true" : "false"}
        />
        {errors.lname &&(
          <span className='formError'> Ce champs doit contenir entre 10 et 350 caractères  </span>
        )}
        </label>
        <br />
      <button className="btn" type="submit" disabled={state.submitting}>Envoyer</button>
    </form>
  );
}

export default MyForm;*/
import { useForm, ValidationError } from '@formspree/react';

function MyForm() {
  const [state, handleSubmit] = useForm("mbjvowlv");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>

      <label htmlFor="fullname">
        Nom et Prénom
        <br />
        <input type="text" id="fullname" name="fullname" 
        />
        <ValidationError 
        prefix="text" 
        errors={state.errors}
      />
        </label>
        <br />
      <label htmlFor="email">
        Email
        <br />
        <input
        id="email"
        type="email" 
        name="email"
      />
      </label>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
       <br />
      <label htmlFor="message">
        Message
        <br />
        <input type="text" id="message" name="message"
        />
         </label>
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className="btn" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default MyForm;