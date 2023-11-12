const Theme = ({ themes }) => {
  return (
    <div>
      {themes.map((theme) => {
        return (
          <div key={theme.id}>
            <h2>
              Тема: {theme.question} / Месяц: {theme.month}
            </h2>
            {theme.content.map((value, idx) => (
              <ul className="item" key={idx} data-tooltip={theme.executor[idx]}>
                {theme.content.indexOf(value) + 1}. {value}
              </ul>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Theme;
