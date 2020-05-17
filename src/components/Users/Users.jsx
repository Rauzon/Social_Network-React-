import React from "react";
import style from './users.module.css';
import {NavLink, Redirect} from "react-router-dom";


const Users = (props) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];
    for (let i = 1; i < pageCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return (
                        <span className={(props.currentPage == p) ? style.strong : ''}
                              onClick={(event) => {
                                  props.onClickChange(p)
                              }}>{` ${p}`}</span>
                    )
                })}
            </div>
            {props.users.map((u) => <div key={u.id} className={style.content}>
                    <div className={style.content__leftSide}>
                        <div className={style.content__leftSide_img}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={(u.photos.small != null) ? u.photos.small :
                                    u.photos.small = "https://vignette.wikia.nocookie.net/discord-wikia/images/5/5e/Default.png/revision/latest/scale-to-width-down/340?cb=20191215094354&path-prefix=ru"}
                                     alt=""/>
                            </NavLink>
                        </div>
                        <div className={style.content__leftSide_button}>

                            {(u.followed) ? <button disabled={props.isDisabledButton} onClick={() => {
                                    props.unfollowThunk(u.id);

                            }}>Unfollow</button> :

                                <button disabled={props.isDisabledButton} onClick={() => {
                                    props.followThunk(u.id);

                                }}>Follow</button>}
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