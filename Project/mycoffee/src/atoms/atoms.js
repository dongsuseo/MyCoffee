import { atom } from "recoil";

export const EmailState = atom({
  key: "EmailState",
  default: "",
});
export const PasswordState = atom({
  key: "PasswordState",
  default: "",
});
export const LogInState = atom({
  key: "LogInState",
  default: [],
});
export const isClickedSideBarState = atom({
  key: "isClickedSideBarState",
  default: false,
})

const atoms = () => {
};

export default atoms;
