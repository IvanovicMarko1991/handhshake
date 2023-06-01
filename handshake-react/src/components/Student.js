import React from 'react';
import { Link } from 'react-router-dom';


function Students(props) {
    const { students } = props;

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Check in time</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => {
                        return (
                            <tr key={student.id}>
                                <td>{student.first_name}</td>
                                <td>{student.last_name}</td>
                                <td>{student.check_in_time}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Link to="/new" className="new-student-button">
                New Student
            </Link>
        </div>
    );
}

export default Students;
