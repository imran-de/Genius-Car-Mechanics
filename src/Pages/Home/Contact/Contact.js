import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './Contact.css'
import img from "../../../images/achievementbg.jpg";

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));
    console.log(result);
    return (
        <div className="container my-5">
            <h1 className="text-secondary mb-4 text-uppercase">Contacts</h1>
            <div className="row">
                <div className="col-sm-6">
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="col-sm-6 form-container">
                    <div className="text-start text-info">Don't hesitate to share your thought with us. We will be happy to accepts all kinds of message</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("Name")} placeholder="Full Name" />
                        <input {...register("email")} placeholder="Email" />
                        <select {...register("category")}>
                            <option value="">Select...</option>
                            <option value="A">Category A</option>
                            <option value="B">Category B</option>
                            <option value="C">Category C</option>
                        </select>
                        <input {...register("phone")} placeholder="Phone Number" />
                        <textarea {...register("message")} placeholder="Your message"></textarea>

                        {/* <p>{result}</p> */}
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;