/** @format */
import { useState, useEffect } from 'react';
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { Heading } from '@/components/headers/admin/heading';
// Forms
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomError, CustomLabel, CustomCancel, CustomSubmit } from '@/components/forms';
import { FormStyles } from '@/helpers';
// Stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { getIdToken } from "firebase/auth";
import { getMe } from "@/api/user/user";
import { updateUser } from "@/api/user/user";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const ProfileCardCreate = () => {
    const t = useTranslations("Panel_SideBar");
    const stripe = useStripe();
    const elements = useElements();

    const router = useRouter()
    const breadcrumb = [
        { page: t('user'), href: '/panel/profile' },
        { page: t('profile.card.name'), href: '/panel/profile/card' },
        { page: t('profile.card.create'), href: '' }
    ]

    useEffect(() => {
        console.log("getIdToken:", getIdToken)
        console.log("getMe:", getMe)
    }, [])

    const addCardMutation = useMutation(
        async (data) => {
            const response = await fetch("/api/create-customer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to add card");
            }

            return response.json();
        },
        {
            onSuccess: () => {
                router.push("/panel/profile/card");
            },
            onError: (error) => {
                console.error(error);
            },
        }
    );

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        if (!cardElement) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
        });

        if (error) {
            console.error("[error]", error);
        } else {
            console.log("[PaymentMethod]", paymentMethod);

            // Call your backend API to store the payment method ID and other relevant information
            // updateUser()
            const cardData = {
                // customerId,
                source: paymentMethod.id,
                metadata: {
                    // Add any metadata you want to store with the card
                },
            };
            console.log(cardData)

            // Using @tanstack/react-query
            //             const mutation = useMutation(updateUser(user));

            //             mutation.mutate();

            //             const { user: existUser, queryClient, isLoading } = useUserAuthObserver();
            //   const updateUserMutation = () => {
            //     queryClient.setQueryData(['user'], () => null);
            //     localStorage.clear();
            //   };
        }
    };

    return (
        <>
            {/* Breadcrumb section */}
            <div>
                <Heading breadcrumb={breadcrumb} />
            </div>
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="card-element">Card</label>
                            <CardElement id="card-element" />
                        </div>
                        <button type="submit" disabled={!stripe}>
                            Save Card
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

const ProfileCardCreateWithElements = () => (
    <Elements stripe={stripePromise}>
        <ProfileCardCreate />
    </Elements>
);
ProfileCardCreateWithElements.Layout = AdminLayout;
export default ProfileCardCreateWithElements;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
