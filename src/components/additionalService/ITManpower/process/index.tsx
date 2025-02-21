"use client"

import SectionTitle from "@/components/Common/SectionTitle";
import SingleProcess from "./singleProcess"
import processData from "./processData"

const Process = () => {

  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="IT Manpower Process"
            paragraph="At HHP Software, we specialize in tailored IT manpower solutions, ensuring seamless integration with your workflows. Our approach combines strategic collaboration and cutting-edge recruitment practices to deliver high-caliber professionals who drive your projects forward effectively."
            center
            mb="100px"
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {processData.map((process) => (
              <SingleProcess key={process.id} process={process} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;