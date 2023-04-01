import React,{useState} from "react";
import Card from "./UI/Card/Card";
import Button from './UI/Button/Button'
import Profile from './Components/Profile'
import pic1 from './Images/Women1.jpg'
import pic2 from './Images/Women2.jpg'
import pic3 from './Images/Men3.jpg'
import picMen1 from './Images/Men1.jpg'
import picMen2 from './Images/Men2.jpg'
import BirthCount from "./Components/BirthCount";
function App() {
  const BirthdayInformation=[
    {id:'id1',
     Profile_Image:pic1,
     Name:'Bertie Yates',
     Age:'29 years'},
    {id:'id2',
     Profile_Image:pic2,
     Name:'Hester Hogan',
     Age:'32 years'},
    {id:'id3',
     Profile_Image:picMen1,
     Name:'Larry Little',
     Age:'36 years'},
    {id:'id4',
     Profile_Image:picMen2,
     Name:'Sean Walsh',
     Age:'34 years'},
    {id:'id5',
     Profile_Image:pic3,
     Name:'Lola Gardner',
     Age:'29 years'}
  ]
  const submitHandler=(event)=>{

     BirthdayInformation.splice(0,BirthdayInformation.length);
     setProfileLength(0);
  }
  const [ProfileLength,setProfileLength]=useState(BirthdayInformation.length);
  return (
    <Card count={ProfileLength}>
      <BirthCount length={ProfileLength} />
        {ProfileLength>0 &&
          BirthdayInformation.map(obj=>
            <Profile id={obj.id} Name={obj.Name} Age={obj.Age} Profile_Image={obj.Profile_Image}></Profile>
          )
        }
      <Button  onClick={submitHandler}>Clear All</Button>
    </Card>
  );
}

export default App;
