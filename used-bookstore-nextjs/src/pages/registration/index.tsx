import {
  CentralizeContainerRegistration,
  Form,
  RegistrationContainer,
  TwoInputsContainer,
} from "../../styles/pages/registration";
import { useForm } from "react-hook-form";
import { api, zipCodeApi } from "../../utils/api";
import RegisterImage from "../../assets/register.png";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { toast, ToastContainer } from "react-toastify";

interface PasswordProps {
  target: {
    value: string;
  };
}

interface RegistrationFormProps {
  name: string;
  zipCode: number;
  phone: string;
  address: string;
  district: string;
  city: string;
  cpf: string;
  email: string;
  password: PasswordProps;
  repeatPassword: PasswordProps;
}

export default function Registration() {
  const [registeredCpf, setRegisteredCpf] = useState<boolean>();
  const [password, setPassword] = useState<PasswordProps>();
  const [newPassword, setNewPassword] = useState<PasswordProps>();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegistrationFormProps>();

  const onSubmit = async (data: RegistrationFormProps) => {
    try {
      await api.post("/registration", {
        name: data.name,
        zipCode: Number(data.zipCode),
        phone: data.phone,
        address: data.address,
        district: data.district,
        city: data.city,
        cpf: data.cpf,
        email: data.email,
        password: data.password,
        repeatPassword: data.repeatPassword,
      });

      router.push("/registrationSuccess");
    } catch (error) {
      const notify = () => toast.error("Submitting order error!");
      notify();
      console.log(error);
    }
  };

  async function fetchZipCode(code: React.ChangeEvent<HTMLInputElement>) {
    const zipCodeFiltered = code.target.value;
    if (zipCodeFiltered.length < 8 || zipCodeFiltered.length > 8) {
      return;
    }

    try {
      const response = await zipCodeApi.get(`/${zipCodeFiltered}/json/`);
      setValue("address", response.data.logradouro);
      setValue("district", response.data.bairro);
      setValue("city", response.data.localidade);
    } catch (error) {
      console.log(error);
    }
  }

  async function checkCpf(cpf: React.ChangeEvent<HTMLInputElement>) {
    const cpfValue = cpf.target.value;
    if (cpfValue.length < 11 || cpfValue.length > 11) {
      return;
    }
    try {
      const response = await api.get(`/registration/${cpfValue}`);
      if (response.status === 200) {
        setRegisteredCpf(false);
      }
    } catch (error) {
      setRegisteredCpf(true);
      console.log(error);
    }
  }

  return (
    <CentralizeContainerRegistration>
      <Head>
        <title>Sebus</title>
      </Head>
      <ToastContainer
        style={{ marginTop: "60px" }}
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RegistrationContainer>
        <Image
          src={RegisterImage}
          width={400}
          alt=""
          style={{ borderRadius: "10px" }}
          unoptimized={true}
        />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Name:
            <input
              type="text"
              placeholder="Full name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span style={{ color: "#f00", fontStyle: "italic" }}>
                {errors.name.message}
              </span>
            )}
          </label>

          <TwoInputsContainer>
            <label>
              ZIP CODE (only numbers):
              <input
                type="number"
                placeholder="ZIP CODE"
                {...register("zipCode", {
                  required: "ZIP Code is required",
                  onBlur: fetchZipCode,
                  minLength: {
                    value: 8,
                    message: "Please enter at least 8 digits",
                  },
                  maxLength: {
                    value: 8,
                    message: "Please enter a maximum of 8 digits",
                  },
                })}
              />
              {errors.zipCode && (
                <span style={{ color: "#f00", fontStyle: "italic" }}>
                  {errors.zipCode.message}
                </span>
              )}
            </label>

            <label>
              Phone:
              <input
                type="number"
                placeholder="Phone"
                {...register("phone", {
                  required: "Phone is required",
                  minLength: {
                    value: 10,
                    message: "Please enter at least 10 digits",
                  },
                  maxLength: {
                    value: 11,
                    message: "Please enter a maximum of 11 digits",
                  },
                })}
              />
              {errors.phone && (
                <span style={{ color: "#f00", fontStyle: "italic" }}>
                  {errors.phone.message}
                </span>
              )}
            </label>
          </TwoInputsContainer>

          <label>
            Address:
            <input
              type="text"
              placeholder="Address"
              {...register("address", {
                required: "Address is required",
              })}
            />
            {errors.address && (
              <span style={{ color: "#f00", fontStyle: "italic" }}>
                {errors.address.message}
              </span>
            )}
          </label>

          <TwoInputsContainer>
            <label>
              Neighborhood:
              <input
                type="text"
                placeholder="Neighborhood"
                {...register("district", {
                  required: "Neighborhood is required",
                })}
              />
              {errors.district && (
                <span style={{ color: "#f00", fontStyle: "italic" }}>
                  {errors.district.message}
                </span>
              )}
            </label>

            <label>
              City:
              <input
                type="text"
                placeholder="City"
                {...register("city", {
                  required: "City is required",
                })}
              />
              {errors.city && (
                <span style={{ color: "#f00", fontStyle: "italic" }}>
                  {errors.city.message}
                </span>
              )}
            </label>
          </TwoInputsContainer>

          <label>
            CPF (only numbers):
            <input
              type="number"
              placeholder="CPF"
              {...register("cpf", {
                required: "CPF is required",
                minLength: {
                  value: 11,
                  message: "Please enter at least 11 digits",
                },
                maxLength: {
                  value: 11,
                  message: "Please enter a maximum of 11 digits",
                },
                onChange: checkCpf,
              })}
            />
            {errors.cpf && (
              <span style={{ color: "#f00", fontStyle: "italic" }}>
                {errors.cpf.message}
              </span>
            )}
            {!!registeredCpf && (
              <span style={{ color: "#f00", fontStyle: "italic" }}>
                CPF já cadastrado no sistema
              </span>
            )}
          </label>

          <label>
            E-mail:
            <input
              type="email"
              placeholder="E-mail"
              {...register("email", { required: "E-mail is required" })}
            />
            {errors.email && (
              <span style={{ color: "#f00", fontStyle: "italic" }}>
                {errors.email.message}
              </span>
            )}
          </label>

          <TwoInputsContainer>
            <label>
              Create a password:
              <input
                type="password"
                placeholder="New password"
                {...register("password", {
                  required: "Required field",
                  minLength: {
                    value: 6,
                    message: "Please enter at least 6 digits",
                  },
                  onChange: setPassword,
                })}
              />
              {errors.password && (
                <span style={{ color: "#f00", fontStyle: "italic" }}>
                  {errors.password.message}
                </span>
              )}
            </label>

            <label>
            Repeat the password:
              <input
                type="password"
                placeholder="Repeat previous password"
                {...register("repeatPassword", {
                  required: "Required field",
                  minLength: {
                    value: 6,
                    message: "Please enter at least 6 digits",
                  },
                  onChange: setNewPassword,
                })}
              />
              {errors.repeatPassword && (
                <span style={{ color: "#f00", fontStyle: "italic" }}>
                  {errors.repeatPassword.message}
                </span>
              )}
            </label>
          </TwoInputsContainer>

          {password && newPassword && (
            <span style={{ color: "#f00", fontStyle: "italic" }}>
              {password.target.value === newPassword.target.value
                ? null
                : "Passwords must match"}
            </span>
          )}

          <input
            type="submit"
            value="Register"
            disabled={!!registeredCpf}
            style={{ cursor: registeredCpf ? "not-allowed" : "pointer" }}
          />
        </Form>
      </RegistrationContainer>
    </CentralizeContainerRegistration>
  );
}
