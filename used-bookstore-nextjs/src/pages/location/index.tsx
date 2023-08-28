import Image from "next/image";
import {
  ContentLocation,
  LocationContainerCentralize,
  LocationDescription,
} from "../../styles/pages/location";
import SebusLocation from "../../assets/locationSebus.png";

export default function Location() {
  return (
    <LocationContainerCentralize>
      <ContentLocation>
        <Image src={SebusLocation} width={900} alt="Representção de um mapa" unoptimized={true}/>
        <LocationDescription>
          <h2>Onde estamos</h2>
          <p>Av. Mal. Deodoro da Fonseca, 999</p>
          <p>Centro, Jaraguá do Sul - SC, 89250-800</p>
          <p>Ponto de referência: Em frente ao cólegio Bom Jesus</p>
          <p>(47) 3371-9999</p>
          <p>GW78+MW Centro, Jaraguá do Sul - SC</p>
        </LocationDescription>
      </ContentLocation>
    </LocationContainerCentralize>
  );
}
