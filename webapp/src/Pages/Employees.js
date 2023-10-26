import '../App.css';
import {useEffect, useState} from "react";
import Employee from "../Components/Employee";
import AddEmployee from "../Components/AddEmployee";
import { v4 as uuidv4 } from 'uuid';
import EditEmployee from "../Components/EditEmployee";
import Header from "../Components/Header";

function Employees() {
    const [employees, setEmployees] = useState(
        [
            {
                id: 1,
                name: "Caleb",
                role: "Developer",
                img: "https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg"
            },
            {
                id: 2,
                name: "Kaarsten",
                role: "Manager",
                img: "https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg"
            },
            {
                id: 3,
                name: "Jones",
                role: "Dancer",
                img: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg"
            },
            {
                id: 4,
                name: "Conny",
                role: "Developer",
                img: "https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg"
            },
            {
                id: 5,
                name: "Frederick",
                role: "Musician",
                img: "https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg"
            },
            {
                id: 6,
                name: "Johnny",
                role: "Driver",
                img: "https://images.pexels.com/photos/2859616/pexels-photo-2859616.jpeg"
            }
        ])

    function updateEmployee(id, newName, newRole) {
        const updatedEmployees = employees.map((employee) => {
            if (employee.id === id) {
                return {...employee, name: newName, role: newRole}
            }
            return employee
        });
        setEmployees(updatedEmployees);
    }

    function newEmployee(name, role, img) {
        const newEmployee = {
            id:uuidv4(),
            name: name,
            role: role,
            img: img
        }
        setEmployees([...employees, newEmployee]);
    }

    const showEmployees = true
    return (
        <div className="">
            {showEmployees ? (
                <>
                    <div className="flex flex-wrap justify-center">
                        {employees.map((employee) => {
                            const editEmployee = <EditEmployee
                                id={employee.id}
                                name={employee.name}
                                role={employee.role}
                                updateEmployee={updateEmployee}
                            />
                            return (
                                <Employee
                                    key={employee.id}
                                    id={employee.id}
                                    name={employee.name}
                                    role={employee.role}
                                    img={employee.img}
                                    editEmployee={editEmployee}
                                />
                            );
                        })}
                    </div>
                    <AddEmployee newEmployee={newEmployee}/>
                </>
            ) : (
                <h1>No employees to show</h1>
            )}
        </div>
    );
}

export default Employees;
