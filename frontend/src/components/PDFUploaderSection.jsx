function PDFUploaderSection(props) {
  const {pageViews} = props;
  console.log(pageViews);
  return (
    <>
      <div className="flex justify-center font-mono">
        <div className="border-dotted border-2 border-black h-[30rem] w-[50rem] m-[5rem] mx-auto flex flex-col justify-between">
          <div className="flex flex-col items-center justify-start">
            <button className="mt-16 border border-black rounded-md w-[250px] h-[100px] bg-[#CE2E6C] text-[#F0DECB] text-2xl font-bold">
              Upload Here
            </button>
            <p className="mt-1">*Click here and select your resume</p>
          </div>
          <p className="mb-4 text-center">
            Note: Resume format must be of PDF type.
          </p>
        </div>
      </div>
    </>
  );
}

export default PDFUploaderSection;
