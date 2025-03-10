"use client";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProfileInfo from "./components/ProfileInfo";
import CardRepo from "./components/utils/CardRepo";
import { getUserData } from "../../service/api";

export default function Page() {
  const [data, setData] = useState<any>(null);
  const [searchName, setSearchName] = useState("GitHub");
  const [visibleRepos, setVisibleRepos] = useState(4);

  useEffect(() => {
    if (searchName) {
      getUserData(searchName).then(setData);
    }
  }, [searchName]);

  return (
    <main>
      <Header onSearch={setSearchName} />
      <section className="container max-w-[1280px] flex flex-col gap-6 lg:max-w-[1024px]">
        {data && (
          <>
            <ProfileInfo profile={data.profile} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.repos.slice(0, visibleRepos).map((repo: any) => (
                <CardRepo key={repo.id} repo={repo} />
              ))}
            </div>
          </>
        )}
        {data && visibleRepos < data.repos.length && (
          <div className="text-center">
            <button
              onClick={() => setVisibleRepos(data.repos.length)}
              className="cursor-pointer"
            >
              View all repositories
            </button>
          </div>
        )}
      </section>
    </main>
  );
}