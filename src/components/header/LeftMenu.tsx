import VSCodeIcon from '@assets/img/vscode.png';

function LeftMenu() {
  return (
    <div className="flex h-10 items-center justify-start px-2">
      <img src={VSCodeIcon} alt="vscode" className="mr-2 h-6" />
      <span className="rounded px-2 text-window-active-foreground hover:bg-window-active-hover">
        Me
      </span>
      <span className="rounded px-2 text-window-active-foreground hover:bg-window-active-hover">
        Project
      </span>
      <span className="rounded px-2 text-window-active-foreground hover:bg-window-active-hover">
        Playground
      </span>
      <span className="rounded px-2 text-window-active-foreground hover:bg-window-active-hover">
        Contact
      </span>
    </div>
  );
}

export default LeftMenu;
