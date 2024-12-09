import React from "react";
import { useForm } from "react-hook-form";

function contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    alert("Thank you for contacting us!");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring focus:ring-blue-300"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring focus:ring-blue-300"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label className="block font-medium">Subject</label>
          <input
            type="text"
            placeholder="Enter subject"
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring focus:ring-blue-300"
            {...register("subject", { required: "Subject is required" })}
          />
          {errors.subject && (
            <span className="text-red-500">{errors.subject.message}</span>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label className="block font-medium">Message</label>
          <textarea
            rows="4"
            placeholder="Enter your message"
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring focus:ring-blue-300"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <span className="text-red-500">{errors.message.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default contact;
