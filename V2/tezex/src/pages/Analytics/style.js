const style = (theme, scale = 1) => {
  return {
    root: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: `calc(1.11vw * ${scale})`,
    },
  };
};

export default style;
