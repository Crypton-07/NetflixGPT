export const checkValidData = (email, password, name) => {
  // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const isEmailValid = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email);
  const passwordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid = /^[a-zA-Z0-9]{2,30}$/.test(name);

  if (!isEmailValid) return "Email is not valid";
  if (!passwordValid) return "Password is not valid";
  if (!isNameValid) return "Name is not valid";
  return null;
};
