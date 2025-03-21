export const firstLetterUpperCase = (value: string | number) => {
  const valueString: string = value.toString();
  const firstLetterUpper = valueString.charAt(0).toUpperCase();
  const restPartOfWord = valueString.slice(1);

  return firstLetterUpper + restPartOfWord;
};
