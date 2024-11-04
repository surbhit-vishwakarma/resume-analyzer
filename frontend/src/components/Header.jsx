import Logo from 'D:/study/resume-analyzer/frontend/src/assets/analyze-svgrepo-com.svg';
function Header() {
  return (
    <>
      <div className="bg-[#504658] h-16 flex items-center justify-between px-4 shadow-md font-mono">
        <div className="flex items-center space-x-4 pl-48">
        <img src={Logo} alt="Logo" className="w-6 h-6 stroke-[#F0DECB]" />
          <h2 className="text-[#F0DECB] text-2xl">Resume-Analyzer</h2>
        </div>

        <div className="flex space-x-4 pr-48">
          <h2 className="text-[#F0DECB] text-xl">About</h2>
          <h2 className="text-[#F0DECB] text-xl">Contact</h2>
        </div>
      </div>
    </>
  );
}

export default Header;
