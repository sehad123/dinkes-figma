import React, { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    // Check if the device is mobile
    if (window.innerWidth <= 768) {
      const middlePosition = (document.documentElement.scrollHeight - window.innerHeight) / 3;
      window.scrollTo(0, middlePosition); // Scroll to the middle of the page
    }
  }, []);
  return (
    <div
      className="my-10 lg:h-[500px] lg:w-[90%] w-screen  border lg:rounded-3xl lg:m-10 bg-white dark:bg-gray-900 dark:text-white duration-200 h-[500px] overflow-y-auto  drop-shadow-[-5px_5px_8px_rgba(0,0,0,0.3)]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {" "}
      <div className="flex items-center justify-center w-max container">
        <div className="lg:w-[600px] w-[380px] lg:mb-12">
          <h4 className="font-bold text-[16px] my-5 text-center">ROLL BANNER</h4>
          <table className="lg:w-full w-[94%] border-collapse border border-gray-400 mb-10">
            <thead className="bg-gray-300 dark:bg-gray-900">
              {" "}
              <tr>
                <th className="text-center border border-gray-400 px-4 py-2">No</th>
                <th className="text-center border border-gray-400 px-4 py-2">Nama</th>
                <th className="text-center border border-gray-400 px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Gerakan Masyarakat Hidup Sehat (GERMAS)
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">2</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Posyandu Era Integrasi Layanan Primer
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">3</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a className="" href="#">
                    Semua Edisi Majalah Jendela Husada
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lihat</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Banner;
