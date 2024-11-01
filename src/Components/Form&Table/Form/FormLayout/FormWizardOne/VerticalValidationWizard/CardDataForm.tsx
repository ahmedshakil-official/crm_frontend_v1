import { Col, FormGroup, Input, Label } from "reactstrap";
import { AdharaPlaceholder, AllTheAboveInformationIsCorrect, CVVNumber, CardNumber, Expiration, UploadDocumentation } from "@/Constant";
import { CardDetailProp } from "@/Types/FormType";

export const CardDataForm: React.FC<CardDetailProp> = ({ cartInfoForm, getUserData }) => {
  const { cardNumber, expirationDate, cvvNumber } = cartInfoForm;

  return (
    <>
      <Col md="4" sm="6">
        <FormGroup>
          <Label check className="form-label">{CardNumber}</Label>
          <Input type="text" placeholder={AdharaPlaceholder} name="cardNumber" value={cardNumber} onChange={getUserData} />
        </FormGroup>
      </Col>
      <Col md="4" sm="6">
        <FormGroup>
          <Label htmlFor="validationDates" check className="form-label">{Expiration}</Label>
          <Input id="validationDates" type="number" placeholder="xx/xx" name="expirationDate" value={expirationDate} onChange={getUserData} />
        </FormGroup>
      </Col>
      <Col md="4" sm="6">
        <FormGroup>
          <Label htmlFor="cvvNumber-b" check className="form-label">{CVVNumber}</Label>
          <Input id="cvvNumber-b" type="text" name="cvvNumber" value={cvvNumber} onChange={getUserData} />
        </FormGroup>
      </Col>
      <Col md="12" sm="6">
        <FormGroup>
          <Label htmlFor="formFile2" check className="form-label">{UploadDocumentation}</Label>
          <Input id="formFile2" type="file" name="documentationName" onChange={getUserData} />
        </FormGroup>
      </Col>
      <Col xs="12">
        <FormGroup check className="mb-0">
          <Input id="invalidCheck-b" type="checkbox" required />
          <Label htmlFor="invalidCheck-b" check>{AllTheAboveInformationIsCorrect}</Label>
        </FormGroup>
      </Col>
    </>
  );
};
