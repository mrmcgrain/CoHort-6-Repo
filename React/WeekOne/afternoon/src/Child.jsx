import React from 'react'
import GrandChild from './GrandChild'



const Child = ( {user} ) => {
    return (
        <div style={{ border: 'solid blue 8px' }}>Child
            {console.log("Destructrd USER", user)}
            {/* {console.log("PROPS", props)} */}


            <GrandChild user={user} />




        </div>
    )
}

export default Child


// let props = {
//    user : {
//          username: 'Mike",
// }
// }

// let user = {
//     username: "mike"
// }