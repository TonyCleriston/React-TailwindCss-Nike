const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button className={`flex items-center justify-center gap-2 px-7 
    py-4 border font-montserrat text-lg 
    leading-none ${ backgroundColor ? `${backgroundColor} ${borderColor} ${textColor} ` : 'text-white border-coral-red bg-coral-red'}  rounded-full ${fullWidth && 'w-full'}`}>
      {label}
      {iconUrl && (
        <img src={iconUrl} alt="seta" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
