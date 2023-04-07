import { useRouter } from "next/router";

export function CurrentColor() {
    const router = useRouter();

    if(router.pathname.includes('panel')) {
        if (router.pathname.includes('profile')) {
            return "customGreen";
        } else if ((router.pathname.includes('event') && router.pathname.split('/').length<4)  || router.pathname.includes('event/create') || router.pathname.includes('event/discount') || router.pathname.includes('event/special')) {
            return "customBlue";
        } else if (router.pathname.includes('pos') && router.pathname.split('/').length<4) {
            return "customDaisy";
        } else if (router.pathname.includes('ticket')) {
            return "customPurple";
        } else if (router.pathname.includes('admin')) {
            return "customPink";
        } else {
            return "customGreen";
        }

    } else if (router.pathname.includes('landing')) {
        if (router.pathname.includes('contact')) {
            return "customGreen";
        } else if (router.pathname.includes('about')) {
            return "customBlue";
        } else if (router.pathname.includes('advert')) {
            return "customYellow";
        } else if (router.pathname.includes('donation')) {
            return "customRed";
        } else if (router.pathname.includes('newsletter')) {
            return "customDaisy";
        } else if (router.pathname.includes('partner')) {
            return "customPink";
        } else if (router.pathname.includes('ticket')) {
            return "customPurple";
        } else {
            return "customGreen";
        }
    } else {
        return "customGreen";
    }
};