import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { forwardRef, useState } from "react";

type InputPasswordWithEyeProps = {
  label: string;
  placeholder: string;
  name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputPasswordWithEye = forwardRef<
  HTMLInputElement,
  InputPasswordWithEyeProps
>(({ label, placeholder, name, ...rest }, ref) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      <label className="flex flex-col gap-1 relative">
        <span className="font-bold">{label}</span>
        <input
          {...rest}
          className="input"
          placeholder={placeholder}
          type={`${showPassword ? "text" : "password"}`}
          name={name}
          ref={ref}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 translate-y-0.5 top-1/2 text-gray-400"
        >
          {showPassword ? (
            <>
              <FaRegEye className="w-6 h-6" />
            </>
          ) : (
            <>
              <FaRegEyeSlash className="w-6 h-6" />
            </>
          )}
        </button>
      </label>
    </>
  );
});

InputPasswordWithEye.displayName = "InputPasswordWithEye";

export default InputPasswordWithEye;
