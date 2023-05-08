import { useState } from "react";
import { CardElement, useElements, useStripe, Elements, ExpressCheckoutElement, } from "@stripe/react-stripe-js";
import { useCreateUserCard } from "@/hooks/user/user_card";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";

export const CardForm = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const stripe = useStripe();
    const elements = useElements();

    const { isLoading, data: userCardData } = useCreateUserCard()

    const router = useRouter()
    const queryClient = useQueryClient()

    if (isLoading) return <h2>Loading...</h2>
    console.log(userCardData)

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);
        const expressCheckoutElement = elements.getElement(ExpressCheckoutElement)

        const { error, setupIntent } = await stripe.confirmCardSetup(userCardData?.client_secret, {
            payment_method: {
                card: cardElement,
            },
        });

        // const session = await stripe. checkout.sessions.create({
        //     payment_method_types: ['card'],
        //     mode: 'setup',
        //     customer: userCardData?.client_secret,
        //     success_url: 'https://localhost:3000/panel/profile/card/create',
        // });

        if (error) {
            setError(error.message);
            setSuccess("");
        } else {
            setError("");
            setSuccess("Card added successfully!");
            queryClient.invalidateQueries(["user"])
            router.push("/panel/profile/card")
            // Save the card in your database and associate it with the user
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Add Card
            </button>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}
            <pre>{JSON.stringify(userCardData, null, 2)}</pre>
        </form>
    );
};
