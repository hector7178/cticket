import { useTranslations } from "next-intl";
import { FormStyles } from "@/helpers"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";



export const SearchInput = () => {
  const tc = useTranslations("Common_Forms");

  return (
    <>
      <div className="relative mt-2 rounded-md shadow-sm w-[70%]">
        <input
          type="text"
          name="businessname"
          id="businessname"
          autoComplete={tc('place_search')}
          placeholder={tc('place_search')}
          className={FormStyles('search')}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
      </div>
    </>
  )
}
