import {TextareaHTMLAttributes} from "react";
import {useForm, useFormContext} from "react-hook-form";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
  label : string;
  name : string;
}

export const TextareaInput = ({label, name, ...props} : TextareaProps) => {
  const { register } = useFormContext()
  
  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        { label }
      </label>
      <div className="mt-2">
        <textarea
          name={name}
          className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...props}
          {...register(name)}
        />
      </div>
    </div>
  );
}

