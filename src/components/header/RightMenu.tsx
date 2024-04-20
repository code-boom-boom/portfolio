import {
  VscChromeClose,
  VscChromeMinimize,
  VscChromeRestore,
} from 'react-icons/vsc';

function RightMenu() {
  return (
    <div className="flex justify-end">
      <div className="flex h-10 w-10 items-center justify-center hover:bg-window-active-hover">
        <VscChromeMinimize
          className="text-window-active-foreground"
          size={16}
        />
      </div>
      <div className="flex h-10 w-10 items-center justify-center hover:bg-window-active-hover">
        <VscChromeRestore className="text-window-active-foreground" size={16} />
      </div>
      <div className="group flex h-10 w-10 items-center justify-center hover:bg-red-600">
        <VscChromeClose
          className="text-window-active-foreground group-hover:text-white"
          size={16}
        />
      </div>
    </div>
  );
}

export default RightMenu;
