import {
  CentralizeInfoContainer,
  InfoContent,
} from "../../styles/pages/companyInfo";
import ReactMarkdown from "react-markdown";
import { companyInfoTexts } from "../../utils/companyInfoTexts";
import { useRouter } from "next/router";

export default function CompanyInfo() {
  const router = useRouter();
  const infoRoute = router.query.info;

  const textByInfo = companyInfoTexts.filter((item) => item.info === infoRoute);
  const textFiltered = textByInfo[0]?.text;

  return (
    <CentralizeInfoContainer>
      <InfoContent>
        <h2>{infoRoute}</h2>
        <div>
          <ReactMarkdown>{textFiltered}</ReactMarkdown>
        </div>
      </InfoContent>
    </CentralizeInfoContainer>
  );
}
