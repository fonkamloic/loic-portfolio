"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { z } from "zod";

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
import { MapPin, Mail, Phone, SendHorizonal, Loader2 } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

type contactInfo = {
  label: string;
  value: string;
  icon: React.ReactNode;
};

const contactInfo: contactInfo[] = [
  {
    label: "Email",
    value: "fonkamloic@gmail.com",
    icon: <Mail className="w-5 h-5 text-primary" />,
  },
  {
    label: "Location",
    value: "Utica, NY",
    icon: <MapPin className="w-5 h-5 text-primary" />,
  },
  {
    label: "Phone",
    value: "(240)-791-9142",
    icon: <Phone className="w-5 h-5 text-primary" />,
  },
];

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
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);
      await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      toast.success("Message sent successfully.");
      form.reset();
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
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
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Message..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
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
  return (
    <section className="bg-background/[0.2]">
      <div className="">
        <div className="max-w-6xl mx-auto py-32 px-8">
          <div className="flex flex-col md:items-start gap-8 md:flex-wrap md:flex-row">
            <div className="flex-1 mb-8 md:mb-0 space-y-10">
              <div className="flex items-center gap-3">
                <div className="w-20 h-1 bg-primary"></div>
                <h3 className="text-2xl font-bold tracking-wide">Contact me</h3>
              </div>
              <p className="text-normal font-light tracking-wide text-zinc-400">
                I&apos;m always open to new opportunities, collaborations, and
                conversations. Feel free to reach out to me.
              </p>

              <div className="space-y-4 mt-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    {info.icon}
                    <div>
                      <p className="text-normal font-light tracking-wide">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 border border-zinc-700 rounded-lg p-8 bg-background/[0.4]">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
