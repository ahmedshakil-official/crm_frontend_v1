import FoundProperty from "./Components/FoundProperty";
import NoteForProperty from "./Components/NoteForProperty";
import PropertyValuationCard from "./Components/PropertyValuationCard";

const PropertyDetails: React.FC = () => {
  return (
    <div>
      <PropertyValuationCard />
      <FoundProperty />
      <NoteForProperty />
    </div>
  );
};

export default PropertyDetails;
