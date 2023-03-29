import classses from './BirthCount.module.css'
const BirthCount=(props)=>{
   return (
    <h1 className={classses.BirthCount}>{props.length} Birthdays Today</h1>
   )
};
export default BirthCount;