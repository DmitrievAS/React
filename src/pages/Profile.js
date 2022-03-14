import {useDispatch, useSelector} from "react-redux";
import {useCallback, useState} from "react";
import {CHANGE_NAME} from "../store/profile/chatActions";

const Profile = () => {
    const {name} = useSelector(state => state.profile.name);
    const [value, setValue] = useState(name);
    const dispatch = useDispatch();

    const handleChange = useCallback((event) => {
        setValue(event.target.value)
    }, []);

    const setName = useCallback(() => {
        dispatch({type: CHANGE_NAME, payload: value})
    }, [dispatch, value])

    return (
        <div className="userProfile">
            <div>
                <h4>Profile</h4>
            </div>
            <div className="changeUserProfile">
                <input
                    type='text'
                    value={value}
                    onChange={handleChange}
                />
                <button onClick={setName}>Change Name</button>
            </div>

        </div>
    )
}
export default Profile;

// import {useDispatch, useSelector} from "react-redux";
// import {useCallback, useState} from "react";
// import {CHANGE_NAME} from "../store/profile/chatActions";
//
// export default function Profile() {
//     const { name, showName } = useSelector(state => state);
//     const dispatch = useDispatch();
//     const [value, setValue] = useState('');
//
//     const setShowName = useCallback(() => {
//         dispatch({type: CHANGE_NAME, payload: value})
//     }, [dispatch]);
//
//     const handleChange = useCallback((e) => {
//         setValue(e.target.value);
//     }, []);
//
//     const setName = () => {
//     };
//
//     return (
//         <>
//             <div>
//                 <h4>Profile</h4>
//             </div>
//             <div>
//                 <input
//                     type="text"
//                     value={value}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div>
//                 <button onClick={setName}>Change Name</button>
//             </div>
//         </>
//     );
// }

