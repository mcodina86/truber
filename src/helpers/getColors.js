const getColors = color => {
  switch (color.toLowerCase()) {
    case "white":
    case "is-white":
      return "is-white";
    case "light":
    case "is-light":
      return "is-light";
    case "dark":
    case "is-dark":
      return "is-dark";
    case "black":
    case "is-black":
      return "is-black";
    case "text":
    case "is-text":
      return "is-text";
    case "link":
    case "is-link":
      return "is-link";
    case "info":
    case "is-info":
      return "is-info";
    case "success":
    case "is-success":
      return "is-success";
    case "warning":
    case "is-warning":
      return "is-warning";
    case "danger":
    case "is-danger":
      return "is-danger";
    case "primary":
    case "is-primary":
    default:
      return "is-primary";
  }
};

export default getColors;
