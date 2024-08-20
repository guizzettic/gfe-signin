interface ErrorMessageProps {
  errorType: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorType }) => {
  return (
    <div className="absolute left-1/2 top-10 z-50 flex w-[342px] max-w-full -translate-x-1/2 transform items-center gap-3 rounded-full bg-red-50 py-1 pl-1 pr-2.5 sm:top-7 sm:w-auto">
      <div className="flex items-center rounded-full bg-white px-2.5 py-0.5">
        <span className="text-center text-sm font-medium text-red-800 shadow">
          Error
        </span>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-sm font-medium text-red-600">{errorType}</span>
      </div>
    </div>
  );
};

export default ErrorMessage;
