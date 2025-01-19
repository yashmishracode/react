let CurentTime = () => {
  let time = new Date();
  return (
    <p className="lead">
      This is the Currnt Time : {time.toLocaleDateString()}-{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurentTime;
