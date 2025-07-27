import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { GlowEffect } from "@/components/ui/glow-effect";
import { Download, Github, Linkedin, Phone } from "lucide-react";
import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

export function GlowEffectCardBackground() {
  const [displayWhat, setDisplayWhat] = useState("phone");
  const [mailData, setMailData] = useState({
    email: "",
    comments: "",
  });
  const sendEmailData = async () => {
    const res = await fetch("/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: mailData.email,
        comment: mailData.comments,
      }),
    });

    const result = await res.json();
    result && setMailData({ email: "", comments: "" });
    window.alert(result.message);
  };

  return (
    <div className="relative w-full h-[500px]">
      <GlowEffect
        colors={["#E70FAA", "#C959DD", "#666666", "#13B0F5"]}
        mode="static"
        blur="medium"
      />
      <div className="relative w-full h-[530px] rounded-lg bg-reversed-gradient-heading">
        <svg
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 70 70"
          aria-label="MP Logo"
          width="70"
          height="70"
          className="absolute bottom-4 right-4 h-8 w-8"
          fill="none"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="3"
            d="M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263"
          ></path>
        </svg>
        <div className="w-full h-full relative inset-0 p-6">
          {displayWhat == "email" ? (
            <form className="w-full h-full flex flex-col gap-4">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className=" rounded-md p-2 w-full bg-dark/50"
                onChange={(e) =>
                  setMailData({ ...mailData, email: e.target.value })
                }
                value={mailData.email}
                required
              />
              <label htmlFor="comments">Comment</label>
              <textarea
                rows={8}
                id="comments"
                name="comments"
                className="w-full rounded-md p-2 bg-dark/50 max-h-[200px]"
                onChange={(e) =>
                  setMailData({ ...mailData, comments: e.target.value })
                }
                value={mailData.comments}
                required
              />
              <div role="button" aria-label="Send"
                onClick={sendEmailData}
                className="bg-main-blue py-4 rounded-md shadow-inner shadow-main-purple w-full text-center cursor-pointer">
                Send
              </div>
            </form>
          ) : (
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
              <div className="flex items-center gap-4 bg-dark/50 backdrop-blur-2xl p-4 rounded-md ">
                <span>
                  <BsWhatsapp />
                </span>
                <a href="https://wa.me/+201556543218">+20 1556543218</a>
              </div>
              <div className="flex items-center gap-4 bg-dark/50 backdrop-blur-2xl p-4 rounded-md ">
                <span>
                  <Phone />
                </span>
                <span>+20 1229430631</span>
              </div>
              <div className="flex items-center gap-4 bg-dark/50 backdrop-blur-2xl p-4 rounded-md ">
                <span>
                  <TfiEmail />
                </span>
                <a href="mailto:youssifsalama01@gmail.com">
                  youssifsalama01@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 bg-dark/50 backdrop-blur-2xl p-4 rounded-md ">
                <span>
                  <Linkedin />
                </span>
                <a href="https://www.linkedin.com/in/youssif-salama-039506244/">
                  Youssif Salama
                </a>
              </div>
              <div className="flex items-center gap-4 bg-dark/50 backdrop-blur-2xl p-4 rounded-md ">
                <span>
                  <Github />
                </span>
                <a href="https://github.com/YoussifSalama">Youssif Salama</a>
              </div>
              <div className="flex items-center gap-4 bg-dark/50 backdrop-blur-2xl p-4 rounded-md ">
                <span>
                  <Download />
                </span>
                <a href="https://drive.google.com/file/d/1na4drFVuuS1D_CINYAR8_aj2K9qxnrAG/view?usp=sharing">Download Resume</a>
              </div>
            </div>
          )}
          <div>
            <AppleStyleDock setDisplayWhat={setDisplayWhat} />
          </div>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    title: "Email ME",
    icon: <TfiEmail className="h-full w-full " />,
    type: "email",
  },
  {
    title: "Phone Me",
    icon: <Phone className="h-full w-full " />,
    type: "phone",
  },
];

export function AppleStyleDock({ setDisplayWhat }: { setDisplayWhat: any }) {
  return (
    <div className="absolute bottom-2 left-1/2 max-w-full -translate-x-1/2 ">
      <Dock className="items-end pb-3 bg-dark/50 dark:bg-dark/50">
        {data.map((item, idx) => (
          <DockItem
            key={idx}
            className="aspect-square rounded-full bg-main-blue/50 backdrop-blur-2xl text-white"
            onClick={() => setDisplayWhat(item.type)}
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}
