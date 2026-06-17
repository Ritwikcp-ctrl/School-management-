"use client";

const FeatureCard = () => {
  return (
    <div className=" w-full max-w-[550px] rounded-[32px] border border-black/10 bg-white p-8">
      <div className="flex flex-col h-full">
        {/* Small Statement */}
        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            IMMUTABILITY
          </div>

          {/* Heading */}
          <h2 className="mt-4 text-4xl font-black tracking-tight text-black">
            You can't currupt it
          </h2>
        </div>

        {/* Divider */}
        <div className="my-8">
          <div className="mx-auto w-72 border-t border-dashed border-black/30" />
        </div>

        {/* Paragraph */}
        <div>
          <p className="text-lg leading-relaxed text-gray-600">
           Once data is added to the blockchain, it cannot be altered or deleted, ensuring permanent and trustworthy records.
          </p>
        </div>

        {/* Image */}
        <div className="mt-10 flex min-h-[700px] flex-col">
          <img
            src="https://www.vhv.rs/dpng/d/471-4719808_the-blockchain-is-a-decentralized-technology-that-it.png"
            alt="Blockchain Illustration"
            className="w-full h-1/2 rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
