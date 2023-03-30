import classses from './BirthCount.module.css'
const BirthCount=(props)=>{
   return (
    <p className={classses.BirthCount}>{props.length} Birthdays Today</p>
   )
};
export default BirthCount;