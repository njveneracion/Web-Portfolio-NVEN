import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

// Form field validation component
const FormField = ({ label, name, type = "text", required = true }) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="block text-gray-700 dark:text-gray-300 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          name={name}
          id={name}
          rows="6"
          required={required}
          className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          required={required}
          className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
        />
      )}
    </div>
  );
};

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    show: false,
    error: false,
    message: "",
    fade: false,
  });

  useEffect(() => {
    let fadeTimeout;
    let hideTimeout;

    if (status.show) {
      // Start fade out after 2 seconds
      fadeTimeout = setTimeout(() => {
        setStatus((prev) => ({ ...prev, fade: true }));
      }, 2000);

      // Hide completely after fade animation (3 seconds total)
      hideTimeout = setTimeout(() => {
        setStatus((prev) => ({ ...prev, show: false, fade: false }));
      }, 3000);
    }

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(hideTimeout);
    };
  }, [status.show]);

  const validateForm = (formData) => {
    const email = formData.get("user_email");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setStatus({
        show: true,
        error: true,
        message: "Please enter a valid email address",
        fade: false,
      });
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);

    if (!validateForm(formData)) {
      return;
    }

    setLoading(true);
    setStatus((prev) => ({ ...prev, show: false, fade: false }));

    emailjs
      .sendForm(
        "service_22sg5bq",
        "template_8aia3ll",
        form.current,
        "WWQgDbqvaxRO7I3pP"
      )
      .then(
        (result) => {
          setStatus({
            show: true,
            error: false,
            message: "Message sent successfully!",
            fade: false,
          });
          form.current.reset();
        },
        (error) => {
          setStatus({
            show: true,
            error: true,
            message: "Failed to send message. Please try again.",
            fade: false,
          });
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="min-h-screen relative bg-white dark:bg-gradient-to-b dark:from-[#111827] dark:via-[#0f172a] dark:to-[#0c1015] transition-all duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-20 text-center">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="flex flex-col">
            <div className="">
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                I'm currently open to new opportunities and excited to connect!
                Whether you have a question, a project in mind, or just want to
                say hello, feel free to reach out—I'll respond as soon as I can!
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            {status.show && (
              <div
                className={`mb-4 p-4 rounded transition-opacity duration-1000 ${
                  status.fade ? "opacity-0" : "opacity-100"
                } ${
                  status.error
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                }`}>
                {status.message}
              </div>
            )}
            <form ref={form} onSubmit={handleSubmit}>
              <FormField label="Name" name="user_name" type="text" />
              <FormField label="Email" name="user_email" type="email" />
              <FormField label="Message" name="message" type="textarea" />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-medium disabled:opacity-50">
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
