import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const className =
    "my-3 inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-500 disabled:text-stone-100 sm:px-6 sm:py-4";
  const base =
    "my-3 inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-500 disabled:text-stone-100";

  const styles = {
    primary: `${base} px-4 py-3 sm:px-6 sm:py-4`,
    small: `${base} px-3 py-2 sm:px-4 sm:py-2 text-sm`,
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
