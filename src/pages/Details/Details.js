import React from 'react';
import { useParams } from 'react-router';
import useService from '../../hooks/useService';
export const handleDetails = (service) => {

}
const Details = ({ service }) => {
    const { serviceId } = useParams();
    const [services] = useService();
    console.log(services, 'from details')
    return (
        <div>
            <h2>this is booking: {serviceId}</h2>
            {/* <h3>Service Name: {service.service_name}</h3> */}
        </div>
    );

};

export default Details;