import { LoaderContainer } from "../../styles/components/loader";
import { Oval } from "react-loader-spinner";

export default function Loader() {
  return (
    <LoaderContainer>
      <Oval
        ariaLabel="loading-indicator"
        height={80}
        width={80}
        strokeWidth={5}
        strokeWidthSecondary={4}
        color="#F00"
        secondaryColor="$F00"
      />
    </LoaderContainer>
  );
}
