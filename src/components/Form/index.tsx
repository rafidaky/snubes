import "./styles.css";

export const Form = () => {
  return (
    <div className="Form-Container">
      <span className="Form-Title">
        Find inbound call centers for your company
      </span>
      <span className="Form-Desc">
        Use our AI and Big Data driven call center sourcing solution
      </span>
      <div className="Form-Row-Wrapper">
        <span className="Form-Input-Label">Company</span>
        <input placeholder="Company" className="Form-Input"></input>
      </div>
      <div className="Form-Row-Wrapper">
        <span className="Form-Input-Label">Name</span>
        <input placeholder="Full name" className="Form-Input"></input>
      </div>
      <div className="Form-Row-Wrapper">
        <span className="Form-Input-Label">Phone</span>
        <input placeholder="+49" className="Form-Input"></input>
      </div>
      <div className="Form-Row-Wrapper">
        <span className="Form-Input-Label">E-mail</span>
        <input placeholder="name@mail.com" className="Form-Input"></input>
      </div>
      <button className="Form-Button">Get informed</button>
    </div>
  );
};
