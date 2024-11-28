import apiClient from "@/services/api-client";
import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";

interface AddAdvisorModalProps {
  isOpen: boolean;
  toggle: () => void;
  onSave: () => void;
}

const AddAdvisorModal: React.FC<AddAdvisorModalProps> = ({
  isOpen,
  toggle,
  onSave,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    designation: "",
    permanent_address: "",
    present_address: "",
    dob: "",
    gender: "",
    joining_date: "",
    registration_number: "",
    degree: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveAdvisor = async () => {
    let payload = {
      user: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone || null,
        password: formData.password,
      },
      designation: formData.designation || null,
      permanent_address: formData.permanent_address || null,
      present_address: formData.present_address || null,
      dob: formData.dob || null,
      gender: formData.gender,
      joining_date: formData.joining_date || null,
      registration_number: formData.registration_number || null,
      degree: formData.degree || null,
    };

    const handleSuccess = () => {
      toggle();
      console.log("added success");
    };
    const handleError = (e: any) => {
      console.log(e, "something went wrong");
    };

    await apiClient
      .post("/director/advisors/", payload)
      .then(handleSuccess)
      .catch(handleError);
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add Advisor</ModalHeader>
      <ModalBody>
        <Form>
          <Row>
            {/* First Column */}
            <Col md={6}>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange(e, "firstName")}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange(e, "email")}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange(e, "password")}
                />
              </FormGroup>
              <FormGroup>
                <Label for="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={(e) => handleInputChange(e, "phone")}
                />
              </FormGroup>
              <FormGroup>
                <Label for="gender">Gender</Label>
                <Input
                  id="gender"
                  name="gender"
                  type="select"
                  value={formData.gender}
                  onChange={(e) => handleInputChange(e, "gender")}
                >
                  <option value="">Select Gender</option>
                  <option value="MALE">MALE</option>
                  <option value="FEMALE">FEMALE</option>
                  <option value="OTHER">OTHER</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="permanent_address">Permanent Address</Label>
                <Input
                  id="permanent_address"
                  name="permanent_address"
                  type="text"
                  value={formData.permanent_address}
                  onChange={(e) => handleInputChange(e, "permanent_address")}
                />
              </FormGroup>
              <FormGroup>
                <Label for="degree">Degree</Label>
                <Input
                  id="degree"
                  name="degree"
                  type="text"
                  value={formData.degree}
                  onChange={(e) => handleInputChange(e, "degree")}
                />
              </FormGroup>
            </Col>

            {/* Second Column */}
            <Col md={6}>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange(e, "lastName")}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="designation">Designation</Label>
                <Input
                  id="designation"
                  name="designation"
                  type="text"
                  value={formData.designation}
                  onChange={(e) => handleInputChange(e, "designation")}
                />
              </FormGroup>

              <FormGroup>
                <Label for="dob">Date of Birth</Label>
                <Input
                  id="dob"
                  name="dob"
                  type="date"
                  value={formData.dob}
                  onChange={(e) => handleInputChange(e, "dob")}
                />
              </FormGroup>
              <FormGroup>
                <Label for="joining_date">Joining Date</Label>
                <Input
                  id="joining_date"
                  name="joining_date"
                  type="date"
                  value={formData.joining_date}
                  onChange={(e) => handleInputChange(e, "joining_date")}
                />
              </FormGroup>
              <FormGroup>
                <Label for="present_address">Present Address</Label>
                <Input
                  id="present_address"
                  name="present_address"
                  type="text"
                  value={formData.present_address}
                  onChange={(e) => handleInputChange(e, "present_address")}
                />
              </FormGroup>
              <FormGroup>
                <Label for="registration_number">Registration Number</Label>
                <Input
                  id="registration_number"
                  name="registration_number"
                  type="text"
                  value={formData.registration_number}
                  onChange={(e) => handleInputChange(e, "registration_number")}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSaveAdvisor}>
          Save
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddAdvisorModal;

// import apiClient from "@/services/api-client";
// import React, { useState } from "react";
// import {
//   Button,
//   Col,
//   Form,
//   FormGroup,
//   Input,
//   Label,
//   Modal,
//   ModalBody,
//   ModalFooter,
//   ModalHeader,
//   Row,
// } from "reactstrap";

// interface AddAdvisorModalProps {
//   isOpen: boolean;
//   toggle: () => void;
//   onSave: () => void;
// }

// const AddAdvisorModal: React.FC<AddAdvisorModalProps> = ({
//   isOpen,
//   toggle,
//   onSave,
// }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     password: "",
//     role: "",
//     designation: "",
//     permanent_address: "",
//     present_address: "",
//     dob: "",
//     gender: "",
//     joining_date: "",
//     registration_number: "",
//     degree: "",
//   });

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     field: string
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSaveAdvisor = async () => {
//     let payload = {
//       user: {
//         first_name: formData.firstName,
//         last_name: formData.lastName,
//         email: formData.email,
//         phone: formData.phone || null,
//         password: formData.password,
//       },
//       role: formData.role || null,
//       designation: formData.designation || null,
//       dob: formData.dob || null,
//       gender: formData.gender,
//       joining_date: formData.joining_date || null,
//       registration_number: formData.registration_number || null,
//       degree: formData.degree || null,
//     };

//     const handleSuccess = () => {
//       toggle();
//       console.log("added success");
//     };
//     const handleError = (e: any) => {
//       console.log(e, "something went wrong");
//     };

//     await apiClient
//       .post("/director/advisors/", payload)
//       .then(handleSuccess)
//       .catch(handleError);
//   };

//   return (
//     <Modal isOpen={isOpen} toggle={toggle}>
//       <ModalHeader toggle={toggle}>Add Advisor</ModalHeader>
//       <ModalBody>
//         <Form>
//           <div className="col-md-6">
//             {/* First Name */}
//             <FormGroup>
//               <Label for="firstName">First Name</Label>
//               <Input
//                 id="firstName"
//                 name="firstName"
//                 type="text"
//                 value={formData.firstName}
//                 onChange={(e) => handleInputChange(e, "firstName")}
//                 required
//               />
//             </FormGroup>

//             {/* Last Name */}
//             <FormGroup>
//               <Label for="lastName">Last Name</Label>
//               <Input
//                 id="lastName"
//                 name="lastName"
//                 type="text"
//                 value={formData.lastName}
//                 onChange={(e) => handleInputChange(e, "lastName")}
//                 required
//               />
//             </FormGroup>

//             {/* Email */}
//             <FormGroup>
//               <Label for="email">Email</Label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => handleInputChange(e, "email")}
//                 required
//               />
//             </FormGroup>

//             {/* Phone */}
//             <FormGroup>
//               <Label for="phone">Phone</Label>
//               <Input
//                 id="phone"
//                 name="phone"
//                 type="text"
//                 value={formData.phone}
//                 onChange={(e) => handleInputChange(e, "phone")}
//               />
//             </FormGroup>

//             {/* Password */}
//             <FormGroup>
//               <Label for="password">Password</Label>
//               <Input
//                 id="password"
//                 name="password"
//                 type="password"
//                 value={formData.password}
//                 onChange={(e) => handleInputChange(e, "password")}
//               />
//             </FormGroup>

//             {/* role */}
//             <FormGroup>
//               <Label for="role">Role</Label>
//               <Input
//                 id="role"
//                 name="role"
//                 type="text"
//                 value={formData.role}
//                 onChange={(e) => handleInputChange(e, "role")}
//               />
//             </FormGroup>
//           </div>

//           <div className="col-md-6">
//             {/* designation */}
//             <FormGroup>
//               <Label for="designation">Designation</Label>
//               <Input
//                 id="designation"
//                 name="designation"
//                 type="text"
//                 value={formData.designation}
//                 onChange={(e) => handleInputChange(e, "designation")}
//               />
//             </FormGroup>

//             {/* Gender */}
//             <FormGroup>
//               <Label for="gender">Gender</Label>
//               <Input
//                 id="gender"
//                 name="gender"
//                 type="select"
//                 value={formData.gender}
//                 onChange={(e) => handleInputChange(e, "gender")}
//               >
//                 <option value="">Select Gender</option>
//                 <option value="MALE">MALE</option>
//                 <option value="FEMALE">FEMALE</option>
//                 <option value="OTHER">OTHER</option>
//               </Input>
//             </FormGroup>
//             <FormGroup>
//               <Label for="phone">Date of birth</Label>
//               <Input
//                 id="dob"
//                 name="dob"
//                 type="date"
//                 value={formData.dob}
//                 onChange={(e) => handleInputChange(e, "dob")}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="joining_date">Joining date</Label>
//               <Input
//                 id="joining_date"
//                 name="joining_date"
//                 type="date"
//                 value={formData.joining_date}
//                 onChange={(e) => handleInputChange(e, "joining_date")}
//               />
//             </FormGroup>
//           </div>
//         </Form>
//       </ModalBody>
//       <ModalFooter>
//         <Button color="primary" onClick={handleSaveAdvisor}>
//           Save
//         </Button>
//         <Button color="secondary" onClick={toggle}>
//           Cancel
//         </Button>
//       </ModalFooter>
//     </Modal>
//   );
// };

// export default AddAdvisorModal;
