import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { X } from "lucide-react";
import { useModalStore } from "@/stores/useModalStore";

export default function PhoneInputModal() {
   const [phone, setPhone] = useState("");
   const { isOpen, closeModal } = useModalStore();

   const isValidPhone = /^09\d{9}$/.test(phone);

   const handleContinue = () => {
      if (isValidPhone) {
         alert(`شماره وارد شده: ${phone}`);
         closeModal();
      } else {
         alert("شماره معتبر نیست. لطفاً یک شماره موبایل صحیح وارد کنید.");
      }
   };

   return (
      <>
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  key="modal-backdrop"
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={closeModal}
               >
                  <motion.div
                     key="modal-content"
                     className="bg-white rounded-2xl shadow-xl w-[90%] max-w-sm p-6 text-right relative"
                     initial={{ y: 100, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     exit={{ y: 100, opacity: 0 }}
                     transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                     }}
                     onClick={(e) => e.stopPropagation()}
                  >
                     <Button
                        className="absolute left-4 top-4 text-gray-500 hover:text-red-500 transition bg-transparent hover:bg-transparent cursor-pointer"
                        onClick={closeModal}
                     >
                        <X className="w-5 h-5" />
                     </Button>

                     <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                     >
                        شماره موبایل خود را وارد کنید
                     </label>
                     <Input
                        id="phone"
                        type="tel"
                        placeholder="مثلاً 09121234567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="text-right mb-4"
                     />
                     <Button
                        onClick={handleContinue}
                        disabled={!isValidPhone}
                        className="w-full"
                     >
                        ادامه
                     </Button>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
}
