import React from "react";


interface PageTemplateProps {
    title: string;
    subTitle: string;
    image: string;
    altText: string;
    children?: React.ReactNode;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ title, subTitle, image, altText, children }) => {
    return (
        <div className="page">
            <h1>{title}</h1>
            <p>{subTitle}</p>
            {children}
            <img src={image} alt={altText} className="page-image" />
        </div>
    );
};

export default PageTemplate;