import React from "react";

interface User {
  avatar_url: string;
  bio?: string;
  name?: string;
  login: string;
}

interface SearchDropDownProps {
  users: User[];
  onSelect: (username: string) => void;
}

const SearchDropDown: React.FC<SearchDropDownProps> = ({ users, onSelect }) => {
  if (users.length === 0) return null;

  return (
    <div className="w-full rounded-lg mt-2 flex flex-col items-center gap-2 absolute" style={{marginTop: "5px"}}>
      {users.map((user) => (
        <div
          key={user.login}
          className="flex items-center gap-4 p-3 cursor-pointer hover:bg-gray-700 bg-[var(--profile-info-bg-color)] w-full max-w-[490px] rounded-lg"
          onClick={() => onSelect(user.login)}
          style={{padding: "15px"}}
        >
          <img src={user.avatar_url} alt={user.name} className="w-12 h-12 rounded-lg" />
          <div>
            <p className="text-white">{user.name || user.login}</p>
            <p>{user.bio}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchDropDown;