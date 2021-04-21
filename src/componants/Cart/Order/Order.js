import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { CartContext } from '../../../App';

const Order = ({ orderProducts, total }) => {
    const [cart, setCart] = useContext(CartContext);
    const [userData, setUserData] = useState({})
    const [orderSuccess, setOrderSuccess] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.orderId = Math.random().toString(36).split(".")[1];
        setUserData(data);
        axios.post('https://frozen-fjord-85553.herokuapp.com/addOrder', { orderProducts, total, ...data })
            .then(function (response) {
                setOrderSuccess(!orderSuccess)
                setCart([])
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div className="container row ms-auto me-auto">
            <h1 className="text-center">Order Form</h1>
            <form className={orderSuccess === false ? "d-block row g-3 mb-5" : "d-none"} onSubmit={handleSubmit(onSubmit)}>
                <div class="col-12">
                    <label for="inputName" class="form-label">Name</label>
                    <input {...register("name", { required: true })} type="text" class="form-control" id="inputName" placeholder="Your name.." />
                    {errors.name && <span>This field is required</span>}
                </div>
                <div class="col-12">
                    <label for="inputPhone" class="form-label">Phone</label>
                    <input {...register("phone", { required: true })} type="number" class="form-control" id="inputPhone" placeholder="0191----" />
                    {errors.phone && <span>This field is required</span>}
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input {...register("address", { required: true })} type="text" class="form-control" id="inputAddress" placeholder="Full Address" />
                    {errors.address && <span>This field is required</span>}
                </div>
                <div class="col-12">
                    <label for="inputNote" class="form-label">Note</label>
                    <textarea {...register("note")} type="text" class="form-control" id="inputNote" placeholder="আপনার স্পেশাল কোনো রিকোয়ারমেন্ট থাকলে এখানে লিখুন। যেমন- পণ্যের সাইজ, কালার, সংখা, ডেলিভারি টাইম ও ডেট, পছন্দের কুরিয়ার অন্যান্ন…" />
                </div>

                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Order</button>
                </div>
            </form>
            <div className={orderSuccess === true ? "d-block" : "d-none"}>
                <div style={{ height: "600px", margin: '' }}>
                    <p>প্রিয়,
                <br />
                        {userData.name}
                        <br />
                    আপনার অর্ডারটি গ্রহণ করা হয়েছে।
                    <br />
                    আপনার অর্ডার নাম্বার: {userData.orderId}
                        <br />
                    এবং পণ্যের মূল্য - {total}
                        <br />
                    প্রয়োজনে কল করুনঃ 01928284848, 01322660999, 01745101406, 01980440044, 01686897912
                    <br />
                        <br />
                    ধন্যবাদান্তে
                    <   br />
                    Nizhum | নিঝুম
                </p>
                </div>
            </div>
        </div>
    );
};

export default Order;