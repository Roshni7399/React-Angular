import React from "react";
import { useState, useEffect } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { updateUserData } from '../../Services/Auth.service';
import { userlogout } from "../../Slice/AuthSlice";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Profile/Profile.css'

export default function Profile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Modal Popup
    const [modal, setModal] = useState(false);

    const modalHandle = async () => {
        return setModal(!modal);

    };

    const userdata = useSelector((state) => state.auth);
    // console.log("userdata",userdata)


    const [update, setUpdate] = useState({});
    // console.log("update useState",update)


    useEffect(() => {
        // console.log("useefftect profile")
        setUpdate(userdata.data.payload.result)

    }, []);

    const updateHandle = async () => {
        const response = await updateUserData(
            userdata.data.payload.result._id,
            update.firstname,
            update.lastname,
            update.mobileno,
            update.add_line1,
            update.add_line2,
            update.state,
            update.city
        );
        // console.log(response.data);

        if (response.data.status) {
            toast.success("Updated Successsfully");
            navigate("/profile");
        } else {
            toast.error("Unable to Update data of Customer");
        }
    }


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUpdate({ ...update, [name]: value });
    };

    const handleLogout = () => {
        localStorage.removeItem("users");
        localStorage.clear();
        dispatch(userlogout());
        navigate("/");
    };

    return (
        <div>
            <div class="profile-block">
                <div class="panel text-center">
                    <div class="user-heading"> <a href="#"><img src="https://p.kindpng.com/picc/s/24-248325_profile-picture-circle-png-transparent-png.png" alt="" title="" /></a>
                        <h1>{update.firstname}&nbsp; {update.lastname}</h1>
                        <p><i class="fa fa-envelope"></i>&nbsp;{update.email}</p>
                        <p><i class="fa fa-phone">&nbsp;</i>{update.mobileno}</p>
                        <p><i class="fa fa-address-card"></i>&nbsp;{userdata.data.payload.result.address.add_line1}&nbsp;{userdata.data.payload.result.address.add_line2}&nbsp;{userdata.data.payload.result.address.state}&nbsp;{userdata.data.payload.result.address.city}</p>
                    </div>
                    <ul class="nav nav-pills nav-stacked">
                        <li class="active-block" onClick={modalHandle}>
                            <a href="#">
                                <i class="fa fa-pencil-square-o"></i>
                                Update profile
                            </a>
                        </li>
                        <li onClick={handleLogout}><a><i class="fa fa-sign-out"></i>Sign-out&nbsp;&nbsp;&nbsp;</a></li>
                    </ul>
                </div>
            </div>


            {/* <!-- Modal For Update --> */}
            <Modal show={modal}>
                <ModalHeader closeButton onClick={modalHandle}></ModalHeader>
                <ModalTitle><center>Update Profile</center></ModalTitle>
                <ModalBody>
                    <label>First Name</label>
                    <input type="text" className="form-control" name="firstname" placeholder="First Name" required="" autoFocus="" value={update.firstname} onChange={handleInputChange} /><br />

                    <label>Last Name</label>
                    <input type="text" className="form-control" name="lastname" placeholder="Last Name" required="" autoFocus="" value={update.lastname} onChange={handleInputChange} /><br />

                    <label>Phone</label>
                    <input type="text" className="form-control" name="mobileno" placeholder="Mobile No." required="" autoFocus="" value={update.mobileno} onChange={handleInputChange} /><br />

                    <label>Address Line 1</label>
                    <input type="text" className="form-control" name="add_line1" placeholder="Address Line 1" required="" autoFocus="" /* value={update.address.add_line1} */ onChange={handleInputChange} /><br />

                    <label>Address Line 2</label>
                    <input type="text" className="form-control" name="add_line2" placeholder="Address Line 2" required="" autoFocus="" /* value={update.address.add_line2} */ onChange={handleInputChange} /><br />

                    <label>Stae</label>
                    <input type="text" className="form-control" name="state" placeholder="State" required="" autoFocus="" /* value={update.address.state} */ onChange={handleInputChange} /><br />

                    <label>City</label>
                    <input type="text" className="form-control" name="city" placeholder="City" required="" autoFocus="" /* value={update.address.city} */ onChange={handleInputChange} />

                </ModalBody>
                <ModalFooter>
                    <Button variant="danger" onClick={modalHandle}>Close</Button>
                    <Button variant="success" onClick={updateHandle}>Update</Button>

                </ModalFooter>

            </Modal>




        </div>
    );
}
