import { VscSearch } from 'react-icons/vsc';

function SearchBar() {
  return (
    <div className="flex h-10 grow items-center justify-center">
      <div className="flex h-7 w-full max-w-lg cursor-pointer items-center justify-center gap-1 rounded-lg border border-window-inactive-foreground bg-window-active-hover px-2 text-window-active-foreground hover:border-window-active-foreground">
        <VscSearch size={16} />
        <span>Jonathan Richardson</span>
      </div>
    </div>
  );
}

export default SearchBar;
