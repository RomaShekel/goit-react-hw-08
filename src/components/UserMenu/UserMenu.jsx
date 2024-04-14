import { useDispatch, useSelector } from "react-redux";
import { selectUsername } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { logout } from "../../redux/auth/operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome {username}!!!</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}