import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";
import { ROUTE } from "../../../types/route.enum";

const InteractiveResults: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Finish</h1>
      <Button
        name="return to catalog"
        onClick={() => navigate(ROUTE.CATALOG)}
      />
    </div>
  );
};

export default InteractiveResults;
