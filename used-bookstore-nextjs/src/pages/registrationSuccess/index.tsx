import Head from "next/head";
import Link from "next/link";
import {
  CentralizeContainerRegistrationSuccess,
  RegistrationContainerSuccess,
} from "../../styles/pages/registrationSuccess";
import SuccessImage from "../../assets/congratulations.png";
import Image from "next/image";

export default function RegistrationSuccess() {
  return (
    <CentralizeContainerRegistrationSuccess>
      <RegistrationContainerSuccess>
        <Head>
          <title>Sebus</title>
        </Head>
        <Image src={SuccessImage} width={360} alt="" unoptimized={true}/>
        <h2>Registration completed successfully!</h2>
        <Link href={`/`}>
          <p>Keep browsing!</p>
        </Link>
      </RegistrationContainerSuccess>
    </CentralizeContainerRegistrationSuccess>
  );
}
