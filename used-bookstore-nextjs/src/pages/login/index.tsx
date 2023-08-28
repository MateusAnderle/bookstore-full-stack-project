import {
  CentralizeContainerLogin,
  LoginContainer,
  LoginContent,
  SubmitButton,
  TextInput,
} from "../../styles/pages/login";
import { useForm } from "react-hook-form";
import Image from "next/image";
import LoginImage from "../../assets/loginImage.png";
import Link from "next/link";
import { useAuth } from "../../hooks/auth";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormProps {
  login: string;
  password: string;
}

export default function Login() {
  const { isLoading, signIn, token } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();
  const router = useRouter();

  if (token) {
    setTimeout(() => {
      return router.push("/user");
    }, 1500);
  }

  const onSubmit = async (data: FormProps) => {
    const { login, password } = data;
    try {
      await signIn({ login, password });
      return toast.success("Login feito com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CentralizeContainerLogin>
      <LoginContainer>
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
        <LoginContent>
          <Image
            src={LoginImage}
            width={320}
            alt=""
            style={{ borderRadius: "10px" }}
            unoptimized={true}
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              type="email"
              placeholder="Digite seu login ou e-mail"
              {...register("login", { required: true })}
            />

            <TextInput
              type="password"
              placeholder="Digite sua senha"
              {...register("password", { required: true })}
            />

            <SubmitButton type="submit" value="Login" disabled={isLoading} />

            {errors.login && <span>{errors?.login?.message}</span>}
            {errors.password && <span>{errors.password.message}</span>}
          </form>

          <span>
            Ainda não tem cadastro?{" "}
            <Link href="/registration">Clique aqui!</Link>
          </span>
        </LoginContent>
      </LoginContainer>
    </CentralizeContainerLogin>
  );
}
