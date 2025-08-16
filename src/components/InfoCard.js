const InfoCard = ({ title, children }) => {
  return (
    <div className="bg-primary-light shadow-lg rounded-xl p-4 border-l-2 border-b-2 border-primary">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="mb-4 tracking-wider">{children}</p>
    </div>
  );
};

export default InfoCard;
