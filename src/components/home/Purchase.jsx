import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import SectionComponent from '../SectionComponent';
import Star from '../../assets/custom-icons/Star';
import RightArrow from '../../assets/custom-icons/RightArrow';

const packages = {
    "group_2": 0.00000000112,
    "group_5": 0.00000000235,
    "group_8": 0.00000000457
};

const Purchase = () => {
    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm();

    const selectedPackage = watch("package");

    useEffect(() => {
        if (selectedPackage && packages[selectedPackage]) {
            setValue("paymentAmount", packages[selectedPackage]);
        } else {
            setValue("paymentAmount", ""); // Clear the field if no package is selected
        }
    }, [selectedPackage, setValue]);
    

    const purchaseAPK = (fields) => {
        console.log(fields);
    };

    return (
        <section id='purchase' className="xui-container xui-py-3">
            <SectionComponent intro='Get Cryptic Apk' heading='Make A Purchase Now' />
            <div className='xui-mt-5'>
                <form onSubmit={handleSubmit(purchaseAPK)} autoComplete="off" noValidate className='xui-form'>
                    <div className='xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-2'>
                        <div className='cryptic-purchase-form-group'>
                            <label htmlFor="walletAddress" className='xui-font-sz-85'>Wallet Address <Star /></label>
                            <input type="text" id="walletAddress" defaultValue="1BoatSLRHtKNngkdXEeobR76b53LETtpyT" readOnly {...register("walletAddress")} />
                        </div>
                        <div className='cryptic-purchase-form-group'>
                            <label htmlFor="package" className='xui-font-sz-85'>Package <Star /></label>
                            <select id="package" {...register("package", { required: "This field is required" })}>
                                <option value="" selected>Select Package</option>
                                <option value="group_2">Group of 2 Package</option>
                                <option value="group_5">Group of 5 Package</option>
                                <option value="group_8">Group of 8 Package</option>
                            </select>
                            {errors.package && (<p className="xui-form-error-msg">{errors.package.message}</p>)}
                        </div>
                        <div className='cryptic-purchase-form-group'>
                            <label htmlFor="paymentAmount" className='xui-font-sz-85'>Payment Amount (BTC) <Star /></label>
                            <input type="text" id="paymentAmount" readOnly {...register("paymentAmount", { required: "This field is required" })} placeholder='Input Amount' />
                            {errors.paymentAmount && (<p className="xui-form-error-msg">{errors.paymentAmount.message}</p>)}
                        </div>
                        <div className='cryptic-purchase-form-group'>
                            <label htmlFor="transactionID" className='xui-font-sz-85'>Transaction ID <Star /></label>
                            <input type="number" id="transactionID" {...register("transactionID", { required: "This field is required" })} placeholder='Provide Transaction ID' />
                            {errors.transactionID && (<p className="xui-form-error-msg">{errors.transactionID.message}</p>)}
                        </div>
                    </div>
                    <button className='padding-[.6rem_.4rem_.6rem_1rem] xui-d-inline-flex xui-flex-ai-center xui-grid-gap-1-half bdr-color-[transparent] xui-font-sz-80 xui-text-dc-none xui-bg-black xui-text-white xui-bdr-rad-2 xui-mt-1-half' type="submit">
                        <p className='xui-font-sz-120 xui-font-w-600'>Confirm Payment</p>
                        <span className='xui-w-35 xui-h-35 xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bg-white'><RightArrow /></span>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Purchase;
