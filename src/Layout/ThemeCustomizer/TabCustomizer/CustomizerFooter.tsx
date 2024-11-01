import { Button } from "reactstrap";

const CustomizerFooter = () => {
  return (
    <div className="customizer-footer">
      <div className="d-flex align-items-center justify-content-around">
        <Button color="primary" href="#" target="_blank">
          <i className="fa-solid fa-cart-shopping" /> Buy Now
        </Button>
        <Button color="primary" href="#" target="_blank">
          <i className="fa-solid fa-file-arrow-up" /> Document
        </Button>
      </div>
    </div>
  );
};
export default CustomizerFooter;
