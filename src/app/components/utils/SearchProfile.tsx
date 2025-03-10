import React, { useState, useEffect } from "react";
import { searchUsers } from "../../../../service/api";
import SearchDropDown from "../SearchDropDown";

interface SearchProfileProps {
  onSubmit: (username: string) => void;
}

const SearchProfile: React.FC<SearchProfileProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState<any[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (name.length >= 2) {
      searchUsers(name).then(setUsers);
      setShowDropdown(true);
    } else {
      setUsers([]);
      setShowDropdown(false);
    }
  }, [name]);

  return (
    <div className="relative">
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(name); }}>
        <label htmlFor="input-search" className="absolute top-4.5">
          <img src="/Search.svg" alt="Search Icon" className="w-12 h-6" />
        </label>
        <input
          id="input-search"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Search user"
          className="w-[500px] h-[60px] text-lg outline-none rounded-lg bg-[var(--background)] pl-12"
        />
      </form>
      {showDropdown && <SearchDropDown users={users} onSelect={(username) => { setName(username); setShowDropdown(false); onSubmit(username); }} />}
    </div>
  );
};

export default SearchProfile;