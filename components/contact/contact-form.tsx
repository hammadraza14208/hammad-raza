"use client";

import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>();

  const onSubmit = (values: FormValues) => {
    console.log("Lead captured", values);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="glass-panel rounded-[2rem] p-8 shadow-luxe"
      noValidate
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input
            {...register("name", { required: "Please share your name." })}
            className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-accent/50"
            placeholder="Your name"
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please enter a valid email.",
              },
            })}
            className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-accent/50"
            placeholder="you@company.com"
            type="email"
          />
        </Field>
        <Field label="Company" error={errors.company?.message}>
          <input
            {...register("company", { required: "Company name helps us prepare." })}
            className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-accent/50"
            placeholder="Company"
          />
        </Field>
        <Field label="Budget" error={errors.budget?.message}>
          <select
            {...register("budget", { required: "Please select a budget range." })}
            className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-accent/50"
            defaultValue=""
          >
            <option value="" disabled>
              Select a range
            </option>
            <option value="$15k-$30k">$15k - $30k</option>
            <option value="$30k-$60k">$30k - $60k</option>
            <option value="$60k-$120k">$60k - $120k</option>
            <option value="$120k+">$120k+</option>
          </select>
        </Field>
      </div>
      <Field label="Project Brief" error={errors.message?.message}>
        <textarea
          {...register("message", {
            required: "A short brief helps us understand the opportunity.",
            minLength: {
              value: 30,
              message: "Please share a little more detail.",
            },
          })}
          className="mt-2 min-h-40 w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-accent/50"
          placeholder="What are you building, launching, or repositioning?"
        />
      </Field>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-foreground/60">
          We typically reply within 1 business day.
        </p>
        <button
          type="submit"
          className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background hover:-translate-y-0.5"
        >
          Send Inquiry
        </button>
      </div>
      {isSubmitSuccessful ? (
        <p className="mt-4 text-sm text-accent">
          Inquiry drafted successfully. Connect this form to your backend or CRM next.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground/80">{label}</span>
      <div className="mt-2">{children}</div>
      {error ? <span className="mt-2 block text-sm text-red-500">{error}</span> : null}
    </label>
  );
}
