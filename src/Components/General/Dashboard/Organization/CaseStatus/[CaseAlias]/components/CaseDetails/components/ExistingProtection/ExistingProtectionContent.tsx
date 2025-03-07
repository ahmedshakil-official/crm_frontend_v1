import { ApplicantProps } from "@/Types/Organization/CaseDetails/ApplicantsDetailsTypes";

interface ExistingProtectionContentProps {
  applicantsData: ApplicantProps[];
  basicTab: string | null;
}

const ExistingProtectionContent: React.FC<ExistingProtectionContentProps> = ({
  applicantsData,
  basicTab,
}) => {
  return (
    // Your content here
    <div>
      {/* Render content based on basicTab and applicantsData */}
      {basicTab && applicantsData && applicantsData.length > 0 && (
        <div>
          {/* Render content for the selected applicant */}
          <h2>Content for {basicTab}</h2>
          {/* Add your content here */}
        </div>
      )}
    </div>
  );
};

export default ExistingProtectionContent;
