import React from "react";
import ImgsInfos from "./ImgsInfos";

interface InfosProps {
  repo: {
    name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
  };
}

const formatUpdatedAt = (dateString: string) => {
  const updatedDate = new Date(dateString);
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate.getTime() - updatedDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return `Updated ${diffDays} days ago`;
};

const CardRepo: React.FC<InfosProps> = ({ repo }) => {
  const datas = [
    { img: "/Chield_alt.svg", data: repo.forks_count },
    { img: "/Nesting.svg", data: repo.stargazers_count },
    { img: "/Star.svg", data: repo.stargazers_count },
    { data: formatUpdatedAt(repo.updated_at) },
  ];

  return (
    <div className="flex flex-col justify-between gap-5 bg-gradient-to-tr from-[#121729] to-[#1C1B45] p-4 rounded-lg w-full" style={{ padding: "20px" }}>
      <h2 className="repo-title">{repo.name}</h2>
      <p className="repo-desc">{repo.description || "Sem descrição"}</p>
      <div className="flex gap-3">
        {datas.map((info, index) => (
          <ImgsInfos key={index} img={info.img} data={info.data} />
        ))}
      </div>
    </div>
  );
};
export default CardRepo;