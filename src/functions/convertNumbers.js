export function convertNumbers(number) {
  if (number) {
    if (number >= 1000 && number < 1000000) {
      return (
        number.toString().slice(0, -3) +
        "." +
        number.toString().slice(-3, -1) +
        "K"
      );
    } else if (number >= 1000000 && number < 1000000000) {
      return (
        number.toString().slice(0, -6) +
        "." +
        number.toString().slice(-6, -4) +
        "M"
      );
    } else if (number >= 1000000000) {
      return (
        number.toString().slice(0, -9) +
        "." +
        number.toString().slice(-9, -7) +
        "B"
      );
    }
  }
}
