"use client";
import { forwardRef, InputHTMLAttributes, useEffect, useState } from "react";

type CurrencyInputProps = {
  name: string;
  onChange: (value: string) => void;
  value?: string;
  prefix?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const CurrencyInput = forwardRef<HTMLInputElement, CurrencyInputProps>(
  (props, ref) => {
    const PREFIX = props.prefix || "";
    const [display, setDisplay] = useState<string>(PREFIX);
    const [value, setValue] = useState<string>(props.value || "");

    const formatCurrency = (value: string) => {
      const cleanedValue = value.replace(/\D/g, "");

      if (cleanedValue === "") return PREFIX;

      const number = Number(cleanedValue);
      return PREFIX + number.toLocaleString("id-ID", { style: "decimal" });
    };

    useEffect(() => {
      if (value) {
        setDisplay(formatCurrency(value));
      } else {
        setDisplay(PREFIX);
      }

      props.onChange(value.replace(/\D/g, ""));
    }, [value]);

    return (
      <input
        {...props}
        type="text"
        inputMode="numeric"
        value={display}
        onChange={(e) => setValue(e.currentTarget.value)}
        ref={ref}
        disabled={props.disabled}
        name={props.name}
        onBlur={props.onBlur}
      />
    );
  }
);

CurrencyInput.displayName = "CurrencyInput";

export default CurrencyInput;
