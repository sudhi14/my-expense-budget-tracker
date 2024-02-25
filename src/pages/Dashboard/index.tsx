import Card from "../../components/interactiveComponents/Card";

const Dashboard = () => {
  return (
    <div className="flex flex-row w-full gap-10">
      <div className="flex flex-col h-96 flex-1 gap-5">
        <div className="flex flex-row place-content-between">
          <Card additionalClass={"flex-none h-32 w-60 bg-white"}>test</Card>
          <Card additionalClass={"flex-none h-32 w-60 bg-white"}>test</Card>
          <Card additionalClass={"flex-none h-32 w-60 bg-white"}>test</Card>
        </div>
        <div className="flex-1">
          <Card additionalClass={"flex-1 h-20 w-32 bg-white"}>test</Card>
        </div>
        <div className="flex-none">
          <Card additionalClass={"flex-none h-20 w-32 bg-white"}>test</Card>
        </div>
      </div>
      <div className="=items-center">
        <Card additionalClass={"h-3/4 p-2 bg-customBgAccents"}>TEST</Card>
      </div>
    </div>
  );
};

export default Dashboard;
