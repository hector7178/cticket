// 404.js
import Image from "next/image";
import Link from "next/link";

export default function FourOhThree() {
    return <>
        <main className="relative isolate min-h-full">
            <Image
                src="/images/errors/419.png"
                alt="Error"
                fill
                className="absolute inset-0 -z-10 h-screen w-screen object-cover object-top"
            />
            <div className="h-screen mx-auto max-w-7xl px-6 py-32 text-center sm:py-20 lg:px-8">
                <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Forbidden</h1>
                <p className="mt-4 text-base sm:mt-6">Sorry, you don't have access to this module.</p>
                <div className="mt-10 flex justify-center">
                    <Link href="/" className="text-sm font-semibold leading-7">
                        <span aria-hidden="true">&larr;</span> Back to home
                    </Link>
                </div>
            </div>
        </main>
    </>
}