import { FaInstagram } from "react-icons/fa";

export default function OurTeam() {
  return (
    // <!-- component -->
    <section className="bg-orange-50 min-h-screen py-12 grid justify-center ">
      <div className="max-w-7xl mx-auto px-8">
        <div className=" text-center mb-12">
          <h2 className="text-2xl md:text-5xl  font-lobster ">Хүндэтгэсэн</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 ">
          {/* card */}
          <div className=" max-w-sm bg-white rounded-lg shadow-sm ">
            <div className="flex flex-col items-center p-10">
              <img
                className="w-44 h-44 mb-5 rounded-full shadow-lg object-cover object-right "
                src="./images/aaw.jpeg"
                alt="Natasha Ivanova image"
              />
              <h5 className="mt-1 mb-4 text-2xl font-bold text-yellow-500 ">
                Алтаншагай
              </h5>
              <span className="text-md text-gray-500 italic ">аав</span>
            </div>
          </div>
          {/* card */}
          <div className=" max-w-sm bg-white rounded-lg shadow-sm">
            <div className="flex flex-col items-center p-10">
              <img
                className="w-44 h-44 mb-5 rounded-full  shadow-lg object-cover object-left"
                src="./images/eej.jpeg"
                alt="Mike Perry image"
              />
              <h5 className="m-1 mb-4 text-2xl font-bold text-yellow-500 ">
                Бямбабуд
              </h5>
              <span className="text-md text-gray-500 italic ">ээж</span>
            </div>
          </div>
          <div className=" max-w-sm bg-white rounded-lg shadow-sm">
            <div className="flex flex-col items-center p-10">
              <img
                className="w-44 h-44 mb-5 rounded-full  shadow-lg object-cover object-left"
                src="./images/togtuun.jpeg"
                alt="Mike Perry image"
              />
              <h5 className="m-1 mb-4 text-2xl font-bold text-yellow-500 ">
                Тогтуун
              </h5>
              <span className="text-md text-gray-500 italic ">хүү</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
