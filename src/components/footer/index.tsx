import { VscBell, VscError, VscGitMerge, VscRadioTower, VscRemote, VscSync, VscWarning } from 'react-icons/vsc';

function Footer() {
  return (
    <div
      className="absolute h-6 w-screen bg-window-active-background bottom-0 left-0 flex items-center justify-between gap-8">
      <div className="flex h-full">
        <div className="flex justify-center items-center bg-remote-background h-full px-4 hover:bg-window-active-hover">
          <VscRemote className="text-remote-foreground" size={16} />
        </div>
        <div className="flex justify-center items-center hover:bg-window-active-hover px-2 gap-1">
          <VscGitMerge className="text-window-active-foreground" size={16} />
          <span className="text-window-active-foreground">Copyright 2024</span>
        </div>
        <div className="flex justify-center items-center hover:bg-window-active-hover px-2">
          <VscSync className="text-window-active-foreground" size={16} />
        </div>
        <div className="flex justify-center items-center hover:bg-window-active-hover px-2 gap-1">
          <VscError className="text-window-active-foreground" size={16} />
          <span className="text-window-active-foreground">0</span>
          <VscWarning className="text-window-active-foreground" size={16} />
          <span className="text-window-active-foreground">0</span>
        </div>
        <div className="flex justify-center items-center hover:bg-window-active-hover px-2 gap-1">
          <VscRadioTower className="text-window-active-foreground" size={16} />
          <span className="text-window-active-foreground">0</span>
        </div>
      </div>
      <div className="flex h-full">
        <div className="flex justify-center items-center hover:bg-window-active-hover px-2">
          <span className="text-window-active-foreground">Ln 24, Col 32</span>
        </div>
        <div className="flex justify-center items-center hover:bg-window-active-hover px-2">
          <span className="text-window-active-foreground">Spaces: 4</span>
        </div>
        <div className="flex justify-center items-center hover:bg-window-active-hover px-2">
          <span className="text-window-active-foreground">UTF-8</span>
        </div>
        <div className="flex justify-center items-center hover:bg-window-active-hover px-2">
          <span className="text-window-active-foreground">CRLF</span>
        </div>
        <div className="flex justify-center items-center hover:bg-window-active-hover px-2">
          <span className="text-window-active-foreground">RESUME</span>
        </div>
        <div className="flex justify-center items-center hover:bg-window-active-hover px-4">
          <VscBell className="text-window-active-foreground" size={16} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
