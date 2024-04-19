import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { pageDetails } from "../utils/pageDetails";
import { Button } from "./../components";
import { toast } from "react-toastify";

const URL = "http://127.0.01:5050/api/v1/messages";

const Contact = () => {
  const thisPageDetails = pageDetails.find(
    (details) => details.route === "/contact",
  );

  const [message, setMessage] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    messageBody: "",
  });

  const sendMessageMutation = useMutation({
    mutationFn: async (message) => {
      const response = await axios.post(URL, message);
      return response;
    },
    onSuccess: () => {
      toast.success("Message sent successfully. We will get back to you soon.");
      setMessage({
        name: "",
        email: "",
        phoneNumber: "",
        messageBody: "",
      });
    },
  });

  return (
    <div className="bg-gray-200 pb-12">
      <div className="flex flex-col items-center justify-center gap-4 gap-y-2 p-8">
        <img
          className="h-[100px] w-fit"
          src="images/crown_primary.svg"
          alt=""
        />
        <h1 className="text-5xl font-semibold text-gray-900">
          {thisPageDetails.title}
        </h1>
        <p className="w-2/3 text-center">{thisPageDetails.description}</p>
      </div>

      {/* Contact Image and form */}
      <div className="mx-auto mb-12 grid h-fit grid-cols-1 lg:ml-auto lg:mr-0 lg:grid-cols-2">
        {/* Contact Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            className="h-[700px]"
            src="/images/contact.png"
            alt="contact us"
          />
        </div>

        {/* Contact Form */}
        <div className="flex w-full justify-center p-8">
          <div className="flex w-2/3 flex-col gap-y-12 rounded-md bg-white p-4 lg:ml-0 lg:mr-auto">
            <h2 className="text-center text-xl font-semibold">
              Drop a Message!
            </h2>
            <div className="flex flex-col">
              <label htmlFor="name">Please enter your name:</label>
              <input
                className="h-8 w-full rounded-md bg-gray-200 pl-2"
                type="text"
                name="name"
                placeholder="first name last name"
                value={message.name}
                onChange={(e) =>
                  setMessage({ ...message, name: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Please enter your email:</label>
              <input
                className="h-8 w-full rounded-md bg-gray-200 pl-2"
                type="text"
                name="email"
                placeholder="example@mail.com"
                value={message.email}
                onChange={(e) =>
                  setMessage({ ...message, email: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="number">Please enter your phone number:</label>
              <input
                className="h-8 w-full rounded-md bg-gray-200 pl-2"
                type="text"
                name="number"
                placeholder="00000 00000"
                value={message.phoneNumber}
                onChange={(e) =>
                  setMessage({ ...message, phoneNumber: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">Please enter your message:</label>
              <textarea
                className="w-full rounded-md bg-gray-200 pl-2"
                type="text"
                name="message"
                rows={4}
                placeholder="Enter your message here..."
                value={message.messageBody}
                onChange={(e) =>
                  setMessage({ ...message, messageBody: e.target.value })
                }
              />
            </div>
            <div className="mx-auto">
              <Button
                onClick={() => sendMessageMutation.mutate(message)}
                style="text-white"
              >
                Send Message!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
