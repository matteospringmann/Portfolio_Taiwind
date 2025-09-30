import React from "react";

const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                {title}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {subtitle}
            </p>
        </div>
    );
};

export default SectionTitle;
