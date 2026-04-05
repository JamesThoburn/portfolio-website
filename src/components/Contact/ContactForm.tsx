"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    async function handleSubmit(e: any) {
        e.preventDefault();
        if (!formRef.current) return;
        setFormStatus("loading");

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            setFormStatus("success");
            formRef.current.reset();
        } catch (error: any) {
            console.error(error.status);
            console.error(error.text);
            setFormStatus("error");
        }
    }

    return (
        <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full max-w-md mx-auto"
        >
            <h1 className="text-3xl font-bold">Contact Me</h1>
            <input 
                name="name" 
                type="text" 
                placeholder="Name" 
                required 
                className="w-full px-4 py-3 rounded-xl bg-neutral-100 text-neutral-900 placeholder-neutral-400 text-sm outline-none focus:ring-2 focus:ring-neutral-300 transition"
            />
            <input 
                name="email"
                type="email"
                placeholder="Email"
                required 
                className="w-full px-4 py-3 rounded-xl bg-neutral-100 text-neutral-900 placeholder-neutral-400 text-sm outline-none focus:ring-2 focus:ring-neutral-300 transition"
            />
            <textarea 
                name="message"
                placeholder="Message"
                required 
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-neutral-100 text-neutral-900 placeholder-neutral-400 text-sm outline-none focus:ring-2 focus:ring-neutral-300 transition resize-none"
            />
            <button
                type="submit"
                disabled={formStatus === "loading"}
                className="w-full py-3 rounded-xl bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-700 disabled:opacity-50 transition"
            >
                {formStatus === "loading" ? "Sending..." : "Send"}
            </button>
            {formStatus === "success" && <p>Message sent!</p>}
            {formStatus === "error" && <p>Something went wrong. Try again.</p>}
        </form>
    )
}