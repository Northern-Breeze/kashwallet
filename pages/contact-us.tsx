import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { useAlert } from "react-alert";

type Inputs = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

export default function ContactUs() {
  const [isloading, setIsLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const router = useRouter();
  const showAlert = useAlert();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const payload = await response.json();
      if (!payload.success) {
        showAlert.show(payload.message);
      } else {
        showAlert.show(payload.message);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      showAlert.show("Something went wrong, please try again later");
      setIsLoading(false);
    }
  };

  return (
      <div className="columns contact-us">
        <div className="column left-show">
          <h1 className="has-text-weight-bold is-size-3">Contact Us</h1>
          <p className="feedback-text">
            We all love feedback especially us, reach out to us on anything and
            everything
          </p>
        </div>
        <div className="column">
          <div>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="field">
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input
                        className={`input ${errors.name && "is-danger"}`}
                        type="text"
                        placeholder="Your Name"
                        {...register("name", {
                          required: "Name is required.",
                          maxLength: {
                            value: 20,
                            message: "Name is too long",
                          },
                          minLength: {
                            value: 3,
                            message: "Name too short",
                          },
                        })}
                      />
                    </div>
                    {errors.name && (
                      <p className="help is-danger">
                        {errors.name.message || "Input is invalid"}
                      </p>
                    )}
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className={`input ${errors.email && "is-danger"}`}
                        type="email"
                        placeholder="Your Email"
                        {...register("email", {
                          required: "Email is required",
                          maxLength: {
                            value: 30,
                            message: "Email is too long",
                          },
                          pattern: {
                            value:
                              /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$/,
                            message: "Email is not valid",
                          },
                        })}
                      />
                    </div>
                    {errors.email && (
                      <p className="help is-danger">
                        {errors.email.message || "Input is invalid"}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input
                        className={`input ${errors.topic && "is-danger"}`}
                        type="text"
                        placeholder="Provide the subject of this communication"
                        {...register("topic", {
                          required: "A topic is required",
                        })}
                      />
                    </div>
                    {errors.topic && (
                      <p className="help is-danger">
                        {errors.topic.message || "Invalid input"}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <textarea
                        className="textarea"
                        placeholder="Explain how we can help you"
                        {...register("message", {
                          required: "A message is required",
                        })}
                      ></textarea>
                    </div>
                    {errors.message && (
                      <p className="help is-danger">
                        {errors.message.message || "Invalid input"}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="field">
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <button className="button is-primary is-block is-full-width">
                        {isloading ? "Sending ..." : "Send Message"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}
