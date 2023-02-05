import { useAxios } from "../../hooks/useAxios";

import CountryDetailChart from "../../components/CountryDetailChart/CountryDetailChart";
import CountryDetailActivities from "../../components/CountryDetailActivities/CountryDetailActivities";

import { useParams } from "react-router-dom";

import ContainerDetail from "../../components/ContainerDetail/ContainerDetail";

function Detail() {
  const { idCountry } = useParams();
  const [isLoaded, data, error] = useAxios(`/countries/${idCountry}`);

  if (!isLoaded) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <ContainerDetail>
      {data && <CountryDetailChart props={data} />}
      <CountryDetailActivities
        activities={data?.activities}
        name={data?.name}
      />
    </ContainerDetail>
  );
}

export default Detail;
