import SearchProfile from "./utils/SearchProfile";

interface HeaderProps {
  onSearch: (name: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <header className="container-form relative">
      <SearchProfile onSubmit={onSearch} />
    </header>
  );
};

export default Header;