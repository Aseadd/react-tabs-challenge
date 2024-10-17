const Tab = ({ content }) => {
  return (
    <div className="card">
      <div className="content">
        <h1>{content.title}</h1>
        <p>{content.content}</p>
      </div>
    </div>
  );
};

export default Tab;
