"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
    const router = useRouter();
    useEffect(() => {
        const userToken = localStorage.getItem("userToken");
        if (userToken) {
            router.push("/seller/main");
        } else {
            router.push("/seller/home");
        }
    }, []);
    return <div></div>;
};

export default page;
