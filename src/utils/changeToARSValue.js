const changeToARSValue = value => {
  const valueToString = Array.from(value.toString());

  if (valueToString.length >= 4)
    valueToString.splice(valueToString.length - 3, 0, '.');

  return valueToString.join('');
};

export default changeToARSValue;
