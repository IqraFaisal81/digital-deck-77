import React from "react";
import { Award } from "lucide-react";

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-16 lg:py-20 bg-gradient-to-b from-purple-50/30 via-white to-slate-50 dark:from-purple-900/60 dark:via-gray-900 dark:to-purple-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
            <Award className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-800 dark:text-blue-300">Certifications</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Verified Credentials
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Officially certified by The GHL Academy
          </p>

          <a
            href="https://verify.theghlacademy.com/en/verify/63011061257576?ref=email"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-white dark:bg-gray-800 p-2"
          >
            <img
              src="https://verified-bucket.s3.eu-central-1.amazonaws.com/cert/63011061257576.png"
              alt="Go High Level Certification - Iqra Faisal"
              className="max-w-full h-auto rounded-xl"
              loading="lazy"
            />
            <span className="block mt-3 mb-2 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline">
              Click to verify certificate →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
