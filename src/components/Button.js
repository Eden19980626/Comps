import className from 'classnames';
// import { GoAlert } from 'react-icons/go';
function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  square,
  ...rest
}) {
  const classes = className(rest.className, 'btn flex items-center', {
    'btn-primary': primary,
    'btn-secondary': secondary,
    'btn-success': success,
    'btn-warning': warning,
    'btn-danger': danger,
    'btn-outline': outline,
    'btn-square': square,
  });
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      return new Error('只允許一種類型是true');
    }
  },
};

export default Button;
