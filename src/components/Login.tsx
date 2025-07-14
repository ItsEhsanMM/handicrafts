import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function PhoneInputForm() {
   const [phone, setPhone] = useState("");

   const isValidPhone = /^09\d{9}$/.test(phone);

   const handleContinue = () => {
      if (isValidPhone) {
         // Handle next step (e.g., send OTP or go to next page)
         alert(`شماره وارد شده: ${phone}`);
      } else {
         alert("شماره معتبر نیست. لطفاً یک شماره موبایل صحیح وارد کنید.");
      }
   };

   return (
      <div
         className="w-full max-w-sm mx-auto mt-10 flex flex-col gap-4 text-right"
         dir="rtl"
      >
         <label
            htmlFor="phone"
            className="text-sm font-medium"
         >
            شماره موبایل خود را وارد کنید
         </label>
         <Input
            id="phone"
            type="tel"
            placeholder="مثلاً 09121234567"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="text-right"
         />
         <Button
            onClick={handleContinue}
            disabled={!isValidPhone}
         >
            ادامه
         </Button>
      </div>
   );
}
