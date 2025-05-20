import React, { forwardRef, useEffect, useState } from "react";
import api from "../config/api.js";
import { toast } from "react-toastify";

const Contact = forwardRef((props, ref) => {
  const [msgName, setMsgName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [comName, setComName] = useState("");
  const [comment, setComment] = useState("");
  const [commentCount, setCommentCount] = useState(0);
  const [commentData, setCommentData] = useState([]);

  const handleLinkedInClick = () => {
    const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL;
    if (linkedinUrl) {
      window.open(linkedinUrl, "_blank");
    } else {
      console.error("LinkedIn URL not found");
    }
  };

  const handleEmailClick = () => {
    const emailUrl = import.meta.env.VITE_EMAIL_URL;
    if (emailUrl) {
      window.open(emailUrl, "_blank");
    } else {
      console.error("Email URL not found");
    }
  };

  const handleContact = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/message/post-message", {
        name: msgName,
        email,
        message,
      });
      if (response.data.success) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message:", response.data.error);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message:");
    } finally {
      setMsgName("");
      setEmail("");
      setMessage("");
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/comment/post-comment", {
        name: comName,
        comment,
      });
      if (response.data.success) {
        toast.success(
          "Comment posted successfully! Please refresh the page to see the updated comment."
        );
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to post comment:");
    } finally {
      setComName("");
      setComment("");
    }
  };

  useEffect(() => {
    const getComment = async () => {
      try {
        const response = await api.get("/comment/get-comment");
        if (response.data.success) {
          setCommentData(response.data.comments);
          setCommentCount(response.data.comments.length);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getComment();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <h1 className="block" data-animate="slide-down-left">
        Contact Me
      </h1>
      <h2 className="block" data-animate="slide-up">
        Got a query? Send me a message, and I'll get back to you soon!
      </h2>
      <div className="flex flex-col md:flex-row m-5 gap-10 lg:ml-20 lg:mr-20">
        <div className="md:w-1/2 bg-linear-to-tr from-slate-700 to-0 rounded-lg shadow flex p-3">
          <div
            className="block flex flex-col mx-auto"
            data-animate="slide-down"
          >
            <h1>Get in touch</h1>
            <p>Have something to discuss? Send me a message, let's talk.</p>
            <div>
              <form
                onSubmit={handleContact}
                className="flex flex-col w-full mt-5 gap-5"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  value={msgName}
                  onChange={(e) => setMsgName(e.target.value)}
                  className="block border p-2 rounded-lg"
                  data-animate="slide-down"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block border p-2 rounded-lg"
                  data-animate="slide-up-left"
                />
                <textarea
                  type="text"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="block border p-2 rounded-lg h-50"
                  data-animate="slide-up-right"
                />
                <button className="block" data-animate="slide-down-right">
                  Send me a message
                </button>
              </form>

              <div className="bg-gray-200 w-full h-0.5 rounded-lg mt-5"></div>
            </div>
            <div className="">
              <h2>Connect with me</h2>
              <div
                className="block flex flex-col md:flex-row m-5 gap-3"
                data-animate="slide-up"
              >
                <div className="flex-1 flex flex-col gap-3">
                  <div
                    onClick={handleEmailClick}
                    className="bg-gradient-to-r from-[black] to-[] p-2 cursor-pointer hover:bg-black"
                  >
                    Gmail
                  </div>
                  <div
                    onClick={handleLinkedInClick}
                    className="bg-gradient-to-r from-[black] to-[] p-2 cursor-pointer hover:bg-black"
                  >
                    LinkedIn
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 bg-linear-to-tr from-slate-700 to-0 rounded-lg shadow p-3">
          <div
            className="block flex flex-col mx-auto ml-10 mr-10"
            data-animate="slide-down"
          >
            <div className="flex gap-2 justify-center items-center">
              <h2>Comments</h2>
              <p>({commentCount})</p>
            </div>

            <div className="bg-gray-200 w-full h-0.5 rounded-lg mt-5"></div>
            <div className="w-full flex flex-col mt-5 gap-5">
              <input
                type="text"
                placeholder="Enter your Name"
                value={comName}
                onChange={(e) => setComName(e.target.value)}
                className="block border p-2 rounded-lg"
                data-animate="slide-up-left"
              />
              <textarea
                type="text"
                placeholder="Write your message here..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="block border p-2 rounded-lg h-50"
                data-animate="slide-down-right"
              />
              <button
                onClick={handleComment}
                className="block"
                data-animate="slide-up-right"
              >
                Post Comment
              </button>
              <div className="block" data-animate="slide-up-left">
                User Comments
                <div
                  className={`mt-3 rounded border p-3 ${
                    commentData.length > 4
                      ? "max-h-70 overflow-y-auto scroll-smooth"
                      : ""
                  }`}
                >
                  {commentData.map((comment) => (
                    <div key={comment._id} className="flex flex-col gap-2">
                      <div className="text-left p-2 border rounded-md shadow-md mt-2 mb-2">
                        <strong>{comment.name}</strong>
                        <br />
                        {comment.comment}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
