import React from "react";
import style from './users.module.css';
import * as axios from 'axios';




const Users = (props) => {
    if (props.users.length == 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            })

        // props.setUsers([
        //     {id: 1,
        //         avatarPhoto: 'https://vignette.wikia.nocookie.net/discord-wikia/images/5/5e/Default.png/revision/latest/scale-to-width-down/340?cb=20191215094354&path-prefix=ru',
        //         follow:false,
        //         userName: 'Maxim', userStatus: 'I\'m would like red color of hair',location:{Country: 'Belarus',City: 'Minsk'
        //         }},
        //     {id: 2,
        //         avatarPhoto: 'https://vignette.wikia.nocookie.net/discord-wikia/images/5/5e/Default.png/revision/latest/scale-to-width-down/340?cb=20191215094354&path-prefix=ru',
        //         follow:true,
        //         userName: 'Egor', userStatus: 'sunshine is cool',location:{Country: 'Latvia',City: 'Riga'
        //         }},
        //     {id: 3,
        //         avatarPhoto: 'https://vignette.wikia.nocookie.net/discord-wikia/images/5/5e/Default.png/revision/latest/scale-to-width-down/340?cb=20191215094354&path-prefix=ru',
        //         follow:true,
        //         userName: 'Maxim', userStatus: 'I\'m would like red color of hair',location:{Country: 'Russia',City: 'Moscow'
        //         }
        //     }
        //     ]

    }

    return (
        <div>
            {
                props.users.map((u) => <div key={u.id} className={style.content}>
                        <div className={style.content__leftSide}>
                            <div className={style.content__leftSide_img}>
                                <img src={(u.photos.small != null) ? u.photos.small:
                                u.photos.small ="https://vignette.wikia.nocookie.net/discord-wikia/images/5/5e/Default.png/revision/latest/scale-to-width-down/340?cb=20191215094354&path-prefix=ru" } alt=""/>
                            </div>
                            <div className={style.content__leftSide_button}>
                                { (u.followed) ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>:
                                    <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                            </div>
                        </div>
                        <div className={style.content__rightSide}>
                            <div className={style.content__rightSide_nameAndStatus}>
                                <div className={style.content__rightSide_name}>
                                    <span>{u.name}</span>
                                </div>
                                <div className={style.content__rightSide_status}>
                                    <span>{u.status}</span>
                                </div>
                            </div>
                            <div className={style.content__rightSide_location}>
                                <div>
                                    <span>{"u.location.Country"}</span>
                                </div>
                                <div>
                                    <span>{"u.location.City"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Users;