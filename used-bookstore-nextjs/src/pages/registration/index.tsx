import {
  CentralizeContainerRegistration,
  Form,
  RegistrationContainer,
  TwoInputsContainer,
} from "../../styles/pages/registration";
import { useForm } from "react-hook-form";
import { api, zipCodeApi } from "../../utils/api";
import RegistroImage from "../../assets/registro.png";
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
      const notify = () => toast.error("Erro ao enviar o seu pedido!");
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
          src={RegistroImage}
          width={400}
          alt=""
          style={{ borderRadius: "10px" }}
          unoptimized={true}
        />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Nome completo:
            <input
              type="text"
              placeholder="Digite aqui seu nome completo"
              {...register("name", { required: "Nome obrigatório" })}
            />
            {errors.name && (
              <span style={{ color: "#f00", fontStyle: "italic" }}>
                {errors.name.message}
              </span>
            )}
          </label>

          <TwoInputsContainer>
            <label>
              CEP (apenas números):
              <input
                type="number"
                placeholder="Digite aqui seu CEP"
                {...register("zipCode", {
                  required: "CEP obrigatório",
                  onBlur: fetchZipCode,
                  minLength: {
                    value: 8,
                    message: "Digite no mínimo 8 números",
                  },
                  maxLength: {
                    value: 8,
                    message: "Digite no máximo 8 números",
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
              Telefone (com DDD):
              <input
                type="number"
                placeholder="Digite aqui seu telefone"
                {...register("phone", {
                  required: "Telefone obrigatório",
                  minLength: {
                    value: 10,
                    message: "Digite no mínimo 10 números",
                  },
                  maxLength: {
                    value: 11,
                    message: "Digite no máximo 11 números",
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
            Endereço:
            <input
              type="text"
              placeholder="Digite aqui seu endereço"
              {...register("address", {
                required: "Endereço obrigatório",
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
              Bairro:
              <input
                type="text"
                placeholder="Digite aqui seu bairro"
                {...register("district", {
                  required: "Bairro obrigatório",
                })}
              />
              {errors.district && (
                <span style={{ color: "#f00", fontStyle: "italic" }}>
                  {errors.district.message}
                </span>
              )}
            </label>

            <label>
              Cidade:
              <input
                type="text"
                placeholder="Digite aqui sua cidade"
                {...register("city", {
                  required: "Cidade obrigatória",
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
            CPF (apenas números):
            <input
              type="number"
              placeholder="Digite aqui seu CPF"
              {...register("cpf", {
                required: "CPF obrigatório",
                minLength: {
                  value: 11,
                  message: "Digite no mínimo 11 números",
                },
                maxLength: {
                  value: 11,
                  message: "Digite no máximo 11 números",
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
              placeholder="Digite aqui seu melhor e-mail"
              {...register("email", { required: "E-mail obrigatório" })}
            />
            {errors.email && (
              <span style={{ color: "#f00", fontStyle: "italic" }}>
                {errors.email.message}
              </span>
            )}
          </label>

          <TwoInputsContainer>
            <label>
              Crie uma senha:
              <input
                type="password"
                placeholder="Nova senha"
                {...register("password", {
                  required: "Campo obrigatório",
                  minLength: {
                    value: 6,
                    message: "No mínimo 6 dígitos",
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
              Repita a senha:
              <input
                type="password"
                placeholder="Repita a senha anterior"
                {...register("repeatPassword", {
                  required: "Campo obrigatório",
                  minLength: {
                    value: 6,
                    message: "No mínimo 6 dígitos",
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
                : "As senhas devem ser iguais"}
            </span>
          )}

          <input
            type="submit"
            value="Cadastrar"
            disabled={!!registeredCpf}
            style={{ cursor: registeredCpf ? "not-allowed" : "pointer" }}
          />
        </Form>
      </RegistrationContainer>
    </CentralizeContainerRegistration>
  );
}
