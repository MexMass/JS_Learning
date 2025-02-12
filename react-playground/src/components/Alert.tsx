interface Props {
  heading: string;
  text: string;
  text2?: string;
}

const Alert = ({ heading, text, text2 }: Props) => {
  return (
    <div className="alert alert-success" role="alert">
      <h4 className="alert-heading">{heading}</h4>
      <p>{text}</p>
      {text2 ? (
        <>
          <hr />
          <p className="mb-0">{text2}</p>
        </>
      ) : null}
    </div>
  );
};

export default Alert;
