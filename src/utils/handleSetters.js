export const handleChangeCreator = setter => event =>
  setter(event.target.value);

export const clearInput = (setter, value) => () => setter(value);
