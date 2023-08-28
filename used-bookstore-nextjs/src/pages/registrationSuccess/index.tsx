import Head from "next/head";
import Link from "next/link";
import {
  CentralizeContainerRegistrationSuccess,
  RegistrationContainerSuccess,
} from "../../styles/pages/registrationSuccess";
import SucessoImage from "../../assets/sucesso.png";
import Image from "next/image";

export default function RegistrationSuccess() {
  return (
    <CentralizeContainerRegistrationSuccess>
      <RegistrationContainerSuccess>
        <Head>
          <title>Sebus</title>
        </Head>
        <Image src={SucessoImage} width={360} alt="" unoptimized={true}/>
        <h2>Cadastro efetuado com sucesso!</h2>
        <Link href={`/`}>
          <p>Continue navegando em nosso site!</p>
        </Link>
      </RegistrationContainerSuccess>
    </CentralizeContainerRegistrationSuccess>
  );
}
