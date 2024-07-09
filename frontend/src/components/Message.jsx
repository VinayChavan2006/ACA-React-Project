const Message = ({ variant = "info", children }) => {
  const getVariantClass = () => {
    switch (variant) {
      case "success":
        return "bg-green-100 text-green-800 border border-green-300";
      case "error":
        return "bg-red-100 text-red-800 border border-red-300";
      case "info":
        return "bg-blue-100 text-blue-800 border border-blue-300";
      case "warning":
        return "bg-yellow-100 text-yellow-800 border border-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 border border-gray-300";
    }
  };

  return (
    <div className={`p-4 rounded-lg ${getVariantClass()}`}>
      {children}
    </div>
  );
};

export default Message;