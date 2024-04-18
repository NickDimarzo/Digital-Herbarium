"use client";

import { useRouter } from 'next/router';
import { useState } from "react";
import { useUserAuth } from "../../src/_utils/auth-context";
import {useEffect} from "react";
import {fetchUserPlants} from "../../src/_services/DbServices";
import systemPlants from "../../src/assets/new-herbarium.json";



export default function Page({params}) {

    // check to see it the plant id is exists as the elCode for one of the users plants in the database



    return (
        <div>
            <h1>Plant Page</h1>
            <p>Plant ID: {params.plantId}</p>


            
        </div>
    );
}
