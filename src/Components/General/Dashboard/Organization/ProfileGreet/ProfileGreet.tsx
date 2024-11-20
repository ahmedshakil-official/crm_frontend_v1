import SvgIcon from "@/CommonComponent/SVG/IconSvg";
import { Href, ImagePath } from "@/Constant";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

interface ProfileData {
  slug: string;
  name: string;
  email: string;
  logo: string | null;
  profile_image: string | null;
  hero_image: string | null;
  primary_mobile: string;
  other_contact: string | null;
  contact_person: string;
  contact_person_designation: string | null;
  website: string | null;
  license_no: string | null;
  license_image: string | null;
  is_removed: boolean;
  is_approved: boolean;
  is_active: boolean;
  is_staff: boolean;
}

const ProfileGreet = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [slug, setSlug] = useState("");

  // Retrieve slug from localStorage
  useEffect(() => {
    const storedSlug = localStorage.getItem("slug");
    console.log("Retrieved slug:", storedSlug); // Debugging
    if (storedSlug) {
      setSlug(storedSlug);
    } else {
      console.error("Slug not found. Please log in.");
    }
  }, []);

  // Fetch profile data
  useEffect(() => {
    if (!slug) return;

    const fetchProfileData = async () => {
      try {
        console.log("Fetching data with slug:", slug); // Debugging
        const response = await fetch(
          `https://d3d1-123-253-215-58.ngrok-free.app/organization/${slug}/`
        );
        console.log("API Response Status:", response.status); // Debugging
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched Data:", data); // Debugging
          setProfileData(data);
        } else {
          console.error("Failed to fetch profile data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProfileData();
  }, [slug]);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Col xl="4" sm="6" className="proorder-xxl-1 box-col-6">
      <Card className="welcome-banner">
        <CardHeader className="p-0 card-no-border">
          <div className="welcome-card">
            <img
              className="w-100 img-fluid"
              src="../assets/images/dashboard-1/welcome-bg.png"
              alt="ProfileGreet"
            />
          </div>
        </CardHeader>
        <CardBody>
          <div className="d-flex align-center">
            <h1>
              Hello, {profileData ? profileData.name : "Loading..."}{" "}
              <Image
                width={20}
                height={20}
                src={`${ImagePath}/dashboard-1/hand.png`}
                alt="ProfileGreet"
              />
            </h1>
          </div>
          <p>
            {profileData
              ? `Welcome back, ${profileData.contact_person || "user"}!`
              : "Fetching your details..."}
          </p>
          <div className="d-flex align-center justify-content-between">
            <Link className="btn btn-pill btn-primary" href={Href}>
              What's New!
            </Link>
            <span>
              <SvgIcon className="stroke-icon" iconId="watch" />
              {currentTime.toLocaleTimeString()}
            </span>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProfileGreet;
