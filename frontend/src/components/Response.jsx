import React from 'react'

const Response = (props) => {
    const {response, setShowPdf} = props;
    return (
        <div className="flex justify-center items-center h-[calc(100vh-4rem)] bg-gray-100 p-4">
          <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                Analysis Result
              </h2>
              <div className="text-gray-600 text-base leading-relaxed overflow-y-auto max-h-64 px-2">
                {response}
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 text-center">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                onClick={() => setShowPdf(true)}
              >
                Wanna Try Again ?
              </button>
            </div>
          </div>
        </div>
      );
}

export default Response