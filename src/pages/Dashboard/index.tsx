import GlobalUtils from "../../components/customComponents/GlobalUtils";
import Card from "../../components/interactiveComponents/Card";

const Dashboard = () => {
  return (
    <div className="flex flex-row w-full gap-10">
      <div className="flex flex-col h-96 flex-1 gap-5">
        <div className="flex flex-row place-content-between">
          <Card additionalClass={"flex-none h-36 w-60 bg-white"}>test</Card>
          <Card additionalClass={"flex-none h-36 w-60 bg-white"}>test</Card>
          <Card additionalClass={"flex-none h-36 w-60 bg-white"}>test</Card>
        </div>
        <div className=" flex flex-1 flex-row gap-4">
          <Card additionalClass={"h-64 w-1/2 bg-white"}>test</Card>
          <Card additionalClass={"h-64 w-1/2 bg-white"}>test</Card>
        </div>
        <div className="flex-none">
          <Card additionalClass={"flex-none h-40 w-full bg-white"}>test</Card>
        </div>
      </div>
      <div>
        <Card additionalClass={"flex-none h-3/4 w-72 bg-customBgAccents"}>
          test
        </Card>
      </div>
      <div className="mt-24">
        <Card additionalClass={"h-3/4 p-3 bg-white"}>
          <GlobalUtils />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
