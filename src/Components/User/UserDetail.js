import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Axios from "axios";

export const UserDetail = (props) => {
    let {id} = useParams();
    const [modal, setModal] = useState(true);
    const [modalLoading, setModalLoading] = useState(false);
    const [unmountOnClose] = useState(true);
    const onModalClose = (e) => {
        props.history.push('/users/');
    };

    const saveChanges = () => {
        setModalLoading(false);
    };
    const url = "https://reqres.in/api";

    const fetUser = () => {
        Axios.get(`${url}/users/${id}`)
            .then(response => {
                console.log(response.data.data);
            });
    };

    useEffect(() => {
       fetUser();
    },[]);


    const toggle = () => setModal(!modal);
    return <>
        User detail{id}
    </>;
};