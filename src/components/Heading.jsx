const Heading = ({ desc, title }) => {
  return (
    <div>
      <p>{desc}</p>
      <h1 className="text-4xl font-bold">{title}</h1>
    </div>
  );
};

export default Heading;
