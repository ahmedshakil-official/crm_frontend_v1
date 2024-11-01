import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CustomFormsTitle, FavoriteChocolatesTitle, FavoriteColorsTitle, FavoriteThemeTitle, Options, PixelstrapThemeTitle, Submit } from "@/Constant";
import { CustomFormsSubTitle, FavoriteChocolatesData, FavoriteColorsData, FavoriteThemesData, PixelstrapSelectList } from "@/Data/Form&Table/Form/FormControls";
import { Button, Card, CardBody, Col, InputGroup, InputGroupText } from "reactstrap";
import CustomFormSelect from "./CustomFormSelect";

export const CustomForms = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={CustomFormsTitle} span={CustomFormsSubTitle} />
        <CardBody className="common-flex main-custom-form">
          <InputGroup>
            <InputGroupText htmlFor="inputGroupSelect01">{Options}</InputGroupText>
            <CustomFormSelect inputId="inputGroupSelect01" title={PixelstrapThemeTitle} options={PixelstrapSelectList} />
          </InputGroup>
          <InputGroup>
            <CustomFormSelect inputId="inputGroupSelect02" title={FavoriteColorsTitle} options={FavoriteColorsData} />
            <InputGroupText htmlFor="inputGroupSelect02">{Options}</InputGroupText>
          </InputGroup>
          <InputGroup>
            <Button color="secondary" outline>
              <i className="fa-solid fa-credit-card" />
            </Button>
            <CustomFormSelect inputId="inputGroupSelect03" title={FavoriteChocolatesTitle} options={FavoriteChocolatesData} />
          </InputGroup>
          <InputGroup>
            <CustomFormSelect inputId="inputGroupSelect04" title={FavoriteThemeTitle} options={FavoriteThemesData} />
            <Button color="secondary" outline>
              {Submit}
            </Button>
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
