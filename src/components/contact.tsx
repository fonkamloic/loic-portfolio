"use client";
import React, { useEffect, useRef } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import SectionHeading from "./section-heading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SendHorizonal, Loader2 } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { navItems } from "@/constants";
import Link from "next/link";


const formSchema = z.object({
  name: z.string().min(2, {
    message: "Please introduce yourself.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address. so I can get back to you.",
  }),
  message: z.string().min(10, {
    message: "Please provide a detailed message.",
  }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  // 2. Define a submit handler.
  const honeypotRef = React.useRef<HTMLInputElement>(null);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, website: honeypotRef.current?.value ?? "" }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(`${data.name}: ${data.message}`);
      }

      toast.success("Message sent successfully.");
      form.reset();
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Your message..." className="min-h-[10rem] resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Honeypot — hidden from real users, filled by bots */}
        <input
          ref={honeypotRef}
          type="text"
          name="website"
          autoComplete="off"
          tabIndex={-1}
          aria-hidden="true"
          className="absolute opacity-0 h-0 w-0 overflow-hidden pointer-events-none"
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              Send message <SendHorizonal className="w-4 h-4 ml-3" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}

function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cols = sectionRef.current?.querySelectorAll(".contact-col");
    if (!cols?.length) return;

    gsap.set(cols, { opacity: 0, y: 30 });

    const tween = gsap.to(cols, {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      gsap.set(cols, { opacity: 1, y: 0 });
    };
  }, []);

  return (
    <section className="bg-background/[0.2]" id="contact">
      <div className="">
        <div className="max-w-6xl mx-auto py-32 px-8" ref={sectionRef}>
          <SectionHeading number={4} title="Contact" />
          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            <nav className="contact-col hidden md:flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-4 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-all font-bold"
                >
                  <span className="block h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="contact-col flex-1 border border-zinc-700 rounded-lg p-8 bg-background/[0.4]">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
