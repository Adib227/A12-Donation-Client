const Offer = () => {
  return (
    <div id="explore" className="my-12">
      <h1 className="text-5xl font-semibold text-center py-20">
        What we offer
      </h1>
      <div className="grid lg:flex bg-base-100 ">
        <div>
          <figure>
            <img
              className=""
              src="https://i.ibb.co/4KBb0nX/mau-344.webp"
              alt="Album"
            />
          </figure>
        </div>
        <div className="card-body bg-[#f5f9fc]">
          <h2 className="card-title text-4xl md:text-5xl font-semibold p-14 md:p-10">
            We Offer
          </h2>
          <div className="grid md:flex pl-8 ">
            <div>
              <h1 className="text-2xl md:text-3xl font-medium p-4">
                <p>Blood Products </p>
              </h1>
              <p className="pl-4 flex">
                <span className="text-xl text-[#196cb3]">></span>
                <span className="p-1 font-semibold text-base">
                  Red Blood Cells
                </span>
              </p>
              <p className="pl-4">
                {' '}
                <span className="text-xl text-[#196cb3]">></span>
                <span className="p-1  font-semibold text-base">
                  Plasma Products
                </span>
              </p>
              <p className="pl-4">
                {' '}
                <span className="text-xl text-[#196cb3]">></span>
                <span className="p-1  font-semibold text-base">
                  Platelet Products
                </span>
              </p>
              <p className="pl-4">
                {' '}
                <span className="text-xl text-[#196cb3]">></span>
                <span className="p-1  font-semibold text-base">
                  Blood Products for Research
                </span>
              </p>
              <p className="pl-4">
                {' '}
                <span className="text-xl text-[#196cb3]">></span>
                <span className="p-1 font-semibold text-base">Whole Blood</span>
              </p>
            </div>
            <div className="md:pl-24">
              <h1 className="text-2xl md:text-3xl font-medium p-4">
                <p>Biomedical Services </p>
              </h1>
              <p className="pl-4">
                {' '}
                <span className="text-xl text-[#196cb3]">></span>
                <span className="p-1  font-semibold text-base">
                  Blood and Diagnostic testing
                </span>
              </p>
              <p className="pl-4">
                {' '}
                <span className="text-xl text-[#196cb3]">></span>
                <span>
                  <span className="p-1  font-semibold text-base">
                    Blood group serology
                  </span>
                </span>
              </p>
              <p className="pl-4">
                {' '}
                <span className="text-xl text-[#196cb3]">></span>
                <span className="p-1 font-semibold text-base">HLA testing</span>
              </p>
              <p className="pl-4">
                {' '}
                <span className="text-xl text-[#196cb3]">></span>
                <span className="p-1  font-semibold text-base">
                  {' '}
                  Immunohematology Reference lab testing
                </span>
              </p>
              <p className="pl-4">
                {' '}
                <span className="text-xl text-[#196cb3]">></span>
                <span className="p-1  font-semibold text-base">
                  Molecular testing
                </span>
              </p>
              <p className="pl-4">
                {' '}
                <span className="text-xl text-[#196cb3]">></span>
                <span className="p-1  font-semibold text-base">
                  Neutrophil testing
                </span>
              </p>
              <p className="pl-4">
                {' '}
                <span className="text-xl text-[#196cb3]">></span>
                <span className="p-1  font-semibold text-base">
                  Infectious disease testing
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
