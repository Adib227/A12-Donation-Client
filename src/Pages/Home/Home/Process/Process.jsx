import React from 'react';

const Process = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-center pt-16 md:pt-36 pb-8">
        {' '}
        Donation Process{' '}
      </h1>
      <div className="pt-24 grid md:flex justify-evenly w-full">
        <div>
          <img
            className="w-full md:w-[900px] h-full  md:h-[500px]"
            src="https://i.ibb.co.com/f21N562/Give-blood-save-life.jpg"
            alt=""
          />
        </div>
        <div className="w-full md:w-[850px]">
          <h1 className="text-3xl md:text-4xl font-bold pb-4">
            The Blood Donation Process
          </h1>
          <div className="">
            <div className="collapse collapse-plus">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-2xl font-semibold">
                Registration
              </div>
              <div className="collapse-content">
                <p className="text-xl">
                  <h1>> We’ll sign you in and go over basic eligibility.</h1>
                  <h1>
                    > You’ll be asked to show ID, such as your driver’s license.
                  </h1>{' '}
                  <h1> > You’ll read some information about donating blood.</h1>{' '}
                  <h1> > We’ll ask you for your complete address.</h1>
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-2xl font-semibold">
                Health History
              </div>
              <div className="collapse-content">
                <p className="text-xl">
                  {' '}
                  <h1>
                    > <b>Medical Conditions:</b> Includes past and present
                    illnesses, surgeries, and chronic conditions like diabetes
                    or hypertension.
                  </h1>
                  <h1>
                    > <b>Medications and Allergies:</b> Records current
                    medications, dosages, and any known drug or environmental
                    allergies.
                  </h1>{' '}
                  <h1>
                    {' '}
                    > <b>Family History:</b> Documents hereditary health
                    conditions, such as heart disease or cancer, within the
                    family.
                  </h1>
                  <h1>
                    {' '}
                    ><b> Lifestyle Factors:</b> Covers habits like smoking,
                    alcohol consumption, diet, and exercise, influencing overall
                    health.
                  </h1>
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-2xl font-semibold">
                Your Blood Donation
              </div>
              <div className="collapse-content">
                <p className="text-xl">
                  {' '}
                  Blood donation is a simple process that can save countless
                  lives. It begins with registration and a quick health
                  screening to ensure donor eligibility. The donation itself
                  takes only a few minutes, followed by a short recovery period
                  with refreshments. Each donation has the power to make a
                  difference by providing life-saving blood components to those
                  in need.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-2xl font-semibold">
                Refreshments & Recovery
              </div>
              <div className="collapse-content">
                <p className="text-xl">
                  {' '}
                  Donors rest briefly and enjoy snacks to replenish energy
                  before leaving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
