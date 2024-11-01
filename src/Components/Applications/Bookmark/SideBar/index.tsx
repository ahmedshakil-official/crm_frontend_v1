import { BookmarkFilter, Href, ImagePath } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setBookmarkFilter } from "@/Redux/Reducers/BookmarkTabSlice";
import { Button, Card, CardBody, Col, Media } from "reactstrap";
import NavTab from "./NavTab";
import Image from "next/image";

const SideBar = () => {
  const {bookmarkFilter} = useAppSelector((state)=>state.bookmarkTab)
  const dispatch = useAppDispatch()

  return (
    <Col xl="3" className="box-col-4e">
      <div className="md-sidebar">
        <Button tag="a" color="primary" className="md-sidebar-toggle" href={Href} onClick={()=>dispatch(setBookmarkFilter())}>{BookmarkFilter}</Button>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${bookmarkFilter ? "open" : ""}`}>
          <div className="email-left-aside">
            <Card>
              <CardBody>
                <div className="email-app-sidebar left-bookmark">
                  <Media className="d-flex">
                    <div className="media-size-email">
                      <Image width={48} height={48} className="me-3 rounded-circle" src={`${ImagePath}/user/user.png`} alt="user" />
                    </div>
                    <Media body className="flex-grow-1">
                      <h4 className="f-w-600">MARK JENCO</h4>
                      <p>Markjecno@gmail.com</p>
                    </Media>
                  </Media>
                  <NavTab />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SideBar;
