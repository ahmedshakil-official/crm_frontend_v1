import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AddPost, Blog, BlogDiscardButton, BlogPostButton, PostEdit } from "@/Constant";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import DropzoneClass from "./DropzoneClass";
import { FormPost } from "./FormPost";

const AddPostContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={AddPost} parent={Blog} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title={PostEdit} />
              <CardBody className="add-post">
                <FormPost />
                <DropzoneClass />
                <div className="btn-showcase text-end mt-4">
                  <Button color="primary">{BlogPostButton}</Button>
                  <Button color="light" type="reset" className="text-dark">
                    {BlogDiscardButton}
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddPostContainer;
