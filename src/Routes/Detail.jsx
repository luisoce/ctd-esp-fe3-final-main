import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";
import axios from "axios";

const Detail = () => {
  const { url } = useContextGlobal();
  const { id } = useParams();
  const [doctor, setDoctor] = useState({});

  useEffect(() => {
    axios(url + id).then((res) => setDoctor(res.data));
  }, []);

  return (
    <div>
      <h1>Detail Dentist {doctor.id}</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{doctor.name}</td>
            <td>{doctor.email}</td>
            <td>{doctor.phone}</td>
            <td>{doctor.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
