const getColorOfBadge = type => {
    switch (type) {
      case "normal":
      case "ground":
      case "rock":
      case "steel":
        return "badge-secondary";
      case "water":
      case "ice":
      case "flying":
        return "badge-primary";
      case "fighting": 
      case "fire":
        return "badge-danger";
      case "poison": 
      case "electric":
        return "badge-warning";
      case "grass":
      case "bug":
        return "badge-success";
      default:
        return "badge-info";
    }
  };

  export default getColorOfBadge;