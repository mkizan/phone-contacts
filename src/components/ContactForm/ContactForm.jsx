import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { withHookFormMask } from "use-mask-input";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addContactThunk } from "store/contacts/operations";

const schema = yup
  .object()
  .shape({
    name: yup
      .string()
      .min(3, "must be at least 3 characters long")
      .max(30, "must not be longer than 30 characters")
      .required("Enter the name"),
    phone: yup
      .string()
      .matches(/^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, "must be a valid number")
      .required("Enter phone number"),
  })
  .required();

const ContactForm = ({ contacts }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleInputChange = (e) => setValue(e.target.name, e.target.value);

  const handleSubmitForm = (data) => {
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts`);
      return;
    } else if (contacts.find((contact) => contact.phone === data.phone)) {
      alert(`${data.phone} is already in contacts`);
      return;
    }
    dispatch(addContactThunk(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          id="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          {...register("name", { required: true })}
          onChange={handleInputChange}
          autoComplete="off"
          placeholder="Alisa"
        />
      </label>
      {errors.name && <p>{errors.name?.message}</p>}
      <label htmlFor="phone">
        Phone
        <input
          type="text"
          name="phone"
          inputMode="numeric"
          {...withHookFormMask(
            register("phone", { required: true }),
            "+38 (999) 999-99-99"
          )}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          autoComplete="off"
          placeholder="+38 (999) 999-99-99"
        />
      </label>
      {errors.phone && <p>{errors.phone?.message}</p>}
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

export default ContactForm;
