import { useNavigate } from "react-router-dom";

export const GoBack = () => {
  let navigate = useNavigate();
  navigate(-1);
};

export const GoForward = () => {
  let navigate = useNavigate();
  navigate(1);
};
