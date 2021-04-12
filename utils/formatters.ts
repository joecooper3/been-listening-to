export const artistNamesToString = (arr: string[]): string => {
  if (arr.length === 1) {
    return arr[0];
  } else if (arr.length === 2) {
    return `${arr[0]} & ${arr[1]}`;
  } else if (arr.length > 2) {
    let finalString: string = "";
    for (let i = 0; i < arr.length; i++) {
      if (i !== arr.length - 1) {
        finalString += `${arr[i]}, `;
      } else {
        finalString += `and ${arr[i]}`;
      }
    }
    return finalString;
  }
};

export default artistNamesToString;

export const dateToNumber = (inp: Number | Date): number => {
  const dateObj = new Date(inp.toString());
  return dateObj.getTime();
};

export const genresToString = (arr: string[]): string => {
  if (arr.length < 1) {
    return;
  }
  if (arr.length === 1) {
    return arr[0];
  } else {
    let finalString = "";
    for (let i = 0; i < arr.length; i++) {
      if (i === arr.length - 1) {
        finalString += arr[i];
      } else {
        finalString += `${arr[i]}, `;
      }
    }
    return finalString;
  }
};
