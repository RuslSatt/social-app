import React, {useRef} from 'react';
import AddCommentPostStyle from './AddCommentPost.module.css'
import Avatar from '../../../assets/images/ava-192.png'
import {useParams} from "react-router-dom";


const AddCommentPost = (props) => {
    const params = useParams();
    const postId = params.postId;

    let inputCommentValue = useRef();

    let addComment = () => {
        let text = inputCommentValue.current.value;
        if (text !== '') {
            props.Posts.map(elem => {
                if (elem.id === postId) {
                    props.addNewComment(elem, postId, props.createdComment)
                }
            })
        }
    }

    let updateTextAndCreateComment = (e) => {
        let text = e.target.value;
        props.updateTextForComment(text);
        props.createComment(postId);
    }

    return (
        <div className={AddCommentPostStyle.AddComment}>
            <div className={AddCommentPostStyle.comment}>
                <img src={Avatar} alt=""/>
                <input onChange={updateTextAndCreateComment} type="text"
                       ref={inputCommentValue}
                       value={props.newCommentText}
                       placeholder='Add a comment'/>
            </div>
            <button onClick={addComment} className={AddCommentPostStyle.btn}>
                Send
            </button>
        </div>
    );
};

export {AddCommentPost};
