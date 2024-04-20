import LeftMenu from '@components/header/LeftMenu.tsx';
import SearchBar from '@components/header/SearchBar.tsx';
import RightMenu from '@components/header/RightMenu.tsx';

function Header() {
  return (
    <div className="absolute left-0 top-0 grid h-10 w-full grid-cols-3 gap-8 bg-window-active-background">
      <LeftMenu />
      <SearchBar />
      <RightMenu />
    </div>
  );
}

export default Header;
