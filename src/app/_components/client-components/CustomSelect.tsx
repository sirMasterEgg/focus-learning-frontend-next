"use client";
// import { FaAngleDown } from "react-icons/fa6";
import { forwardRef, InputHTMLAttributes } from "react";

type CustomSelectProps = {
  name: string;
  options: {
    label: string;
    value: string;
    optionProps?: React.OptionHTMLAttributes<HTMLOptionElement>;
  }[];
} & InputHTMLAttributes<HTMLSelectElement>;

const CustomSelect = forwardRef<HTMLSelectElement, CustomSelectProps>(
  ({ name, options, ...rest }, ref) => {
    return (
      <>
        <select name={name} ref={ref} {...rest} className="input">
          {options.map((option, index) => (
            <option key={index} value={option.value} {...option.optionProps}>
              {option.label}
            </option>
          ))}
        </select>
      </>
    );
  }
);

/*const CustomSelect = forwardRef<HTMLSelectElement, CustomSelectProps>(
  ({ name, options, value, onChange, ...rest }, ref) => {
    const [selectedOption, setSelectedOption] = useState<string>(
      options.find((option) => option.value === value)?.value ||
        options[0].value
    );

    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const selectRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (option: string) => {
      if (onChange) {
        onChange({
          target: { name, value: option },
        } as React.ChangeEvent<HTMLSelectElement>);
      }
      setSelectedOption(option);
      setIsDropdownOpen(false);
      setFocusedIndex(-1);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(e.target as HTMLDivElement)
      ) {
        setIsDropdownOpen(false);
      }
    };

    useEffect(() => {
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, []);

    useEffect(() => {
      const selectedOption = options.find((option) => option.value === value);
      if (selectedOption) {
        setSelectedOption(selectedOption.value);
      } else {
        const firstOptionValue = options[0]?.value;
        if (firstOptionValue !== undefined) {
          setSelectedOption(firstOptionValue);
          if (onChange) {
            onChange({
              target: { name, value: firstOptionValue },
            } as React.ChangeEvent<HTMLSelectElement>);
          }
        }
      }
    }, [value, options, onChange, name]);

    const handleKeyDown = (event: unknown) => {
      const e = event as KeyboardEvent;
      if (e.key === " ") {
        e.preventDefault();
        toggleDropdown();
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (isDropdownOpen && focusedIndex >= 0) {
          handleOptionClick(options[focusedIndex].value);
        } else {
          toggleDropdown();
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (!isDropdownOpen) {
          toggleDropdown();
        } else {
          setFocusedIndex((prevIndex) =>
            prevIndex === options.length - 1 ? 0 : prevIndex + 1
          );
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusedIndex((prevIndex) =>
          prevIndex <= 0 ? options.length - 1 : prevIndex - 1
        );
      } else if (e.key === "Escape") {
        setIsDropdownOpen(false);
        setFocusedIndex(-1);
      }
    };

    useEffect(() => {
      if (focusedIndex !== -1 && isDropdownOpen) {
        const item = document.getElementById(`select-item-${focusedIndex}`);
        if (item) item.scrollIntoView({ block: "nearest" });
      }
    }, [focusedIndex, isDropdownOpen]);

    return (
      <div
        className="custom-select ring-0 outline-offset-1 outline-gray-400"
        tabIndex={0}
        role="listbox"
        onKeyDown={(e) => handleKeyDown(e)}
        ref={selectRef}
      >
        <select ref={ref} {...rest} name={name} className="hidden">
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <div
          className={`select-selected border rounded p-2 ring-0 outline-1 outline-gray-400 w-full h-10 ${
            isDropdownOpen ? "select-arrow-active" : ""
          }`}
          onClick={() => toggleDropdown()}
        >
          {selectedOption}
        </div>

        <div
          className={`select-items rounded bg-white transition-all duration-500 overflow-y-hidden ${
            isDropdownOpen ? "max-h-screen ease-in border" : "max-h-0 ease-out"
          }`}
        >
          {options.map((option, index) => {
            let roundedClass = "";
            if (index === 0) {
              roundedClass = "rounded-t-[3px]";
            }
            if (index === options.length - 1) {
              roundedClass = "rounded-b-[3px]";
            }
            return (
              <div
                id={`select-item-${index}`}
                key={index}
                className={`${
                  selectedOption === option.value || focusedIndex === index
                    ? "same-as-selected"
                    : ""
                } p-2 w-full h-10 ${roundedClass}`}
                onClick={() => handleOptionClick(option.value)}
                onMouseEnter={() => setFocusedIndex(index)}
              >
                {option.label}
              </div>
            );
          })}
        </div>

        <FaAngleDown
          onClick={() => toggleDropdown()}
          className={`absolute top-3 right-2 z-[99] cursor-pointer transition duration-500 rotate-0 ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        />
      </div>
    );
  }
);*/

CustomSelect.displayName = "CustomSelect";

export default CustomSelect;
