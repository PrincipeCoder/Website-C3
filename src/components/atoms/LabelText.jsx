const LabelText = ({ id, label, form, className }) => {
  return (
    <label
      htmlFor={id}
      form={form}
      className={`font-ps font-normal text-white ${className}`}
    >
      {label}
    </label>
  );
};

export default LabelText;
