import React from "react";
import style from './users.module.css';
import * as axios from 'axios';

class UsersClass extends React.Component {
    showUsers = () => {
        if(this.props.users.length == 0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.showUsers}>Get users</button>
                {this.props.users.map((u) => <div key={u.id} className={style.content}>
                        <div className={style.content__leftSide}>
                            <div className={style.content__leftSide_img}>
                                <img src={(u.photos.small != null) ? u.photos.small:
                                    u.photos.small ="https://vignette.wikia.nocookie.net/discord-wikia/images/5/5e/Default.png/revision/latest/scale-to-width-down/340?cb=20191215094354&path-prefix=ru" } alt=""/>
                            </div>
                            <div className={style.content__leftSide_button}>
                                { (u.followed) ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>:
                                    <button onClick={() => {this.props.follow(u.id)}}>Follow</button>}
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
}

export default UsersClass;