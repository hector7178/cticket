// Helpers
import { CurrentColor } from "@/helpers/currentColor";

export function FormStyles(type: string) {
    const currentColor = CurrentColor();

    switch (type) {
        case 'area':
            return `block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-2 ring-inset ring-customForm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-${currentColor} sm:text-sm sm:leading-6`
        case 'checkbox':
            return `h-4 w-4 rounded border-gray-300 text-${currentColor} focus:ring-${currentColor}`
        case 'input':
            return `block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-2 ring-inset ring-customForm placeholder:text-customForm focus:border-0 focus:ring-2 focus:ring-inset focus:ring-${currentColor} sm:text-sm sm:leading-6`
        case 'radio':
            return `h-4 w-4 border-gray-300 text-${currentColor} focus:ring-${currentColor}`;
        case 'select':
            return `block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-customForm ring-2 ring-inset ring-customForm focus:ring-2 focus:ring-${currentColor} sm:text-sm sm:leading-6`
        case 'search':
            return `block w-full rounded-lg border-0 px-3 py-1.5 shadow-sm ring-2 ring-inset ring-customForm placeholder:text-customForm focus:border-0 focus:ring-2 focus:ring-inset focus:ring-${currentColor} sm:text-sm sm:leading-6`
        case 'label':
            return `block text-sm font-medium leading-6 text-customForm`
        case 'cancel':
            return `inline-flex justify-center rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-customForm hover:bg-gray-50`
        case 'submit':
            return `inline-flex justify-center rounded-md bg-${currentColor} py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-${currentColor}-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700`
    }
};