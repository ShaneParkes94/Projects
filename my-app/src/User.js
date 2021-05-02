// My first prop

// {props.userName}
//const User = (props) => {

// console.log(props);

const User = ({ userName, tweet }) => {
    
    return (
        // My first component
        <div>
            <h2>{userName}</h2>
            <p>{tweet}</p>
        </div>
    );
}

export default User;
