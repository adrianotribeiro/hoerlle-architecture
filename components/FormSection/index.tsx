import axios from "axios"
import Image from "next/image"
import React, { useState } from "react"
import { FormsProps, MessageStatusProps, StatusProps } from "data/interfaces"

export default function FormSection(): React.ReactElement {
  const [status, setStatus] = useState<StatusProps>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: "" },
  })

  const [inputs, setInputs] = useState<FormsProps>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleServerResponse = ({ ok, msg }: MessageStatusProps) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      })
      setInputs({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg },
      })
    }
  }

  const handleOnChange = (e: any) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: "" },
    })
  }

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    setStatus((prevStatus) => ({
      ...prevStatus,
      submitting: true,
    }));

    axios({
      method: "POST",
      url: "https://formspree.io/f/xbjvlaoa",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse({
          ok: true,
          msg: "Obrigado, sua mensagem foi enviada!",
        });

        setTimeout(() => {
          setStatus((prevStatus) => ({
            ...prevStatus,
            submitted: false,
          }));
        }, 6000);
      })
      .catch((error) => {
        handleServerResponse({ ok: false, msg: error.response.data.error });
      });
  };


  return (
    <section className="mb-16 flex flex-col xl:h-[83vh] xl:flex-row xl:justify-around xl:py-2 4xl:h-[85vh] 5xl:h-[88vh] 4xl:items-center 4_xl:items-center 6xl:h-[88vh] 6xl:items-center">
      <div className="m-auto w-[85%] xl:m-0 xl:w-[50%]">
        <form action="" className="flex flex-col gap-3" onSubmit={handleOnSubmit}>
          <label htmlFor="title" className="py-4 font-montserrat text-4xl font-light text-[#454242]">
            Contato
          </label>
          <div className="flex flex-col font-montserrat">
            <label className="text-[25px] font-light text-[#454242]" htmlFor="name">
              Name
            </label>
            <input
              className="border-b-2 border-[#454242] text-[#454242] focus:outline-none"
              type="text"
              name="name"
              onChange={handleOnChange}
              value={inputs.name}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[25px] font-light text-[#454242]" htmlFor="email">
              Email
            </label>
            <input
              className="border-b-2 border-[#454242] text-[#454242] focus:outline-none"
              type="email"
              name="email"
              onChange={handleOnChange}
              value={inputs.email}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[25px] font-light text-[#454242]" htmlFor="subject">
              Assunto
            </label>
            <input
              className="border-b-2 border-[#454242] text-[#454242] focus:outline-none"
              type="text"
              name="subject"
              onChange={handleOnChange}
              value={inputs.subject}
            />
          </div>
          <div className="flex flex-col pb-2">
            <label className="text-[25px] font-light text-[#454242]" htmlFor="message">
              Mensagem
            </label>
            <textarea
              className="border-b-2 border-[#454242] text-[#454242] focus:outline-none"
              name="message"
              id=""
              cols={30}
              rows={10}
              onChange={handleOnChange}
              value={inputs.message}
            />
          </div>
          <button
            className="m-auto w-[30%] rounded bg-[#454242] py-[6px] text-white hover:bg-[#454242]/50 hover:text-[#454242]"
            disabled={status.submitting}
          >
            {!status.submitting ? (!status.submitted ? "ENVIAR" : "ENVIADO") : "ENVIANDO..."}
          </button>
        </form>
        {status.info.error && (
          <div className="flex justify-center ">
            <p>Error: {status.info.msg}</p>
          </div>
        )}
        {!status.info.error && status.info.msg && (
          <div className="flex justify-center">
            <p>{status.info.msg}</p>
          </div>
        )}
      </div>
      <div className="md:flex md:justify-center xl:h-fit xl:items-center  xl:py-4">
        <Image
          src="/images/dudu_profile.png"
          width={400}
          height={300}
          alt="Eduardo Hoerlle Image"
          className="px-7 py-4 md:w-full md:px-14 md:py-8 xl:w-[24.37rem] xl:p-0 3sm:px-[75px]"
        />
      </div>
    </section>
  )
}
