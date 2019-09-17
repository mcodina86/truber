const getSizes = size => {
  switch (size.toLowerCase()) {
    case "l":
    case "large":
    case "is-large":
      return "is-large";
    case "m":
    case "medium":
    case "is-medium":
      return "is-medium";
    case "s":
    case "small":
    case "is-small":
      return "is-small";
    case "n":
    case "normal":
    case "is-normal":
    default:
      return "is-normal";
  }
};

export default getSizes;
