import React from 'react';
import PostsHomeStyle from './PostsHome.module.css'
import {HeaderPostHome} from "./HeaderPostHome/HeaderPostHome";
import {PosterPostHome} from "./PosterPostHome/PosterPostHome";
import {NavPostHome} from "./NavPostHome/NavPostHome";
import {NavLink} from "react-router-dom";

class PostsHome extends React.Component {

    render() {
        const getId = (id) => {
            window.scrollTo(0, 0)
            this.props.getPostId(id);
        }
        return (
            <div>
                {this.props.Posts.map(post => {
                    return (
                        <div onClick={() => {
                            getId(post.id)
                        }} key={post.id} className={PostsHomeStyle.Post}>
                            <NavLink to='/post'>
                                <HeaderPostHome avatar={post.avatar} name={post.name} time={post.time}/>
                            </NavLink>
                            <PosterPostHome poster={post.poster}/>
                            <NavPostHome countComment={post.countComment} countLikes={post.countLikes}/>
                        </div>
                    )
                })}
            </div>

        );
    }
}

export {PostsHome};
