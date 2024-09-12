interface ButtonProps {
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full rounded bg-indigo-700 px-3.5 py-2.5 text-sm font-medium text-white"
    >
      {children}
    </button>
  );
};

export default Button;
