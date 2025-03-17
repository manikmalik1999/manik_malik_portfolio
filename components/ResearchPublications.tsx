"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export const ResearchPublications = () => {
  const researchPublicationUrl = "https://www.ijfmr.com/research-paper.php?id=36056"; // Replace with your actual URL

  return (
    <div className="py-20" id="research"> {/* Changed background color */}
      <h1 className="heading">
        My <span className="text-purple">Research Publications</span>
      </h1>
      <div className="flex items-center justify-center w-full mt-10 px-4">
        <a
          href={researchPublicationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-6xl flex justify-center">
          <TextRevealCard
            text="The Future of AI in Production"
            revealText="Leveraging Kubernetes for LLM Deployment"
            className="w-full"
          >
            <TextRevealCardTitle>
              Published in IJFMR Volume 7, Issue 1, Jan-Feb 2025
            </TextRevealCardTitle>
            <TextRevealCardDescription>
            This paper introduces a transformative approach leveraging Docker&apos;s lightweight containerization and Kubernetes&apos; robust orchestration to redefine LLM deployment. Our proposed architecture ensures seamless scalability, optimal resource utilization, and multi-cloud flexibility, while addressing ethical, environmental, and security concerns. Through compelling case studies, we demonstrate how these technologies revolutionize AI workflows, delivering unmatched performance, cost savings, and operational excellence for large-scale LLM production systems.
            </TextRevealCardDescription>
          </TextRevealCard>
        </a>
      </div>
    </div>
  );
};