/**
 * In the following React template, create a simple form at the top that allows the user to enter in a first name, last name, and phone number and there should be a submit button. 
 * Once the submit button is pressed, the information should be displayed in a list below (automatically sorted by last name) along with all the previous information that was entered.
 * This way the application can function as a simple phone book. 
 * When your application loads, the input fields (not the phone book list) should be prepopulated with the following values already:
 * 
    First name = Coder
    Last name = Byte
    Phone = 8885559999
 * 
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
    table: {
        borderCollapse: "collapse"
    },
    tableCell: {
        border: '1px solid gray',
        margin: 0,
        padding: '5px 10px',
        width: 'max-content',
        minWidth: '150px'
    },
    form: {
        container: {
            padding: '20px',
            border: '1px solid #F0F8FF',
            borderRadius: '15px',
            width: 'max-content',
            marginBottom: '40px'
        },
        inputs: {
            marginBottom: '5px'
        },
        submitBtn: {
            marginTop: '10px',
            padding: '10px 15px',
            border: 'none',
            backgroundColor: 'lightseagreen',
            fontSize: '14px',
            borderRadius: '5px'
        }
    }
} as const;

interface phoneFormProps{
        id:null;
        userFirstName: string;
        userLastName: string;
        userPhone: string
}

interface IFormProps{
    id:number;
    userFirstName: string;
    userLastName: string;
    userPhone: string
}

type Props ={}

function PhoneBookForm(props) {
    const initialState:phoneFormProps = {
            id:null,
            userFirstName:'Coder',
            userLastName : 'Byte',
            userPhone :'8885559999'
    }

    const [phoneBookData, setPhoneBookData] = useState<phoneFormProps>(initialState)

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      if(!phoneBookData.userFirstName  || !phoneBookData.userLastName || !phoneBookData.userPhone) return;
        props.addUser(phoneBookData);
        setPhoneBookData(initialState)
    
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
     
        setPhoneBookData({...phoneBookData, [e.target.name]:e.target.value});

    }
    return (
        <form onSubmit={handleSubmit} style={style.form.container}>
            <label>First name:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userFirstname'
                name='userFirstName'
                type='text'
                value={phoneBookData.userFirstName}
                onChange={handleChange}
            />
            <br />
            <label>Last name:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userLastname'
                name='userLastName'
                type='text'
                value={phoneBookData.userLastName}
                onChange={handleChange}
            />
            <br />
            <label>Phone:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userPhone'
                name='userPhone'
                type='text'
                value={phoneBookData.userPhone}
                onChange={handleChange}
            />
            <br />
            <input
                style={style.form.submitBtn}
                className='submitButton'
                type='submit'
                value='Add User'
            />
        </form>
    )
}


function InformationTable(props) {
    const sortedContact  = props.users.sort((a,b)=>a.userLastName.localeCompare(b.userLastName));
   


    const display = sortedContact.length > 0 ? (
        sortedContact.map((user ,index)=>(
          <tr key={index}>
          <td style={style.tableCell}>{user.userFirstName}</td>
          <td style={style.tableCell}>{user.userLastName}</td>
          <td style={style.tableCell}>{user.userPhone}</td>
          </tr>
        ))
    ): 
    (<tr>
        <td colSpan={3}>&nbsp;</td>
    </tr>
    );
    return (
        <table style={style.table} className='informationTable'>
            <thead>
                <tr>
                    <th style={style.tableCell}>First name</th>
                    <th style={style.tableCell}>Last name</th>
                    <th style={style.tableCell}>Phone</th>
                </tr>
            </thead>
            <tbody>{display}</tbody>
        </table>
    );
}

function Application() {
   const userObj:IFormProps[] = [];
   const [users, setUsers] = useState(userObj)
    


   const addUser = (user:IFormProps)=>{
    user.id = Number(users.length + 1);
    setUsers([...users, user])
   };
    return (
        <section>
            <PhoneBookForm addUser={addUser}/>
            <InformationTable users={users}/>
        </section>
    );
}

ReactDOM.render(
    <Application />,
    document.getElementById('test-03')
);