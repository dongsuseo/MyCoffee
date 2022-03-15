import { atom } from "recoil";

const atoms = () => {
  const EmailState = atom({
    key: EmailState,
    default: "",
  });
  const PasswordState = atom({
    key: PasswordState,
    default: "",
  });
  const LogInState = atom({
    key: LogInState,
    default: false,
  });
};

export default atoms;
