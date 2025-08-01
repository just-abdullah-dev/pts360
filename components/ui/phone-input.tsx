"use client";

import { useState } from "react";
import { Input, InputProps } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PhoneInputProps extends Omit<InputProps, "onChange"> {
  defaultCountry?: string;
  onChange?: (value: string) => void;
}

const countryCodes = [
  { code: "PK", name: "Pakistan", dialCode: "+92" },
  { code: "US", name: "United States", dialCode: "+1" },
  // Add more countries as needed
];

export function PhoneInput({
  defaultCountry = "US",
  onChange,
  ...props
}: PhoneInputProps) {
  const [country, setCountry] = useState(defaultCountry);
  const [phoneNumber, setPhoneNumber] = useState("");

  const selectedCountry = countryCodes.find((c) => c.code === country);

  const handleCountryChange = (value: string) => {
    setCountry(value);
    triggerOnChange(value, phoneNumber);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);
    triggerOnChange(country, value);
  };

  const triggerOnChange = (countryCode: string, number: string) => {
    if (onChange) {
      const country = countryCodes.find((c) => c.code === countryCode);
      onChange(`${country?.dialCode} ${number}`);
    }
  };

  return (
    <div className="flex gap-2">
      <Select value={country} onValueChange={handleCountryChange}>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Country" />
        </SelectTrigger>
        <SelectContent>
          {countryCodes.map((country) => (
            <SelectItem key={country.code} value={country.code}>
              {country.name} ({country.dialCode})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        {...props}
        value={phoneNumber}
        onChange={handlePhoneChange}
        placeholder="Phone number"
      />
    </div>
  );
}