import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { setFormData } from "../../actions/";

export const Form: React.FunctionComponent = () => {
  const prefix = useSelector((state: any) => state.prefix);
  const state = useSelector((state: any) => state.formData);

  const dispatch = useDispatch();
  const [company, setCompany] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setEmailValid] = useState<boolean>(true);
  const [submitSuccessful, setSuccess] = useState<boolean>();

  const emailRef = useRef<HTMLInputElement>();

  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setEmailValid(re.test(String(email).toLowerCase()));
    return re.test(String(email).toLowerCase());
  };

  const saveData = () => {
    if (validateEmail(email)) {
      dispatch(
        setFormData({
          data: {
            company: company,
            name: name,
            phone: phone,
            email: email,
          },
        })
      );
      setSuccess(true);
    } else {
      setEmailValid(false);
      emailRef.current.focus();
      setSuccess(false);
    }
  };

  return submitSuccessful === true ? (
    <div className="Form-Container">
      <span className="Form-Title">Thank you for your request!</span>
      <span className="Form-Desc-Success">
        You’ve taken the first step. Our experts will get in touch with you
        soon.
      </span>
      <div className="Form-Success-Divider"> </div>
      <div className="Form-Row-Wrapper-Success">
        <div className="Form-Row-Wrapper-Success-Text-Container">
          <span className="Form-Input-Label">Company</span>
        </div>
        <span className="Form-Input-Label-Success">{state.data.company}</span>
      </div>
      <div className="Form-Row-Wrapper-Success">
        <div className="Form-Row-Wrapper-Success-Text-Container">
          <span className="Form-Input-Label">Name</span>
        </div>

        <span className="Form-Input-Label-Success">{state.data.name}</span>
      </div>
      <div className="Form-Row-Wrapper-Success">
        <div className="Form-Row-Wrapper-Success-Text-Container">
          <span className="Form-Input-Label">Phone</span>
        </div>

        <span className="Form-Input-Label-Success">{state.data.phone}</span>
      </div>
      <div className="Form-Row-Wrapper-Success">
        <div className="Form-Row-Wrapper-Success-Text-Container">
          <span className="Form-Input-Label">E-mail</span>
        </div>

        <span className="Form-Input-Label-Success">{state.data.email}</span>
      </div>
    </div>
  ) : (
    <div className="Form-Container">
      <span className="Form-Title">
        Find inbound call centers for your company
      </span>
      <span className="Form-Desc">
        Use our AI and Big Data driven call center sourcing solution
      </span>
      <div className="Form-Row-Wrapper">
        <span className="Form-Input-Label">Company</span>
        <input
          value={company}
          pattern="[A-Za-z]"
          maxLength={80}
          onChange={(event: { target: HTMLInputElement }) => {
            let value = event.target.value;
            value = value.replace(/[^A-Za-z]/gi, "");
            console.log(value);
            setCompany(value);
          }}
          placeholder="Company"
          className="Form-Input"
        ></input>
      </div>
      <div className="Form-Row-Wrapper">
        <span className="Form-Input-Label">Name</span>
        <input
          maxLength={50}
          onChange={(event: { target: HTMLInputElement }) => {
            setName(event.target.value);
          }}
          placeholder="Full name"
          className="Form-Input"
        ></input>
      </div>
      <div className="Form-Row-Wrapper">
        <span className="Form-Input-Label">Phone</span>
        <input
          onChange={(event: { target: HTMLInputElement }) => {
            const re = /^[0-9\b]+$/;
            if (event.target.value === "" || re.test(event.target.value)) {
              setPhone(event.target.value);
            }
          }}
          value={phone}
          placeholder={prefix}
          className="Form-Input"
        ></input>
      </div>
      <div className="Form-Row-Wrapper">
        <span className="Form-Input-Label">E-mail</span>
        <input
          ref={emailRef}
          onChange={(event: { target: HTMLInputElement }) => {
            setEmail(event.target.value);
          }}
          placeholder="name@mail.com"
          className={isEmailValid ? "Form-Input" : "Form-Input-Error"}
        ></input>
      </div>
      <button
        onClick={() => {
          saveData();
        }}
        className="Form-Button"
      >
        Get informed
      </button>
      <span
        className={
          submitSuccessful === false
            ? "Form-After-Submit-Error"
            : "Form-After-Submit-Error-Hidden"
        }
      >
        Your information was not submitted due to an error. Please retry.
      </span>
    </div>
  );
};
